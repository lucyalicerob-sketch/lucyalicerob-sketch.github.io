import sys
# Force stdout/stderr to UTF-8
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

import http.server
import socketserver
import json
import os
import zipfile
import base64
from datetime import datetime

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def update_zip_archives():
    portfolio_dir = DIRECTORY
    zip_paths = [
        os.path.join(portfolio_dir, 'Lucy_Robinson_Portfolio_Website.zip'),
        os.path.abspath(os.path.join(portfolio_dir, '..', 'Lucy_Robinson_Portfolio_Website.zip'))
    ]

    for zip_path in zip_paths:
        try:
            with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                for root, dirs, files in os.walk(portfolio_dir):
                    if any(x in root for x in ['.git', '__pycache__', '.temp', 'backups']):
                        continue
                    for file in files:
                        if file.endswith('.zip') or file.startswith('.'):
                            continue
                        full_path = os.path.join(root, file)
                        rel_path = os.path.relpath(full_path, portfolio_dir)
                        zipf.write(full_path, rel_path)
        except Exception as e:
            print(f"Error updating zip {zip_path}: {e}")

class PortfolioRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        ctype = super().guess_type(path)
        if ctype.startswith('text/') or ctype in ['application/javascript', 'application/json']:
            if 'charset=' not in ctype:
                ctype += '; charset=utf-8'
        return ctype

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_POST(self):
        if self.path == '/api/upload-document':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                payload = json.loads(post_data.decode('utf-8'))
                
                filename = payload.get('filename', 'uploaded_file.png')
                clean_name = os.path.basename(filename).replace(' ', '_')
                data_b64 = payload.get('dataBase64', '')
                if ',' in data_b64:
                    data_b64 = data_b64.split(',', 1)[1]
                
                doc_bytes = base64.b64decode(data_b64)
                doc_dir = os.path.join(DIRECTORY, 'assets', 'documents')
                os.makedirs(doc_dir, exist_ok=True)
                
                dest_path = os.path.join(doc_dir, clean_name)
                with open(dest_path, 'wb') as f:
                    f.write(doc_bytes)
                
                rel_url = f"assets/documents/{clean_name}"
                update_zip_archives()
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'url': rel_url, 'filename': clean_name}).encode('utf-8'))
                print(f"[Upload] Saved document to {dest_path}")
                return
            except Exception as e:
                print(f"Error uploading document: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                return

        if self.path == '/api/save-portfolio-data':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))

                # Write directly to scripts/portfolio-data.js
                js_target = os.path.join(DIRECTORY, 'scripts', 'portfolio-data.js')
                now_str = datetime.now().strftime('%d %B %Y at %H:%M:%S')

                js_content = f"""/**
 * PORTFOLIO DATA SOURCE
 * Lucy Robinson — Mechanical Engineering & Themed Ride Systems
 * Auto-Synchronized from Visual Studio Editor: {now_str}
 */

const PORTFOLIO_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};
"""
                with open(js_target, 'w', encoding='utf-8') as f:
                    f.write(js_content)

                # Also save permanent backup snapshot
                backup_dir = os.path.join(DIRECTORY, 'backups')
                os.makedirs(backup_dir, exist_ok=True)
                with open(os.path.join(backup_dir, 'portfolio_master_data.json'), 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)

                update_zip_archives()

                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'message': 'Data permanently written to disk'}).encode('utf-8'))
                print(f"[Save] Synchronized master data to {js_target}")
                return
            except Exception as e:
                print(f"Error saving portfolio data: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                return

        self.send_error(404, "Endpoint not found")

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PortfolioRequestHandler) as httpd:
        print("==================================================")
        print("Lucy Robinson Portfolio Live Server Running!")
        print(f"Local Website: http://localhost:{PORT}/index.html")
        print(f"Visual Studio: http://localhost:{PORT}/editor.html")
        print(f"Directory:     {DIRECTORY}")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == '__main__':
    run_server()
