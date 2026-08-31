/**
 * INTERACTIVE 3D CAD BOGIE VIEWER (Three.js)
 * High-precision 3D Roller Coaster Bogie & Track Gripper Assembly
 * Features: Orbit controls, exploded view, wireframe mode, stress heatmap, part inspection.
 */

class BogieViewer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.parts = {};
    this.explodedFactor = 0;
    this.renderMode = 'solid'; // 'solid', 'wireframe', 'stress'
    this.isRotating = true;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.init();
  }

  init() {
    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight || 480;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(18, 12, 22);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f2fe, 1.5);
    dirLight1.position.set(20, 30, 20);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.2);
    dirLight2.position.set(-20, -10, -20);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.set(0, 15, 0);
    this.scene.add(pointLight);

    // Assembly Root
    this.assemblyGroup = new THREE.Group();
    this.scene.add(this.assemblyGroup);

    // Build CAD Parts
    this.buildTrackRail();
    this.buildBogieFrame();
    this.buildRoadWheels();
    this.buildGuideWheels();
    this.buildUpstopWheels();
    this.buildBrakeFin();
    this.buildArticulationKnuckle();

    // Setup Interaction
    this.setupOrbit();
    this.setupControls();
    this.setupHoverRaycast();

    // Resize listener
    window.addEventListener('resize', () => this.onWindowResize());

    // Render loop
    this.animate();
  }

  // 1. Tubular Coaster Rail Track
  buildTrackRail() {
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.8,
      roughness: 0.25
    });

    const railGeom = new THREE.CylinderGeometry(2.2, 2.2, 38, 32);
    const railMesh = new THREE.Mesh(railGeom, railMat);
    railMesh.rotation.x = Math.PI / 2;
    railMesh.userData = { name: "Tubular Steel Rail (Ø110mm)", material: "ASTM A500 Grade B Structural Steel", weight: "24.5 kg/m" };
    
    // Cross-tie support
    const tieGeom = new THREE.BoxGeometry(1.2, 6, 2);
    const tieMesh = new THREE.Mesh(tieGeom, railMat);
    tieMesh.position.set(0, -3.5, 0);

    const trackGroup = new THREE.Group();
    trackGroup.add(railMesh);
    trackGroup.add(tieMesh);
    trackGroup.position.set(0, 0, 0);

    this.parts.track = { group: trackGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(0, 0, 0) };
    this.assemblyGroup.add(trackGroup);
  }

  // 2. CNC Bogie C-Carrier Frame
  buildBogieFrame() {
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.7,
      roughness: 0.3
    });

    const frameGroup = new THREE.Group();

    const spineGeom = new THREE.BoxGeometry(1.8, 12, 3.5);
    const spine = new THREE.Mesh(spineGeom, frameMat);
    spine.position.set(-4.5, 0, 0);
    frameGroup.add(spine);

    const topArmGeom = new THREE.BoxGeometry(5.5, 1.6, 3.2);
    const topArm = new THREE.Mesh(topArmGeom, frameMat);
    topArm.position.set(-2, 5.2, 0);
    frameGroup.add(topArm);

    const botArmGeom = new THREE.BoxGeometry(5.5, 1.6, 3.2);
    const botArm = new THREE.Mesh(botArmGeom, frameMat);
    botArm.position.set(-2, -5.2, 0);
    frameGroup.add(botArm);

    frameGroup.userData = { name: "Bogie C-Carrier Frame", material: "CNC Machined 7075-T6 Anodized Aluminum", weight: "6.8 kg" };
    this.parts.frame = { group: frameGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(-1, 0, 0) };
    this.assemblyGroup.add(frameGroup);
  }

  // 3. Road Wheels (Top - Vertical 4.5G Load)
  buildRoadWheels() {
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5, metalness: 0.1 });

    const roadGroup = new THREE.Group();

    // Wheel 1
    const tireGeom = new THREE.CylinderGeometry(2.4, 2.4, 2.2, 28);
    const tire1 = new THREE.Mesh(tireGeom, tireMat);
    tire1.rotation.z = Math.PI / 2;
    tire1.position.set(0, 4.8, 3.5);

    const hubGeom = new THREE.CylinderGeometry(1.3, 1.3, 2.3, 24);
    const hub1 = new THREE.Mesh(hubGeom, hubMat);
    hub1.rotation.z = Math.PI / 2;
    hub1.position.set(0, 4.8, 3.5);

    roadGroup.add(tire1);
    roadGroup.add(hub1);

    // Axle Pin
    const pinGeom = new THREE.CylinderGeometry(0.5, 0.5, 5.5, 16);
    const pin1 = new THREE.Mesh(pinGeom, hubMat);
    pin1.rotation.z = Math.PI / 2;
    pin1.position.set(-0.5, 4.8, 3.5);
    roadGroup.add(pin1);

    roadGroup.userData = { name: "Road Wheel Assembly (x2)", material: "95A Polyurethane Tread on 6061-T6 Hub", weight: "4.2 kg" };
    this.parts.roadWheels = { group: roadGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(0, 1.2, 0.4) };
    this.assemblyGroup.add(roadGroup);
  }

  // 4. Side Friction / Guide Wheels (Lateral Tracking)
  buildGuideWheels() {
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.5, metalness: 0.1 });

    const guideGroup = new THREE.Group();

    const tireGeom = new THREE.CylinderGeometry(2.0, 2.0, 1.8, 24);
    const tire = new THREE.Mesh(tireGeom, tireMat);
    tire.position.set(-4.5, 0, 2.5);

    const hubGeom = new THREE.CylinderGeometry(1.0, 1.0, 1.9, 20);
    const hub = new THREE.Mesh(hubGeom, hubMat);
    hub.position.set(-4.5, 0, 2.5);

    guideGroup.add(tire);
    guideGroup.add(hub);

    guideGroup.userData = { name: "Guide / Side-Friction Wheel", material: "90A Shore Polyurethane + Sealed Spherical Bearings", weight: "2.6 kg" };
    this.parts.guideWheels = { group: guideGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(-1.2, 0, 0.4) };
    this.assemblyGroup.add(guideGroup);
  }

  // 5. Upstop Wheels (Bottom - Negative G Retention)
  buildUpstopWheels() {
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5, metalness: 0.1 });

    const upstopGroup = new THREE.Group();

    const tireGeom = new THREE.CylinderGeometry(2.1, 2.1, 2.0, 24);
    const tire = new THREE.Mesh(tireGeom, tireMat);
    tire.rotation.z = Math.PI / 2;
    tire.position.set(0, -4.8, 3.5);

    const hubGeom = new THREE.CylinderGeometry(1.1, 1.1, 2.1, 20);
    const hub = new THREE.Mesh(hubGeom, hubMat);
    hub.rotation.z = Math.PI / 2;
    hub.position.set(0, -4.8, 3.5);

    upstopGroup.add(tire);
    upstopGroup.add(hub);

    upstopGroup.userData = { name: "Upstop Retention Wheel", material: "High-Damping Polyurethane / 4140 Steel Axle Pin", weight: "3.5 kg" };
    this.parts.upstopWheels = { group: upstopGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(0, -1.2, 0.4) };
    this.assemblyGroup.add(upstopGroup);
  }

  // 6. Magnetic Eddy Current Brake Fin
  buildBrakeFin() {
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.9,
      roughness: 0.2
    });

    const finGroup = new THREE.Group();
    const finGeom = new THREE.BoxGeometry(0.4, 8, 14);
    const finMesh = new THREE.Mesh(finGeom, copperMat);
    finMesh.position.set(3.5, 0, 0);
    finGroup.add(finMesh);

    finGroup.userData = { name: "Eddy-Current Magnetic Brake Fin", material: "High-Conductivity C11000 Copper Alloy", weight: "5.1 kg" };
    this.parts.brakeFin = { group: finGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(1.4, 0, 0) };
    this.assemblyGroup.add(finGroup);
  }

  // 7. Dual-Axis Articulation Knuckle
  buildArticulationKnuckle() {
    const knuckleMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.8,
      roughness: 0.3
    });

    const knuckleGroup = new THREE.Group();

    // Clevis Joint
    const clevisGeom = new THREE.CylinderGeometry(1.6, 1.6, 4.2, 24);
    const clevis = new THREE.Mesh(clevisGeom, knuckleMat);
    clevis.position.set(-7.5, 0, 0);
    knuckleGroup.add(clevis);

    // Chassis Mounting Shaft
    const shaftGeom = new THREE.BoxGeometry(3.5, 2.2, 2.2);
    const shaft = new THREE.Mesh(shaftGeom, knuckleMat);
    shaft.position.set(-9.5, 0, 0);
    knuckleGroup.add(shaft);

    knuckleGroup.userData = { name: "Dual-Axis Articulation Knuckle", material: "Cast Steel Grade WCB / Spherical Plain Bearings", weight: "7.4 kg" };
    this.parts.knuckle = { group: knuckleGroup, basePos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(-1.8, 0, 0) };
    this.assemblyGroup.add(knuckleGroup);
  }

  // Orbit controls simulation (Mouse/Touch Drag)
  setupOrbit() {
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    this.canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      this.isRotating = false;
      prevMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      this.assemblyGroup.rotation.y += deltaX * 0.01;
      this.assemblyGroup.rotation.x += deltaY * 0.01;

      prevMousePos = { x: e.clientX, y: e.clientY };
    });

    // Zoom on wheel
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.camera.position.z = Math.max(12, Math.min(45, this.camera.position.z + e.deltaY * 0.03));
    }, { passive: false });
  }

  // Setup UI control listeners (Explode slider, Wireframe/Solid, Rotate)
  setupControls() {
    const explodeSlider = document.getElementById('explodeSlider');
    if (explodeSlider) {
      explodeSlider.addEventListener('input', (e) => {
        this.setExplodedFactor(parseFloat(e.target.value));
      });
    }

    const btnSolid = document.getElementById('btnModeSolid');
    const btnWireframe = document.getElementById('btnModeWireframe');
    const btnStress = document.getElementById('btnModeStress');
    const btnRotate = document.getElementById('btnToggleRotate');

    if (btnSolid) {
      btnSolid.addEventListener('click', () => {
        this.setRenderMode('solid');
        this.setActiveBtn(btnSolid, [btnWireframe, btnStress]);
      });
    }

    if (btnWireframe) {
      btnWireframe.addEventListener('click', () => {
        this.setRenderMode('wireframe');
        this.setActiveBtn(btnWireframe, [btnSolid, btnStress]);
      });
    }

    if (btnStress) {
      btnStress.addEventListener('click', () => {
        this.setRenderMode('stress');
        this.setActiveBtn(btnStress, [btnSolid, btnWireframe]);
      });
    }

    if (btnRotate) {
      btnRotate.addEventListener('click', () => {
        this.isRotating = !this.isRotating;
        btnRotate.classList.toggle('active', this.isRotating);
      });
    }
  }

  setActiveBtn(activeBtn, otherBtns) {
    activeBtn.classList.add('active');
    otherBtns.forEach(b => b.classList.remove('active'));
  }

  setExplodedFactor(factor) {
    this.explodedFactor = factor;
    const distanceMultiplier = factor * 4.5;

    for (const key in this.parts) {
      const part = this.parts[key];
      part.group.position.x = part.basePos.x + part.explodeDir.x * distanceMultiplier;
      part.group.position.y = part.basePos.y + part.explodeDir.y * distanceMultiplier;
      part.group.position.z = part.basePos.z + part.explodeDir.z * distanceMultiplier;
    }
  }

  setRenderMode(mode) {
    this.renderMode = mode;
    this.assemblyGroup.traverse((child) => {
      if (child.isMesh && child.material) {
        if (mode === 'wireframe') {
          child.material.wireframe = true;
          child.material.color.setHex(0x00f2fe);
        } else if (mode === 'stress') {
          child.material.wireframe = false;
          // Stress Heatmap coloring simulation
          if (child.parent.userData.name && child.parent.userData.name.includes('Road')) {
            child.material.color.setHex(0xef4444); // Peak stress
          } else if (child.parent.userData.name && child.parent.userData.name.includes('Frame')) {
            child.material.color.setHex(0xf59e0b); // Medium stress
          } else {
            child.material.color.setHex(0x10b981); // Low stress
          }
        } else {
          child.material.wireframe = false;
          // Restore solid colors
          if (child.parent.userData.name && child.parent.userData.name.includes('Road')) {
            child.material.color.setHex(0xf59e0b);
          } else if (child.parent.userData.name && child.parent.userData.name.includes('Guide')) {
            child.material.color.setHex(0x00f2fe);
          } else if (child.parent.userData.name && child.parent.userData.name.includes('Upstop')) {
            child.material.color.setHex(0x10b981);
          } else if (child.parent.userData.name && child.parent.userData.name.includes('Brake')) {
            child.material.color.setHex(0xb45309);
          } else {
            child.material.color.setHex(0x334155);
          }
        }
      }
    });
  }

  setupHoverRaycast() {
    const infoOverlay = document.getElementById('viewerPartInfo');
    if (!infoOverlay) return;

    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.assemblyGroup.children, true);

      if (intersects.length > 0) {
        let selectedGroup = intersects[0].object;
        while (selectedGroup.parent && selectedGroup.parent !== this.assemblyGroup && !selectedGroup.userData.name) {
          selectedGroup = selectedGroup.parent;
        }

        if (selectedGroup.userData && selectedGroup.userData.name) {
          infoOverlay.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); text-transform: uppercase; margin-bottom: 4px;">INSPECTED CAD COMPONENT</div>
            <div style="font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px;">${selectedGroup.userData.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px;"><strong>Material:</strong> ${selectedGroup.userData.material}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);"><strong>Mass / Spec:</strong> ${selectedGroup.userData.weight}</div>
          `;
          infoOverlay.classList.add('active');
        }
      }
    });
  }

  onWindowResize() {
    if (!this.canvas || !this.canvas.parentElement) return;
    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight || 480;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.isRotating) {
      this.assemblyGroup.rotation.y += 0.005;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.BogieViewer = BogieViewer;
