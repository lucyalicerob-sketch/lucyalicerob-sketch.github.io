
window.formatImageSrc = function(src) {
  if (!src) return '';
  return src;
};
/**
 * VISUAL PORTFOLIO STUDIO, CMS & CENTRAL MEDIA STORE
 * Exclusive Editing Access: Lucy Robinson (Owner) & Mat Robinson (Collaborator)
 */

// Storage keys
const STORAGE_KEY = 'lucy_portfolio_studio_data';
const PASSKEY_STORAGE_KEY = 'lucy_studio_custom_passkey';
const DEFAULT_PASSKEY = 'lucy2026';
const AUTH_SESSION_KEY = 'lucy_studio_authenticated_session';
const GOOGLE_USER_SESSION_KEY = 'lucy_studio_google_user_session';

// Authorized Collaborators
const AUTHORIZED_COLLABORATORS = [
  'lucyalicerob@gmail.com',
  'mat.j.robinson@gmail.com'
];

// Default Central Media Assets Library
const DEFAULT_MEDIA_LIBRARY = [
  { name: "Reaching Aid CAD Assembly Drawing", url: "assets/images/real-cad/reaching_aid_assembly_drawing.png", category: "cad" },
  { name: "Gripper Part Drawing", url: "assets/images/real-cad/reaching_aid_gripper_part_drawing.png", category: "cad" },
  { name: "Trigger Mechanism Drawing", url: "assets/images/real-cad/trigger_mechanism_drawing.png", category: "cad" },
  { name: "Trackless AGV 3D CAD Assembly", url: "assets/images/extracted/image1.png", category: "cad" },
  { name: "AGV Kinematics Simulation", url: "assets/images/extracted/image5.png", category: "cad" },
  { name: "AGV Packaging Layout Drawing", url: "assets/images/solidworks-renders/trackless_chassis_cad.svg", category: "cad" },
  { name: "Mine Train 3-Wheel Bogie 3D Assembly", url: "assets/images/extracted/image2.png", category: "cad" },
  { name: "Bogie Kinematic Articulation Plot", url: "assets/images/extracted/image6.png", category: "cad" },
  { name: "Bogie ASME Y14.5 GD&T Drawing", url: "assets/images/solidworks-renders/bogie_drawing_gdt.svg", category: "cad" },
  { name: "Turntable 3D CAD Assembly", url: "assets/images/extracted/image3.png", category: "cad" },
  { name: "Turntable Pneumatic Locking Simulation", url: "assets/images/extracted/image7.png", category: "cad" },
  { name: "Turntable Kinematic Layout Drawing", url: "assets/images/trip-photos/trip_turntable_station.svg", category: "cad" },
  { name: "Transit Platform Lift 3D CAD Model", url: "assets/images/real-cad/bakerloo_lift_final_cad.png", category: "cad" },
  { name: "Transit Lift Scissor Mechanism", url: "assets/images/real-cad/bakerloo_lift_cad_mechanism.png", category: "cad" },
  { name: "Transit Lift Concept Schematic", url: "assets/images/real-cad/bakerloo_lift_concept_schematic.png", category: "cad" },
  { name: "Transit Lift Ideation Sketches", url: "assets/images/real-cad/bakerloo_lift_ideation_sketches.png", category: "cad" },
  { name: "Rolling Stock Door Cushion CAD Model", url: "assets/images/real-cad/bakerloo_door_cushion_final_cad.png", category: "cad" },
  { name: "Door Damping Ideation Calculations", url: "assets/images/real-cad/bakerloo_door_mechanism_ideation.png", category: "cad" },
  { name: "Door Cushion Sketches", url: "assets/images/real-cad/bakerloo_door_cushion_sketches.png", category: "cad" },
  { name: "Gearbox 3D Split-Casing CAD Model", url: "assets/images/extracted/image14.png", category: "cad" },
  { name: "Gearbox Internal Tooth Meshing", url: "assets/images/extracted/image13.png", category: "cad" },
  { name: "Gearbox 2-Stage Reduction Schematic", url: "assets/images/uni_gearbox.svg", category: "cad" },
  { name: "Project Photo 01 (Test Chassis)", url: "assets/images/project-photos/1.jpg", category: "photos" },
  { name: "Project Photo 02 (Scale Bogie)", url: "assets/images/project-photos/2.jpg", category: "photos" },
  { name: "Project Photo 03 (Workbench Turntable)", url: "assets/images/project-photos/3.jpg", category: "photos" },
  { name: "Project Photo 04 (Fabricated Parts)", url: "assets/images/project-photos/4.jpg", category: "photos" },
  { name: "Project Photo 09 (1st Year Uni Mechanical Design Task Build)", url: "assets/images/project-photos/9.jpg", category: "photos" },
  { name: "Lucy Headshot Portrait", url: "assets/images/personal/lucy_headshot.jpg", category: "personal" },
  { name: "Lucy Disney Mickey Ears", url: "assets/images/personal/lucy_disney_mickey.jpg", category: "personal" },
  { name: "Europa-Park Poseidon Water Coaster", url: "assets/images/personal/europa_park_water_coaster.jpg", category: "personal" },
  { name: "Europa-Park Colosseo Hotel", url: "assets/images/personal/europa_park_colosseo.jpg", category: "personal" },
  { name: "Disneyland Paris Frontierland", url: "assets/images/personal/disneyland_frontierland.jpg", category: "personal" },
  { name: "DLR Bogie Maintenance Depot SVG", url: "assets/images/trip-photos/trip_dlr_bogie_depot.svg", category: "trips" }
];

// Helper to get active passkey
function getActivePasskey() {
  return localStorage.getItem(PASSKEY_STORAGE_KEY) || DEFAULT_PASSKEY;
}

// Check session authentication status
function isStudioAuthenticated() {
  return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
}

function getAuthenticatedGoogleUser() {
  const u = sessionStorage.getItem(GOOGLE_USER_SESSION_KEY);
  if (u) {
    try { return JSON.parse(u); } catch (e) {}
  }
  return null;
}

function authenticateStudio(key) {
  if (key === getActivePasskey()) {
    sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
    return true;
  }
  return false;
}

function authenticateWithGoogleAccount(googleUser) {
  const email = (googleUser.email || '').toLowerCase().trim();
  if (AUTHORIZED_COLLABORATORS.includes(email)) {
    sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
    sessionStorage.setItem(GOOGLE_USER_SESSION_KEY, JSON.stringify(googleUser));
    if (typeof showStudioToast === 'function') {
      showStudioToast(`✓ Signed in as ${googleUser.name || email}`);
    }
    return true;
  }
  return false;
}

function lockStudioSession() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  sessionStorage.removeItem(GOOGLE_USER_SESSION_KEY);
  if (typeof showStudioToast === 'function') {
    showStudioToast('🔒 Studio locked.');
  }
}

/**
 * Keyboard shortcut listener: Ctrl + Shift + E opens Studio
 */
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
    e.preventDefault();
    openStudioModal();
  }
});

/**
 * Decode JWT token returned by Google Identity Services (GIS)
 */
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

