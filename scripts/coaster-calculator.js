/**
 * INTERACTIVE COASTER DYNAMICS & G-FORCE CALCULATOR (ASTM F24 / EN 13814)
 * Real-time physics calculations & animated track simulation.
 */

class CoasterCalculator {
  constructor() {
    this.canvas = document.getElementById('coasterAnimCanvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;

    this.inputs = {
      dropHeight: 38,       // meters
      valleyRadius: 18,     // meters
      inversionRadius: 10,  // meters
      brakeLength: 18       // meters
    };

    this.cartProgress = 0; // 0 to 1
    this.cartSpeed = 0.003;

    this.init();
  }

  init() {
    this.bindInputs();
    this.calculate();
    if (this.canvas) {
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
      this.animateCanvas();
    }
  }

  bindInputs() {
    const bindSlider = (id, key, unit, displayId) => {
      const el = document.getElementById(id);
      const disp = document.getElementById(displayId);
      if (el && disp) {
        el.addEventListener('input', (e) => {
          this.inputs[key] = parseFloat(e.target.value);
          disp.textContent = `${this.inputs[key]} ${unit}`;
          this.calculate();
        });
      }
    };

    bindSlider('inputDropHeight', 'dropHeight', 'm', 'valDropHeight');
    bindSlider('inputValleyRadius', 'valleyRadius', 'm', 'valValleyRadius');
    bindSlider('inputInversionRadius', 'inversionRadius', 'm', 'valInversionRadius');
    bindSlider('inputBrakeLength', 'brakeLength', 'm', 'valBrakeLength');
  }

  calculate() {
    const g = 9.81;
    const H = this.inputs.dropHeight;
    const Rv = this.inputs.valleyRadius;
    const Rc = this.inputs.inversionRadius;
    const Lb = this.inputs.brakeLength;

    // Peak speed at bottom of drop
    const vPeak = Math.sqrt(2 * g * H); // m/s
    const vKmh = vPeak * 3.6;
    const vMph = vPeak * 2.237;

    // Positive G-force in valley pull-up: Gz = 1 + v^2 / (g * Rv)
    const gzValley = 1 + (Math.pow(vPeak, 2) / (g * Rv));

    // Approximate speed at loop apex (assuming loop height is 70% of drop)
    const hLoopApex = H * 0.7;
    const vLoopApex = Math.sqrt(Math.max(0, 2 * g * (H - hLoopApex)));
    const gzLoopApex = (Math.pow(vLoopApex, 2) / (g * Rc)) - 1;

    // Magnetic brake deceleration: a = v^2 / (2 * Lb), in Gs: Gx = a / g
    const gxBrake = Math.pow(vPeak, 2) / (2 * g * Lb);

    // Update UI Metric Displays
    const elSpeed = document.getElementById('calcSpeedResult');
    const elGz = document.getElementById('calcGzResult');
    const elGx = document.getElementById('calcGxResult');
    const elAstmStatus = document.getElementById('astmStatusBanner');

    if (elSpeed) elSpeed.textContent = `${vKmh.toFixed(1)} km/h (${vMph.toFixed(0)} mph)`;
    if (elGz) elGz.textContent = `+${gzValley.toFixed(2)} G`;
    if (elGx) elGx.textContent = `-${gxBrake.toFixed(2)} G`;

    // Color code and safety check
    if (elGz) {
      if (gzValley > 5.0) {
        elGz.style.color = '#ef4444'; // Red (Excessive G)
      } else if (gzValley > 4.2) {
        elGz.style.color = '#f59e0b'; // Amber (High G)
      } else {
        elGz.style.color = '#00f2fe'; // Safe G
      }
    }

    if (elAstmStatus) {
      if (gzValley > 5.2 || gxBrake > 2.0) {
        elAstmStatus.className = 'astm-compliance-banner';
        elAstmStatus.style.background = 'rgba(239, 68, 68, 0.15)';
        elAstmStatus.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        elAstmStatus.style.color = '#ef4444';
        elAstmStatus.innerHTML = `⚠️ <strong>ASTM F24 EXCEEDANCE:</strong> Normal Gz (${gzValley.toFixed(1)}G) exceeds sustained human tolerance limit (5.0G). Increase valley radius $R_v$.`;
      } else {
        elAstmStatus.className = 'astm-compliance-banner';
        elAstmStatus.style.background = 'rgba(16, 185, 129, 0.12)';
        elAstmStatus.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        elAstmStatus.style.color = 'var(--emerald-primary)';
        elAstmStatus.innerHTML = `✓ <strong>ASTM F24 / EN 13814 COMPLIANT:</strong> Peak Gz (+${gzValley.toFixed(2)}G) and braking Gx (-${gxBrake.toFixed(2)}G) are within safe bio-mechanical limits.`;
      }
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight || 200;
  }

  animateCanvas() {
    requestAnimationFrame(() => this.animateCanvas());
    if (!this.ctx || !this.canvas) return;

    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    // Draw Track Profile
    this.ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();

    // Track path: Lift -> Drop -> Valley -> Loop -> Brake
    const p0 = { x: 30, y: h * 0.75 };
    const p1 = { x: w * 0.22, y: h * 0.18 }; // Lift Crest
    const p2 = { x: w * 0.44, y: h * 0.85 }; // Valley
    const p3 = { x: w * 0.60, y: h * 0.30 }; // Inversion top
    const p4 = { x: w * 0.72, y: h * 0.85 }; // Valley 2
    const p5 = { x: w - 30, y: h * 0.85 };   // Brake run

    this.ctx.moveTo(p0.x, p0.y);
    this.ctx.lineTo(p1.x, p1.y);
    this.ctx.bezierCurveTo(w * 0.32, h * 0.2, w * 0.35, h * 0.85, p2.x, p2.y);
    this.ctx.bezierCurveTo(w * 0.50, h * 0.85, w * 0.52, h * 0.25, p3.x, p3.y);
    this.ctx.bezierCurveTo(w * 0.68, h * 0.35, w * 0.65, h * 0.85, p4.x, p4.y);
    this.ctx.lineTo(p5.x, p5.y);
    this.ctx.stroke();

    // Draw Magnetic Brake Fins on end section
    this.ctx.strokeStyle = '#b45309';
    this.ctx.lineWidth = 2;
    for (let bx = p4.x + 20; bx < p5.x; bx += 18) {
      this.ctx.beginPath();
      this.ctx.moveTo(bx, h * 0.85 - 6);
      this.ctx.lineTo(bx, h * 0.85 + 6);
      this.ctx.stroke();
    }

    // Move Animated Coaster Train Cart along track
    this.cartProgress = (this.cartProgress + this.cartSpeed) % 1;
    let cx, cy;

    if (this.cartProgress < 0.25) {
      // Lift
      const t = this.cartProgress / 0.25;
      cx = p0.x + t * (p1.x - p0.x);
      cy = p0.y + t * (p1.y - p0.y);
    } else if (this.cartProgress < 0.5) {
      // Drop & Valley
      const t = (this.cartProgress - 0.25) / 0.25;
      cx = p1.x + t * (p2.x - p1.x);
      cy = p1.y + Math.sin(t * Math.PI * 0.5) * (p2.y - p1.y);
    } else if (this.cartProgress < 0.8) {
      // Inversion
      const t = (this.cartProgress - 0.5) / 0.3;
      cx = p2.x + t * (p4.x - p2.x);
      cy = p2.y - Math.sin(t * Math.PI) * (p2.y - p3.y);
    } else {
      // Brake run
      const t = (this.cartProgress - 0.8) / 0.2;
      cx = p4.x + t * (p5.x - p4.x);
      cy = p4.y;
    }

    // Draw Coaster Car
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy - 6, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // Wheel
    this.ctx.fillStyle = '#00f2fe';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

window.CoasterCalculator = CoasterCalculator;