/**
 * Handle Google GIS Credential Callback
 */
window.handleGoogleCredentialResponse = function(response) {
  if (response && response.credential) {
    const payload = parseJwt(response.credential);
    if (payload && payload.email) {
      const success = authenticateWithGoogleAccount({
        email: payload.email,
        name: payload.name || payload.email,
        picture: payload.picture || ''
      });
      if (success) {
        closePasskeyModal();
        if (window.location.pathname.includes('editor.html')) {
          if (typeof checkAuthAndRender === 'function') checkAuthAndRender();
        } else {
          openAuthenticatedStudioModal();
        }
      } else {
        alert('⛔ Access Restricted: Only authorized collaborators (Lucy & Mat) can edit this portfolio.');
      }
    }
  }
};

/**
 * Quick Google Login for Authorized Collaborator
 */
window.signInAsCollaborator = function(email, name, onSuccessCallback) {
  const user = {
    email: email,
    name: name,
    picture: 'https://lh3.googleusercontent.com/a/default-user=s96-c'
  };
  authenticateWithGoogleAccount(user);
  closePasskeyModal();
  if (typeof onSuccessCallback === 'function') {
    onSuccessCallback();
  } else if (window.location.pathname.includes('editor.html')) {
    if (typeof checkAuthAndRender === 'function') checkAuthAndRender();
  } else {
    openAuthenticatedStudioModal();
  }
};

/**
 * Generic Sign in with Google (Verifies collaborator email)
 */
window.handleGenericGoogleSignIn = function(onSuccessCallback) {
  const emailInput = prompt("Sign in with Google\nEnter your authorized Google email address:");
  if (!emailInput) return;
  const email = emailInput.toLowerCase().trim();
  if (AUTHORIZED_COLLABORATORS.includes(email)) {
    const name = email.includes('lucy') ? 'Lucy Robinson' : (email.includes('mat') ? 'Mat Robinson' : email);
    authenticateWithGoogleAccount({ email: email, name: name });
    closePasskeyModal();
    if (typeof onSuccessCallback === 'function') {
      onSuccessCallback();
    } else if (window.location.pathname.includes('editor.html')) {
      if (typeof checkAuthAndRender === 'function') checkAuthAndRender();
    } else {
      openAuthenticatedStudioModal();
    }
  } else {
    alert('⛔ Access Restricted: Only authorized collaborators (Lucy & Mat) are permitted to edit this portfolio.');
  }
};

// Version key to detect updates on disk
const DATA_VERSION_KEY = 'lucy_portfolio_data_version';

// Load stored data or default to PORTFOLIO_DATA with automatic disk version sync
function getWorkingData() {
  const currentDiskVersion = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.dataVersion) ? PORTFOLIO_DATA.dataVersion : 'v1';
  const savedVersion = localStorage.getItem(DATA_VERSION_KEY);

  // If disk dataset has a new version, automatically clear stale cache and sync fresh disk data
  if (savedVersion !== currentDiskVersion) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(DATA_VERSION_KEY, currentDiskVersion);
    return JSON.parse(JSON.stringify(PORTFOLIO_DATA));
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing saved studio data:', e);
    }
  }
  return JSON.parse(JSON.stringify(PORTFOLIO_DATA));
}

// Global active working data
let currentStudioData = getWorkingData();
currentStudioData.mediaLibrary = currentStudioData.mediaLibrary || [];

// Sync loaded data with live app if present (Deep Merge to ensure all edited fields take effect)
function repairImagePaths(targetList, defaultList) {
  if (!Array.isArray(targetList) || !Array.isArray(defaultList)) return;
  targetList.forEach(item => {
    const def = defaultList.find(d => d.id === item.id);
    if (!def) return;
    if (!item.coverImage || item.coverImage.includes('googleusercontent.com') || item.coverImage.includes('drive.google.com')) {
      item.coverImage = def.coverImage;
    }
    if (def.cadGallery && (!item.cadGallery || item.cadGallery.length === 0 || item.cadGallery.some(g => g.url && g.url.includes('googleusercontent.com')))) {
      item.cadGallery = def.cadGallery;
    }
    if (def.article && def.article.tabImages) {
      item.article = item.article || {};
      item.article.tabImages = item.article.tabImages || def.article.tabImages;
      for (let key in def.article.tabImages) {
        if (!item.article.tabImages[key] || !item.article.tabImages[key].url || item.article.tabImages[key].url.includes('googleusercontent.com')) {
          item.article.tabImages[key] = def.article.tabImages[key];
        }
      }
    }
  });
}

if (typeof PORTFOLIO_DATA !== 'undefined') {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.profile) PORTFOLIO_DATA.profile = Object.assign(PORTFOLIO_DATA.profile || {}, parsed.profile);
      if (parsed.skills) PORTFOLIO_DATA.skills = Object.assign(PORTFOLIO_DATA.skills || {}, parsed.skills);
      if (parsed.education) PORTFOLIO_DATA.education = Object.assign(PORTFOLIO_DATA.education || {}, parsed.education);
      
      if (parsed.featuredProjects) {
        repairImagePaths(parsed.featuredProjects, PORTFOLIO_DATA.featuredProjects || []);
        PORTFOLIO_DATA.featuredProjects = parsed.featuredProjects;
      }
      if (parsed.universityProjects) {
        repairImagePaths(parsed.universityProjects, PORTFOLIO_DATA.universityProjects || []);
        PORTFOLIO_DATA.universityProjects = parsed.universityProjects;
      }
      if (parsed.diaryEntries) {
        repairImagePaths(parsed.diaryEntries, PORTFOLIO_DATA.diaryEntries || []);
        PORTFOLIO_DATA.diaryEntries = parsed.diaryEntries;
      }
      if (parsed.experience) PORTFOLIO_DATA.experience = parsed.experience;
      if (parsed.mediaLibrary) PORTFOLIO_DATA.mediaLibrary = PORTFOLIO_DATA.mediaLibrary;
    } catch (e) {
      console.error('Sync error:', e);
    }
  }
}

/**
 * Save current studio data to local storage and update PORTFOLIO_DATA & live DOM
 */
function saveStudioData(data, notify = true) {
  try {
    currentStudioData = data;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (quotaErr) {
      console.warn('localStorage quota warning, trimming heavy cache:', quotaErr);
      const lightweightCopy = { ...data, mediaLibrary: (data.mediaLibrary || []).slice(0, 10) };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweightCopy));
      } catch (e2) {
        console.error('Could not save to localStorage:', e2);
      }
    }

    if (typeof PORTFOLIO_DATA !== 'undefined') {
      Object.assign(PORTFOLIO_DATA, data);
    }

    // Try saving directly to dev server disk if running
    try {
      fetch('/api/save-portfolio-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(r => r.json()).then(res => {
        if (res && res.success) console.log('✓ Disk auto-save synchronized successfully.');
      }).catch(() => {});
    } catch (e) {}

    if (typeof initApp === 'function') {
      initApp();
    }
    if (notify && typeof showStudioToast === 'function') {
      showStudioToast('✓ Portfolio changes saved! Live site updated.');
    }
  } catch (err) {
    console.error('saveStudioData error:', err);
    if (notify && typeof showStudioToast === 'function') {
      showStudioToast('✓ Changes saved to current session.');
    }
  }
}

/**
 * Central Media Store Functions
 */
function getAllMediaAssets() {
  const userUploads = currentStudioData.mediaLibrary || [];
  return [...userUploads, ...DEFAULT_MEDIA_LIBRARY];
}


/**
 * Ultra-Fast Client-Side Image Compressor & Normalizer
 * Scales large photos to 1600px max and compresses to ~100-200KB for instant loading & zero localStorage quota issues
 */
function compressAndProcessImage(file, maxDimension = 1600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('No file provided'));
    const reader = new FileReader();

    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Export as optimized JPEG or PNG
        const isPng = file.type === 'image/png' && file.size < 1024 * 1024;
        const mimeType = isPng ? 'image/png' : 'image/jpeg';
        const compressedDataUrl = canvas.toDataURL(mimeType, quality);
        
        resolve({
          name: file.name.replace(/\.[^/.]+$/, ""),
          url: compressedDataUrl,
          category: "uploaded",
          date: new Date().toLocaleDateString('en-GB'),
          size: `${Math.round(compressedDataUrl.length * 0.75 / 1024)} KB`
        });
      };
      img.onerror = () => reject(new Error('Failed to load image for compression'));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

function handleMediaUpload(fileInput, callback) {
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
  const file = fileInput.files[0];

  if (typeof showStudioToast === 'function') {
    showStudioToast('⏳ Optimizing & uploading photo...');
  }

  compressAndProcessImage(file)
    .then(item => {
      currentStudioData.mediaLibrary = currentStudioData.mediaLibrary || [];
      currentStudioData.mediaLibrary.unshift(item);
      saveStudioData(currentStudioData, false);
      if (typeof showStudioToast === 'function') {
        showStudioToast(`✓ Uploaded "${item.name}" to Media Store!`);
      }
      if (typeof callback === 'function') callback(item);
      fileInput.value = '';
    })
    .catch(err => {
      console.error('Image upload error:', err);
      alert('Could not process image: ' + err.message);
    });
}

let activeMediaTargetInputId = null;
let activeMediaPreviewImgId = null;

function openMediaPickerModal(targetInputId, previewImgId) {
  activeMediaTargetInputId = targetInputId;
  activeMediaPreviewImgId = previewImgId;

  let pickerModal = document.getElementById('centralMediaPickerModal');
  if (!pickerModal) {
    pickerModal = document.createElement('div');
    pickerModal.id = 'centralMediaPickerModal';
    pickerModal.className = 'modal-backdrop';
    pickerModal.innerHTML = `
      <div class="modal-dialog" style="max-width: 960px; height: 88vh; display: flex; flex-direction: column;">
        <div class="modal-header" style="background: var(--bg-surface); padding: 18px 24px; border-bottom: 1.5px solid var(--border-light);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="font-size: 1.5rem;">🖼️</div>
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Central Media Store &amp; Photo Picker</h3>
              <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">Click any photo below to choose it, or upload a new file from your computer</div>
            </div>
          </div>
          <button class="modal-close" onclick="closeMediaPickerModal()">✕</button>
        </div>

        <div style="padding: 14px 24px; background: var(--bg-subtle); border-bottom: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm media-cat-filter active" onclick="filterMediaPicker('all', this)">All Assets</button>
            <button class="btn btn-secondary btn-sm media-cat-filter" onclick="filterMediaPicker('cad', this)">CAD Drawings</button>
            <button class="btn btn-secondary btn-sm media-cat-filter" onclick="filterMediaPicker('photos', this)">Project Photos</button>
            <button class="btn btn-secondary btn-sm media-cat-filter" onclick="filterMediaPicker('personal', this)">Trips &amp; Personal</button>
            <button class="btn btn-secondary btn-sm media-cat-filter" onclick="filterMediaPicker('uploaded', this)">My Uploads</button>
          </div>

          <div>
            <label class="btn btn-primary btn-sm" style="cursor: pointer; margin: 0; display: inline-flex; align-items: center; gap: 6px;">
              <span>📤</span> Upload Computer Photo
              <input type="file" accept="image/*" style="display: none;" onchange="handleMediaUpload(this, (item) => { renderMediaPickerGrid('all'); selectMediaItem(item.url); })">
            </label>
          </div>
        </div>

        <div class="modal-content-scroll" style="flex-grow: 1; padding: 24px;" id="mediaPickerGridContainer">
          <!-- Dynamically populated media grid -->
        </div>

        <div class="modal-footer" style="padding: 14px 24px; background: var(--bg-surface); border-top: 1.5px solid var(--border-light); display: flex; justify-content: flex-end;">
          <button class="btn btn-secondary" onclick="closeMediaPickerModal()">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(pickerModal);
  }

  renderMediaPickerGrid('all');
  pickerModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMediaPickerModal() {
  const modal = document.getElementById('centralMediaPickerModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function filterMediaPicker(category, btn) {
  document.querySelectorAll('.media-cat-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMediaPickerGrid(category);
}

function renderMediaPickerGrid(category) {
  const container = document.getElementById('mediaPickerGridContainer');
  if (!container) return;

  let assets = getAllMediaAssets();
  if (category !== 'all') {
    assets = assets.filter(a => a.category === category);
  }

  window.currentPickerAssetList = assets;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px;">
      ${assets.map((item, idx) => `
        <div style="background: var(--bg-surface); border: 1.5px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; cursor: pointer; transition: transform 0.2s, border-color 0.2s;" onmouseover="this.style.borderColor='var(--park-copper)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='var(--border-light)'; this.style.transform='none';" onclick="selectMediaItemByIndex(${idx})">
          <div style="height: 120px; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 6px;">
            <img src="${item.url}" alt="${item.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;" referrerpolicy="no-referrer" onerror="this.src='assets/images/extracted/image1.png'">
          </div>
          <div style="padding: 10px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; border-top: 1px solid var(--border-light);">
            <div style="font-weight: 700; font-size: 0.8rem; color: var(--text-main); margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">
              <span>${(item.category || 'MEDIA').toUpperCase()}</span>
              <span style="color: var(--park-copper); font-weight: 700;">Choose →</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.selectMediaItemByIndex = function(idx) {
  if (window.currentPickerAssetList && window.currentPickerAssetList[idx]) {
    selectMediaItem(window.currentPickerAssetList[idx].url);
  }
};

function selectMediaItem(url) {
  if (activeMediaTargetInputId) {
    const input = document.getElementById(activeMediaTargetInputId);
    if (input) {
      input.value = url;
      input.dispatchEvent(new Event('change'));
    }
  }
  if (activeMediaPreviewImgId) {
    const preview = document.getElementById(activeMediaPreviewImgId);
    if (preview) preview.src = url;
  }
  closeMediaPickerModal();
  if (typeof showStudioToast === 'function') {
    showStudioToast('✓ Image selected and updated!');
  }
}

/**
 * Export clean JavaScript file for portfolio-data.js
 */
function exportPortfolioDataFile() {
  const jsContent = `/**\n * PORTFOLIO DATA SOURCE\n * Lucy Robinson — Mechanical Engineering & Themed Ride Systems\n * Last Updated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}\n */\n\nconst PORTFOLIO_DATA = ${JSON.stringify(currentStudioData, null, 2)};\n`;
  
  const blob = new Blob([jsContent], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Copy portfolio-data.js content to clipboard
 */
function copyPortfolioDataToClipboard() {
  const jsContent = `/**\n * PORTFOLIO DATA SOURCE\n * Lucy Robinson — Mechanical Engineering & Themed Ride Systems\n * Last Updated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}\n */\n\nconst PORTFOLIO_DATA = ${JSON.stringify(currentStudioData, null, 2)};\n`;
  
  navigator.clipboard.writeText(jsContent).then(() => {
    if (typeof showStudioToast === 'function') {
      showStudioToast('✓ portfolio-data.js code copied to clipboard!');
    } else {
      alert('portfolio-data.js copied to clipboard!');
    }
  });
}

/**
 * Reset back to default initial dataset
 */
function resetStudioDataToDefaults() {
  if (confirm('Are you sure you want to reset all edits to the original default portfolio data?')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

/**
 * Open Studio modal inside index.html (Prompt passkey/Google Auth if not unlocked)
 */
function openStudioModal() {
  if (!isStudioAuthenticated()) {
    openPasskeyPromptModal(() => {
      openAuthenticatedStudioModal();
    });
  } else {
    openAuthenticatedStudioModal();
  }
}

function openAuthenticatedStudioModal() {
  let modal = document.getElementById('portfolioStudioModal');
  if (!modal) {
    createStudioModalElement();
    modal = document.getElementById('portfolioStudioModal');
  }
  populateStudioModalFields();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStudioModal() {
  const modal = document.getElementById('portfolioStudioModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Google Auth & Passkey Verification Prompt Modal
 */
function openPasskeyPromptModal(onSuccessCallback) {
  let passModal = document.getElementById('studioPasskeyModal');
  if (!passModal) {
    passModal = document.createElement('div');
    passModal.id = 'studioPasskeyModal';
    passModal.className = 'modal-backdrop';
    passModal.innerHTML = `
      <div class="modal-dialog" style="max-width: 440px; padding: 0; overflow: hidden; border: 1.5px solid var(--park-copper); box-shadow: 0 16px 48px rgba(0,0,0,0.35);">
        <div style="background: var(--bg-surface); padding: 24px; text-align: center; border-bottom: 1.5px solid var(--border-light);">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🔐</div>
          <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Collaborator Authentication</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Sign in with an authorized Google account or enter passkey.
          </p>
        </div>
        
        <div style="padding: 24px; background: var(--bg-card);">
          <!-- Google Sign-In Button -->
          <button type="button" class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; font-weight: 600; font-size: 0.95rem; background: var(--bg-surface); border: 1.5px solid var(--border-medium); margin-bottom: 18px; cursor: pointer;" onclick="handleGenericGoogleSignIn(() => { if (typeof window._passSuccessCb === 'function') window._passSuccessCb(); })">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.59.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.347 2.825.957 4.039l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span>Sign in with Google</span>
          </button>

          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
            <div style="flex: 1; height: 1px; background: var(--border-light);"></div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">OR USE PASSKEY</div>
            <div style="flex: 1; height: 1px; background: var(--border-light);"></div>
          </div>

          <div style="margin-bottom: 16px;">
            <label class="studio-label">Enter Passkey</label>
            <div style="position: relative;">
              <input type="password" id="studioPasskeyInput" class="studio-input" placeholder="Enter passkey..." style="font-size: 1rem; padding-right: 42px;" autocomplete="current-password">
              <button type="button" onclick="togglePasskeyVisibility('studioPasskeyInput', this)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.1rem; color: var(--text-muted);" title="Show/Hide">👁️</button>
            </div>
            <div id="passkeyErrorMsg" style="color: var(--coaster-red); font-size: 0.8rem; margin-top: 6px; font-weight: 600; display: none;">
              ✕ Incorrect passkey. Please try again.
            </div>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" style="flex: 1;" onclick="closePasskeyModal()">Cancel</button>
            <button class="btn btn-primary" style="flex: 1;" id="btnVerifyStudioPasskey">Unlock 🔓</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(passModal);
  }

  window._passSuccessCb = onSuccessCallback;
  const passInput = document.getElementById('studioPasskeyInput');
  const errorMsg = document.getElementById('passkeyErrorMsg');
  const btnVerify = document.getElementById('btnVerifyStudioPasskey');

  if (errorMsg) errorMsg.style.display = 'none';
  if (passInput) {
    passInput.value = '';
    setTimeout(() => passInput.focus(), 150);
    passInput.onkeydown = (e) => {
      if (e.key === 'Enter') handleVerification();
    };
  }

  const handleVerification = () => {
    const key = passInput.value.trim();
    if (authenticateStudio(key)) {
      closePasskeyModal();
      if (typeof onSuccessCallback === 'function') {
        onSuccessCallback();
      }
    } else {
      if (errorMsg) {
        errorMsg.style.display = 'block';
        passInput.style.borderColor = 'var(--coaster-red)';
      }
    }
  };

  if (btnVerify) {
    btnVerify.onclick = handleVerification;
  }

  passModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePasskeyModal() {
  const modal = document.getElementById('studioPasskeyModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function togglePasskeyVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
  }
}

/**
 * Creates the modal markup dynamically if not already in index.html
 */
function createStudioModalElement() {
  const modalDiv = document.createElement('div');
  modalDiv.id = 'portfolioStudioModal';
  modalDiv.className = 'modal-backdrop';
  modalDiv.innerHTML = `
    <div class="modal-dialog" style="max-width: 980px; height: 92vh; display: flex; flex-direction: column;">
      <div class="modal-header" style="background: var(--bg-surface); border-bottom: 1.5px solid var(--border-light); padding: 18px 24px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 1.4rem;">⚙️</div>
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Portfolio Visual Editor &amp; Studio</h3>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">Collaborative Studio: Lucy Robinson &amp; Mat Robinson</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-secondary btn-sm" onclick="lockStudioSession(); closeStudioModal();" title="Lock session">🔒 Lock</button>
          <a href="editor.html" class="btn btn-secondary btn-sm" style="font-size: 0.78rem;">Full Studio Dashboard ↗</a>
          <button class="modal-close" onclick="closeStudioModal()" aria-label="Close modal">✕</button>
        </div>
      </div>

      <div style="display: flex; gap: 8px; padding: 12px 24px; background: var(--bg-subtle); border-bottom: 1px solid var(--border-light); overflow-x: auto;">
        <button class="studio-tab-btn active" data-tab="quick-profile" onclick="switchStudioTab('quick-profile')">👤 Profile &amp; Hero</button>
        <button class="studio-tab-btn" data-tab="quick-workbench" onclick="switchStudioTab('quick-workbench')">⚡ Workbench &amp; Story</button>
        <button class="studio-tab-btn" data-tab="quick-projects" onclick="switchStudioTab('quick-projects')">🚀 CAD Projects</button>
        <button class="studio-tab-btn" data-tab="quick-diary" onclick="switchStudioTab('quick-diary')">📝 Field Notes</button>
        <button class="studio-tab-btn" data-tab="quick-skills" onclick="switchStudioTab('quick-skills')">🛠️ Skills Toolkit</button>
        <button class="studio-tab-btn" data-tab="quick-media" onclick="switchStudioTab('quick-media')">🖼️ Media Store</button>
        <button class="studio-tab-btn" data-tab="quick-security" onclick="switchStudioTab('quick-security')">🔐 Security &amp; Access</button>
        <button class="studio-tab-btn" data-tab="quick-export" onclick="switchStudioTab('quick-export')">💾 Save &amp; Export</button>
      </div>

      <div class="modal-content-scroll" style="flex-grow: 1; padding: 24px;" id="studioModalTabContent">
        <!-- Tab Content dynamically filled -->
      </div>

      <div class="modal-footer" style="padding: 16px 24px; background: var(--bg-surface); border-top: 1.5px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-secondary btn-sm" onclick="exportPortfolioDataFile()">💾 Download portfolio-data.js</button>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-secondary" onclick="closeStudioModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveStudioModalChanges()">Apply Changes &amp; Update Live Site</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);
}

function switchStudioTab(tabId) {
  document.querySelectorAll('.studio-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  renderStudioTabContent(tabId);
}

function populateStudioModalFields() {
  currentStudioData = getWorkingData();
  switchStudioTab('quick-profile');
}

function renderStudioTabContent(tabId) {
  const container = document.getElementById('studioModalTabContent');
  if (!container) return;
  const d = currentStudioData;
  const p = d.profile || {};
  const gUser = getAuthenticatedGoogleUser();

  if (tabId === 'quick-profile') {
    const soc = p.socials || {};
    const edu = p.education || {};
    const cStat = p.currentStatus || {};
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">👤 Profile, Identity &amp; Contact Info</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label class="studio-label">Full Name</label>
            <input type="text" id="stuName" class="studio-input" value="${p.name || ''}">
          </div>
          <div>
            <label class="studio-label">Role / Degree Title</label>
            <input type="text" id="stuRole" class="studio-input" value="${p.role || ''}">
          </div>
          <div>
            <label class="studio-label">Tagline (Hero Statement)</label>
            <input type="text" id="stuTagline" class="studio-input" value="${p.tagline || ''}">
          </div>
          <div>
            <label class="studio-label">Subtagline (Pills Bar)</label>
            <input type="text" id="stuSubtagline" class="studio-input" value="${p.subtagline || ''}">
          </div>
          <div>
            <label class="studio-label">Email Address</label>
            <input type="email" id="stuEmail" class="studio-input" value="${soc.email || ''}">
          </div>
          <div>
            <label class="studio-label">Phone Number</label>
            <input type="text" id="stuPhone" class="studio-input" value="${soc.phone || ''}">
          </div>
          <div>
            <label class="studio-label">Summer Intern Company</label>
            <input type="text" id="stuCompany" class="studio-input" value="${cStat.company || ''}">
          </div>
          <div>
            <label class="studio-label">Summer Intern Division</label>
            <input type="text" id="stuDivision" class="studio-input" value="${cStat.division || ''}">
          </div>
        </div>

        <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem; margin-top: 8px;">🎓 Education &amp; University</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label class="studio-label">University</label>
            <input type="text" id="stuUniv" class="studio-input" value="${edu.university || ''}">
          </div>
          <div>
            <label class="studio-label">Degree Programme</label>
            <input type="text" id="stuDegree" class="studio-input" value="${edu.degree || ''}">
          </div>
          <div>
            <label class="studio-label">Classification / Grade</label>
            <input type="text" id="stuGrade" class="studio-input" value="${edu.grade || ''}">
          </div>
          <div>
            <label class="studio-label">Award</label>
            <input type="text" id="stuAward" class="studio-input" value="${edu.award || ''}">
          </div>
        </div>
      </div>
    `;
  } else if (tabId === 'quick-workbench') {
    const story = p.personalStory || {};
    const wb = p.workbenchLive || {};
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">⚡ Active Workbench Build (2026)</div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label class="studio-label">Current Build Name</label>
            <input type="text" id="stuWbBuild" class="studio-input" value="${wb.currentBuild || ''}">
          </div>
          <div>
            <label class="studio-label">Software / Tools</label>
            <input type="text" id="stuWbSoftware" class="studio-input" value="${wb.currentSoftware || ''}">
          </div>
        </div>

        <div>
          <label class="studio-label">Current Build Status</label>
          <input type="text" id="stuWbStatus" class="studio-input" value="${wb.status || ''}">
        </div>

        <div>
          <label class="studio-label">Next Engineering Milestone</label>
          <input type="text" id="stuWbNext" class="studio-input" value="${wb.nextMilestone || ''}">
        </div>

        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem; margin-top: 14px;">📖 "Who Am I" Personal Story</div>

        <div>
          <label class="studio-label">Story Headline</label>
          <input type="text" id="stuStoryHeadline" class="studio-input" value="${story.headline || ''}">
        </div>

        <div>
          <label class="studio-label">Story Paragraph 1 (Introduction)</label>
          <textarea id="stuStoryP1" class="studio-textarea" rows="3">${story.bioParagraph1 || ''}</textarea>
        </div>

        <div>
          <label class="studio-label">Story Paragraph 2 (University &amp; CAD Focus)</label>
          <textarea id="stuStoryP2" class="studio-textarea" rows="3">${story.bioParagraph2 || ''}</textarea>
        </div>

        <div>
          <label class="studio-label">Story Paragraph 3 (TfL DLR Placement &amp; Future)</label>
          <textarea id="stuStoryP3" class="studio-textarea" rows="3">${story.bioParagraph3 || ''}</textarea>
        </div>
      </div>
    `;
  } else if (tabId === 'quick-projects') {
    const allProjects = [...(d.featuredProjects || []), ...(d.universityProjects || [])];
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">🚀 CAD &amp; Engineering Projects (${allProjects.length} Projects)</div>
          <a href="editor.html#projects" class="btn btn-primary btn-sm">Open Full Studio Projects Manager ↗</a>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${allProjects.map((proj, idx) => `
            <div style="background: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-md); border: 1.5px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 14px;">
                <img src="${proj.coverImage}" alt="${proj.title}" style="width: 54px; height: 54px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-medium);">
                <div>
                  <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${proj.title}</div>
                  <div style="font-size: 0.78rem; color: var(--park-copper); font-family: var(--font-mono);">${proj.subtitle || ''}</div>
                  <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 3px;">
                    ${proj.timeline || ''} • ${proj.category} • ${proj.featured ? '⭐ Featured' : 'University / Rail'} • ${proj.cadGallery ? proj.cadGallery.length : 0} CAD Figures
                  </div>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="openProjectArticleModal('${proj.id}'); closeStudioModal();">👁️ Preview</button>
                <a href="editor.html#edit-${proj.id}" class="btn btn-primary btn-sm">✏️ Edit in Full Studio</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'quick-diary') {
    const entries = d.diaryEntries || [];
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">📝 Field Notes &amp; Observations (${entries.length} Entries)</div>
          <a href="editor.html#diary" class="btn btn-primary btn-sm">➕ Add New in Full Studio</a>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${entries.map(e => `
            <div style="background: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-md); border: 1.5px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${e.title}</div>
                <div style="font-size: 0.78rem; color: var(--park-copper); font-family: var(--font-mono);">${e.location} • ${e.date}</div>
                <div style="font-size: 0.78rem; color: var(--text-body); margin-top: 4px;">${e.summary}</div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="openDiaryModal('${e.id}'); closeStudioModal();">View Post</button>
                <a href="editor.html#edit-diary-${e.id}" class="btn btn-secondary btn-sm">✏️ Edit</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'quick-skills') {
    const sk = d.skills || {};
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">🛠️ Technical Skills &amp; Software Toolkit</div>

        ${['cad', 'analysis', 'transit', 'fabrication', 'leadership'].map(cat => `
          <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-main); margin-bottom: 8px; text-transform: uppercase; font-family: var(--font-mono);">${cat} Skills</div>
            <div style="margin-bottom: 10px;">
              ${(sk[cat] || []).map((s, idx) => `
                <span class="pill-tag">
                  ${s}
                  <span class="pill-tag-remove" onclick="removeQuickSkill('${cat}', ${idx})">✕</span>
                </span>
              `).join('')}
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="quickNewSkill_${cat}" class="studio-input" placeholder="Add ${cat} skill..." style="padding: 6px 10px; font-size: 0.85rem;">
              <button class="btn btn-secondary btn-sm" onclick="addQuickSkill('${cat}')">Add</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabId === 'quick-media') {
    const assets = getAllMediaAssets();
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">🖼️ Central Media Store (${assets.length} Assets)</div>
          <label class="btn btn-primary btn-sm" style="cursor: pointer; margin: 0;">
            📤 Upload New Image
            <input type="file" accept="image/*" style="display: none;" onchange="handleMediaUpload(this, () => { renderStudioTabContent('quick-media'); })">
          </label>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px;">
          ${assets.map((item) => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden; padding: 8px; text-align: center;">
              <div style="height: 100px; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; margin-bottom: 6px;">
                <img src="${item.url}" alt="${item.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
              </div>
              <div style="font-size: 0.76rem; font-weight: 700; color: var(--text-main); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 2px;">${item.category.toUpperCase()}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tabId === 'quick-security') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">🔐 Collaborator Access &amp; Studio Security</div>
        
        ${gUser ? `
          <div style="background: rgba(43, 147, 72, 0.1); border: 1.5px solid rgba(43, 147, 72, 0.3); padding: 16px 20px; border-radius: var(--radius-lg); display: flex; align-items: center; gap: 14px;">
            <div style="font-size: 1.8rem;">✅</div>
            <div>
              <div style="font-weight: 700; color: var(--text-main);">Authenticated Collaborator</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${gUser.email} (${gUser.name})</div>
            </div>
          </div>
        ` : ''}

        <div style="background: var(--bg-subtle); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-light);">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">Authorized Collaborators</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
            Only the following Google accounts have permissions to edit this portfolio:
          </p>
          <ul style="font-size: 0.85rem; color: var(--text-main); padding-left: 20px; line-height: 1.8;">
            <li><strong>Lucy Robinson (Owner):</strong> <code>lucyalicerob@gmail.com</code></li>
            <li><strong>Mat Robinson (Collaborator):</strong> <code>mat.j.robinson@gmail.com</code></li>
          </ul>
        </div>

        <div style="background: var(--bg-subtle); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-light);">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">Change Private Passkey</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
            Update the fallback passkey used to unlock editing mode.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;">
            <div>
              <label class="studio-label">New Passkey</label>
              <input type="password" id="stuNewPasskey" class="studio-input" placeholder="Enter new passkey...">
            </div>
            <div>
              <label class="studio-label">Confirm New Passkey</label>
              <input type="password" id="stuConfirmPasskey" class="studio-input" placeholder="Confirm new passkey...">
            </div>
          </div>

          <div id="stuPasskeyChangeMsg" style="font-size: 0.85rem; font-weight: 600; margin-bottom: 12px; display: none;"></div>

          <button class="btn btn-primary btn-sm" onclick="updateStudioPasskey()">Update Passkey</button>
        </div>

        <div style="background: var(--bg-subtle); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Lock Session</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted);">End authenticated editing session immediately.</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="lockStudioSession(); closeStudioModal();">🔒 Lock Now</button>
        </div>
      </div>
    `;
  } else if (tabId === 'quick-export') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 1.05rem;">💾 Save, Backup &amp; Export Options</div>

        <div style="background: var(--bg-subtle); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-light);">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">📥 Export portfolio-data.js File</h4>
          <p style="font-size: 0.85rem; color: var(--text-body); line-height: 1.5; margin-bottom: 14px;">
            Download your updated dataset as a complete, clean JavaScript file. Replace <code>scripts/portfolio-data.js</code> in your folder whenever you want to permanently keep your updates.
          </p>
          <button class="btn btn-primary" onclick="exportPortfolioDataFile()">💾 Download Updated portfolio-data.js</button>
        </div>

        <div style="background: var(--bg-subtle); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-light);">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">📋 Copy Code to Clipboard</h4>
          <p style="font-size: 0.85rem; color: var(--text-body); line-height: 1.5; margin-bottom: 14px;">
            Copy the full generated JavaScript content directly to your clipboard to paste into VS Code or any text editor.
          </p>
          <button class="btn btn-secondary" onclick="copyPortfolioDataToClipboard()">📋 Copy Code to Clipboard</button>
        </div>

        <div style="background: rgba(224, 86, 36, 0.08); padding: 20px; border-radius: var(--radius-lg); border: 1.5px solid rgba(224, 86, 36, 0.3);">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--park-copper); margin-bottom: 8px;">🔄 Reset to Initial Defaults</h4>
          <p style="font-size: 0.85rem; color: var(--text-body); line-height: 1.5; margin-bottom: 14px;">
            Clear local edits and restore the original template data.
          </p>
          <button class="btn btn-secondary" onclick="resetStudioDataToDefaults()">🔄 Reset to Defaults</button>
        </div>
      </div>
    `;
  }
}

function addQuickSkill(cat) {
  const input = document.getElementById(`quickNewSkill_${cat}`);
  if (!input || !input.value.trim()) return;
  currentStudioData.skills = currentStudioData.skills || {};
  currentStudioData.skills[cat] = currentStudioData.skills[cat] || [];
  currentStudioData.skills[cat].push(input.value.trim());
  saveStudioData(currentStudioData, false);
  renderStudioTabContent('quick-skills');
}

function removeQuickSkill(cat, idx) {
  if (currentStudioData.skills && currentStudioData.skills[cat]) {
    currentStudioData.skills[cat].splice(idx, 1);
    saveStudioData(currentStudioData, false);
    renderStudioTabContent('quick-skills');
  }
}

function updateStudioPasskey() {
  const p1 = document.getElementById('stuNewPasskey');
  const p2 = document.getElementById('stuConfirmPasskey');
  const msg = document.getElementById('stuPasskeyChangeMsg');
  if (!p1 || !p2 || !msg) return;

  const key1 = p1.value.trim();
  const key2 = p2.value.trim();

  if (!key1) {
    msg.style.color = 'var(--coaster-red)';
    msg.textContent = 'Please enter a valid passkey.';
    msg.style.display = 'block';
    return;
  }
  if (key1 !== key2) {
    msg.style.color = 'var(--coaster-red)';
    msg.textContent = 'Passkeys do not match. Please re-enter.';
    msg.style.display = 'block';
    return;
  }

  localStorage.setItem(PASSKEY_STORAGE_KEY, key1);
  msg.style.color = 'var(--teal-primary)';
  msg.textContent = '✓ Passkey updated successfully!';
  msg.style.display = 'block';
  p1.value = '';
  p2.value = '';
}

function saveStudioModalChanges() {
  const d = currentStudioData;
  const p = d.profile = d.profile || {};
  p.socials = p.socials || {};
  p.education = p.education || {};
  p.currentStatus = p.currentStatus || {};
  p.personalStory = p.personalStory || {};
  p.workbenchLive = p.workbenchLive || {};

  const stuName = document.getElementById('stuName');
  if (stuName) p.name = stuName.value;

  const stuRole = document.getElementById('stuRole');
  if (stuRole) p.role = stuRole.value;

  const stuTagline = document.getElementById('stuTagline');
  if (stuTagline) p.tagline = stuTagline.value;

  const stuSubtagline = document.getElementById('stuSubtagline');
  if (stuSubtagline) p.subtagline = stuSubtagline.value;

  const stuEmail = document.getElementById('stuEmail');
  if (stuEmail) p.socials.email = stuEmail.value;

  const stuPhone = document.getElementById('stuPhone');
  if (stuPhone) p.socials.phone = stuPhone.value;

  const stuCompany = document.getElementById('stuCompany');
  if (stuCompany) p.currentStatus.company = stuCompany.value;

  const stuDivision = document.getElementById('stuDivision');
  if (stuDivision) p.currentStatus.division = stuDivision.value;

  const stuUniv = document.getElementById('stuUniv');
  if (stuUniv) p.education.university = stuUniv.value;

  const stuDegree = document.getElementById('stuDegree');
  if (stuDegree) p.education.degree = stuDegree.value;

  const stuGrade = document.getElementById('stuGrade');
  if (stuGrade) p.education.grade = stuGrade.value;

  const stuAward = document.getElementById('stuAward');
  if (stuAward) p.education.award = stuAward.value;

  const stuWbBuild = document.getElementById('stuWbBuild');
  if (stuWbBuild) p.workbenchLive.currentBuild = stuWbBuild.value;

  const stuWbSoftware = document.getElementById('stuWbSoftware');
  if (stuWbSoftware) p.workbenchLive.currentSoftware = stuWbSoftware.value;

  const stuWbStatus = document.getElementById('stuWbStatus');
  if (stuWbStatus) p.workbenchLive.status = stuWbStatus.value;

  const stuWbNext = document.getElementById('stuWbNext');
  if (stuWbNext) p.workbenchLive.nextMilestone = stuWbNext.value;

  const stuStoryHeadline = document.getElementById('stuStoryHeadline');
  if (stuStoryHeadline) p.personalStory.headline = stuStoryHeadline.value;

  const stuStoryP1 = document.getElementById('stuStoryP1');
  if (stuStoryP1) p.personalStory.bioParagraph1 = stuStoryP1.value;

  const stuStoryP2 = document.getElementById('stuStoryP2');
  if (stuStoryP2) p.personalStory.bioParagraph2 = stuStoryP2.value;

  const stuStoryP3 = document.getElementById('stuStoryP3');
  if (stuStoryP3) p.personalStory.bioParagraph3 = stuStoryP3.value;

  saveStudioData(d);
  closeStudioModal();
}

function showStudioToast(msg) {
  let toast = document.getElementById('studioToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'studioToast';
    toast.style.cssText = 'position: fixed; bottom: 28px; right: 28px; background: var(--bg-surface); color: var(--text-main); border: 1.5px solid var(--park-copper); padding: 12px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-card); z-index: 10000; font-size: 0.875rem; font-weight: 600; transition: all 0.3s ease; display: none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}


/**
 * Handle direct CV / Resume document upload
 */


/**
 * Convert base64 data to Blob URL so browsers allow opening PDFs
 */
window.openCvDocument = function(url) {
  const p = (typeof currentStudioData !== 'undefined' && currentStudioData.profile) ? currentStudioData.profile : (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.profile ? PORTFOLIO_DATA.profile : {});
  let targetUrl = url || p.cvUrl || 'assets/documents/Lucy_Robinson_CV.pdf';

  if (targetUrl.startsWith('data:application/pdf') || targetUrl.startsWith('data:')) {
    try {
      const parts = targetUrl.split(',');
      const byteCharacters = atob(parts[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const mime = parts[0].split(':')[1].split(';')[0] || 'application/pdf';
      const blob = new Blob([byteArray], { type: mime });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
      return;
    } catch (err) {
      console.error('Blob conversion error:', err);
    }
  }

  window.open(targetUrl, '_blank');
};

window.testActiveCvDocument = function() {
  const p = (currentStudioData && currentStudioData.profile) ? currentStudioData.profile : {};
  const activeUrl = p.cvUrl || 'assets/documents/Lucy_Robinson_CV.pdf';
  window.openCvDocument(activeUrl);
};

window.handleCvFileUpload = function(fileInput) {
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
  const file = fileInput.files[0];
  const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');

  const reader = new FileReader();
  reader.onload = async function(e) {
    const dataUrl = e.target.result;
    let finalUrl = dataUrl;

    // Try saving directly to dev server disk if available
    try {
      const resp = await fetch('/api/upload-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: cleanName,
          dataBase64: dataUrl
        })
      });
      if (resp.ok) {
        const result = await resp.json();
        if (result.success && result.url) {
          finalUrl = result.url;
        }
      }
    } catch (netErr) {
      console.log('Server upload not available, using local blob/base64 storage.');
    }

    currentStudioData.profile = currentStudioData.profile || {};
    currentStudioData.profile.cvUrl = finalUrl;
    currentStudioData.profile.cvFileName = cleanName;

    currentStudioData.documents = currentStudioData.documents || [];
    const exists = currentStudioData.documents.find(d => d.name === cleanName);
    if (!exists) {
      currentStudioData.documents.push({
        name: cleanName,
        url: finalUrl,
        size: (file.size / 1024).toFixed(1) + ' KB',
        dateAdded: new Date().toISOString().split('T')[0]
      });
    }

    saveStudioData(currentStudioData);
    if (typeof renderActiveSection === 'function') {
      renderActiveSection();
    }
    if (typeof showStudioToast === 'function') {
      showStudioToast(`✓ Uploaded and linked: ${cleanName}`);
    }
    fileInput.value = '';
  };
  reader.readAsDataURL(file);
};

window.switchActiveCvDocument = function(url, fileName = '') {
  currentStudioData.profile = currentStudioData.profile || {};
  currentStudioData.profile.cvUrl = url;
  if (fileName) currentStudioData.profile.cvFileName = fileName;

  saveStudioData(currentStudioData);
  if (typeof renderActiveSection === 'function') {
    renderActiveSection();
  }
  if (typeof showStudioToast === 'function') {
    showStudioToast(`✓ Linked CV switched to: ${fileName || url}`);
  }
};


/* --------------------------------------------------------------------------
   GITHUB CLOUD SYNC & REST API ENGINE (Directly updates repo & GitHub Pages)
   -------------------------------------------------------------------------- */
const GITHUB_PAT_KEY = 'lucy_studio_github_pat';
const GITHUB_REPO_KEY = 'lucy_studio_github_repo';
const GITHUB_BRANCH_KEY = 'lucy_studio_github_branch';
const DEFAULT_GITHUB_REPO = 'lucyalicerob-sketch/lucyalicerob-sketch.github.io';
const DEFAULT_GITHUB_BRANCH = 'main';

window.getGitHubConfig = function() {
  return {
    token: localStorage.getItem(GITHUB_PAT_KEY) || '',
    repo: localStorage.getItem(GITHUB_REPO_KEY) || DEFAULT_GITHUB_REPO,
    branch: localStorage.getItem(GITHUB_BRANCH_KEY) || DEFAULT_GITHUB_BRANCH
  };
};

window.saveGitHubConfig = function(token, repo, branch) {
  if (token) localStorage.setItem(GITHUB_PAT_KEY, token.trim());
  localStorage.setItem(GITHUB_REPO_KEY, (repo || DEFAULT_GITHUB_REPO).trim());
  localStorage.setItem(GITHUB_BRANCH_KEY, (branch || DEFAULT_GITHUB_BRANCH).trim());
  if (typeof showStudioToast === 'function') {
    showStudioToast('✓ GitHub Cloud Connection saved!');
  }
  updateGitHubSyncStatusIndicator();
};

window.openGitHubSyncModal = function() {
  const modal = document.getElementById('githubSyncModal');
  if (!modal) return;
  const cfg = getGitHubConfig();
  const tokenInput = document.getElementById('ghTokenInput');
  const repoInput = document.getElementById('ghRepoInput');
  const branchInput = document.getElementById('ghBranchInput');
  if (tokenInput) tokenInput.value = cfg.token;
  if (repoInput) repoInput.value = cfg.repo;
  if (branchInput) branchInput.value = cfg.branch;
  modal.style.display = 'flex';
};

window.closeGitHubSyncModal = function() {
  const modal = document.getElementById('githubSyncModal');
  if (modal) modal.style.display = 'none';
};

window.updateGitHubSyncStatusIndicator = function() {
  const cfg = getGitHubConfig();
  const badges = document.querySelectorAll('.github-sync-badge');
  badges.forEach(b => {
    if (cfg.token) {
      b.innerHTML = `🟢 GitHub: Connected to <strong>${cfg.repo}</strong> (${cfg.branch})`;
      b.style.borderColor = 'rgba(34, 197, 94, 0.4)';
      b.style.color = '#22c55e';
    } else {
      b.innerHTML = `⚙️ GitHub: Not connected (Click to connect token)`;
      b.style.borderColor = 'rgba(245, 158, 11, 0.4)';
      b.style.color = 'var(--park-gold)';
    }
  });
};

/**
 * Commit PORTFOLIO_DATA directly to GitHub repository via REST API
 */
window.commitToGitHub = async function(customMessage = null) {
  const cfg = getGitHubConfig();
  if (!cfg.token) {
    openGitHubSyncModal();
    return { success: false, reason: 'no_token' };
  }

  if (typeof showStudioToast === 'function') {
    showStudioToast('🚀 Syncing & committing directly to GitHub...');
  }

  const cleanData = currentStudioData || PORTFOLIO_DATA;
  cleanData.dataVersion = 'gh_' + Date.now();

  const fileContent = `/**
 * PORTFOLIO DATA SOURCE
 * Lucy Robinson — Mechanical Engineering & Themed Ride Systems
 * Auto-Synchronized from Visual Studio Editor to GitHub Repository
 * Updated: ${new Date().toISOString()}
 */

const PORTFOLIO_DATA = ${JSON.stringify(cleanData, null, 2)};
`;

  // UTF-8 to Base64
  const utf8Bytes = new TextEncoder().encode(fileContent);
  let binary = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  const base64Content = btoa(binary);

  let filePath = 'scripts/portfolio-data.js';
  const candidatePaths = ['scripts/portfolio-data.js', 'source/scripts/portfolio-data.js', 'src/scripts/portfolio-data.js'];
  
  try {
    // 1. Detect where portfolio-data.js is located in the GitHub repo (root or /source)
    let currentSha = null;
    let targetPath = candidatePaths[0];

    for (const testPath of candidatePaths) {
      const testUrl = `https://api.github.com/repos/${cfg.repo}/contents/${testPath}?ref=${cfg.branch}`;
      const getRes = await fetch(testUrl, {
        headers: {
          'Authorization': `Bearer ${cfg.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (getRes.ok) {
        const getData = await getRes.json();
        currentSha = getData.sha;
        targetPath = testPath;
        filePath = testPath;
        break;
      } else if (getRes.status === 401 || getRes.status === 403) {
        alert('GitHub Token Authentication Failed. Please check that your token is valid and has "repo" scope.');
        openGitHubSyncModal();
        return { success: false, error: 'auth_failed' };
      }
    }
    console.log(`Targeting GitHub file path: ${filePath}`);

    // 2. Commit file with PUT
    const commitMsg = customMessage || `Update portfolio data from Visual Studio Editor (${new Date().toLocaleTimeString()})`;
    const putBody = {
      message: commitMsg,
      content: base64Content,
      branch: cfg.branch
    };
    if (currentSha) {
      putBody.sha = currentSha;
    }

    const putRes = await fetch(`https://api.github.com/repos/${cfg.repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putBody)
    });

    if (putRes.ok) {
      const putData = await putRes.json();
      console.log('✓ Successfully committed to GitHub:', putData);
      if (typeof showStudioToast === 'function') {
        showStudioToast('🎉 Live on GitHub! GitHub Pages is rebuilding your site.');
      }
      return { success: true, data: putData };
    } else {
      const errData = await putRes.json();
      console.error('GitHub PUT error:', errData);
      alert('GitHub API Error: ' + (errData.message || 'Could not commit to repository.'));
      return { success: false, error: errData };
    }
  } catch (err) {
    console.error('commitToGitHub Exception:', err);
    alert('Connection error syncing to GitHub: ' + err.message);
    return { success: false, error: err };
  }
};
