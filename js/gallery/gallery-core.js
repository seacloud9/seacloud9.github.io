/**
 * Gallery Core - Reusable 3D Gallery Engine
 *
 * A modular, data-driven 3D gallery system powered by Three.js
 * Designed to work with any configuration file
 *
 * Basic Usage:
 * ```javascript
 * const gallery = new GalleryCore({
 *   container: '#gallery-container',
 *   configPath: './gallery-config.json',
 *   layout: 'carousel',
 *   onItemClick: (item) => { window.open(item.link, '_blank'); }
 * });
 * gallery.init();
 * ```
 *
 * Configuration Options:
 *
 * CONTAINER & DATA:
 * - container: '#gallery'           // CSS selector for gallery container
 * - configPath: './gallery-config.json'  // Path to JSON config file
 *
 * LAYOUT MODES:
 * - layout: 'classic'               // CLASSIC: Original horizontal carousel (simple & clean)
 *                                   // CAROUSEL: Enhanced circular rotation with depth
 *                                   // ROLODEX: Vertical card stack with tilting
 *                                   // COVERFLOW: Apple-style arc with perspective
 *                                   // HELIX: Spiral going upward
 *                                   // GRID: Static grid layout
 *                                   // TUNNEL: Linear depth tunnel
 *                                   // ZOOM: Vertical 3D stack zooming toward camera with nav icons
 * - itemSpacing: 4                  // Spacing between items
 * - itemScale: 1                    // Scale multiplier for items
 * - carouselRadius: 6               // Radius of circular layouts
 * - rolodexTilt: 20                 // Degrees of tilt for rolodex cards
 * - coverflowAngle: 60              // Angle for coverflow side items (degrees)
 * - helixHeight: 10                 // Vertical height of helix spiral
 * - zoomStackOffset: 0.6            // Vertical spacing between stacked cards (zoom mode)
 * - zoomDepthSpacing: 1.0           // Depth spacing between cards (zoom mode)
 * - zoomIntroAnimation: true        // Enable intro animation for zoom mode
 * - zoomAnimationDuration: 1.5      // Duration of intro animation in seconds
 * - zoomEasingSpeed: 0.12           // Navigation easing speed (0.05-0.2, lower = smoother)
 *
 * AUTO-ROTATION & PHYSICS:
 * - autoRotate: true                // Enable auto-rotation
 * - rotateSpeed: 0.3                // Speed of auto-rotation
 * - rotateEasing: 0.08              // Easing factor (0-1, lower = smoother)
 * - enableInertia: true             // Enable inertia/momentum on drag
 * - inertiaFriction: 0.95           // Friction coefficient (0-1, higher = less friction)
 * - inertiaDamping: 0.98            // Momentum damping (0-1, higher = longer spin)
 *
 * VISUAL EFFECTS:
 * - holographicEffect: true         // Enable holographic border effects
 * - enableFade: true                // Fade cards based on angle from center
 * - fadeIntensity: 0.7              // How much to fade (0-1)
 * - minOpacity: 0.3                 // Minimum opacity for faded cards
 * - showCardBackground: true        // Show card background behind images
 * - cardBackgroundColor: 0x0a0a0f  // Color of card background (hex)
 * - cardBackgroundOpacity: 0.9     // Opacity of card background (0-1)
 *
 * CONTROLS:
 * - enableMobileControls: true      // Enable touch swipe on mobile
 * - enableMouseWheel: true          // Enable mouse wheel rotation
 * - mouseWheelSpeed: 0.001          // Mouse wheel sensitivity
 * - enableKeyboard: true            // Enable arrow key controls
 * - keyboardSpeed: 0.2              // Arrow key rotation speed
 *
 * AUTO-CENTER DETECTION:
 * - autoSelectCenter: true          // Auto-detect centered item
 * - centerThreshold: 0.3            // Angle threshold for center detection
 *
 * IMAGE LOADING:
 * - placeholderColor: 0x1a1a2e      // Color for placeholder cards
 * - showPlaceholder: true           // Show placeholder for missing images
 *
 * CALLBACKS:
 * - onItemClick: (item) => {}       // Called when item is clicked
 * - onItemHover: (item) => {}       // Called when item is hovered (desktop)
 * - onItemCenter: (item) => {}      // Called when item enters center view
 */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

class GalleryCore {
  constructor(options = {}) {
    this.config = {
      // Container & data
      container: options.container || '#gallery',
      configPath: options.configPath || './gallery-config.json',

      // Layout options
      layout: options.layout || 'carousel',
      itemSpacing: options.itemSpacing || 4,
      itemScale: options.itemScale || 1,
      carouselRadius: options.carouselRadius || 6,
      rolodexTilt: options.rolodexTilt || 20,
      coverflowAngle: options.coverflowAngle || 60,
      helixHeight: options.helixHeight || 10,

      // Zoom mode options
      zoomStackOffset: options.zoomStackOffset || 0.6,      // Vertical offset between stacked cards
      zoomDepthSpacing: options.zoomDepthSpacing || 1.0,    // Depth spacing between cards
      zoomIntroAnimation: options.zoomIntroAnimation !== undefined ? options.zoomIntroAnimation : true,
      zoomAnimationDuration: options.zoomAnimationDuration || 1.5,  // Seconds
      zoomEasingSpeed: options.zoomEasingSpeed || 0.12,     // Navigation easing speed (lower = smoother)

      // Auto-rotation & Physics
      autoRotate: options.autoRotate !== undefined ? options.autoRotate : true,
      rotateSpeed: options.rotateSpeed || 0.3,
      rotateEasing: options.rotateEasing || 0.08,
      enableInertia: options.enableInertia !== undefined ? options.enableInertia : true,
      inertiaFriction: options.inertiaFriction || 0.95,
      inertiaDamping: options.inertiaDamping || 0.98,

      // Visual effects
      holographicEffect: options.holographicEffect !== undefined ? options.holographicEffect : true,
      enableFade: options.enableFade !== undefined ? options.enableFade : true,
      fadeIntensity: options.fadeIntensity || 0.7,
      minOpacity: options.minOpacity || 0.3,

      // Card styling
      showCardBackground: options.showCardBackground !== undefined ? options.showCardBackground : true,
      cardBackgroundColor: options.cardBackgroundColor || 0x0a0a0f,
      cardBackgroundOpacity: options.cardBackgroundOpacity || 0.9,

      // Controls
      enableMobileControls: options.enableMobileControls !== undefined ? options.enableMobileControls : true,
      enableMouseWheel: options.enableMouseWheel !== undefined ? options.enableMouseWheel : true,
      mouseWheelSpeed: options.mouseWheelSpeed || 0.001,
      enableKeyboard: options.enableKeyboard !== undefined ? options.enableKeyboard : true,
      keyboardSpeed: options.keyboardSpeed || 0.2,

      // Auto-center detection
      autoSelectCenter: options.autoSelectCenter !== undefined ? options.autoSelectCenter : true,
      centerThreshold: options.centerThreshold || 0.3,

      // Image loading
      placeholderColor: options.placeholderColor || 0x1a1a2e,
      showPlaceholder: options.showPlaceholder !== undefined ? options.showPlaceholder : true,

      // Callbacks
      onItemClick: options.onItemClick || null,
      onItemHover: options.onItemHover || null,
      onItemCenter: options.onItemCenter || null
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.items = [];
    this.galleryData = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredItem = null;
    this.selectedItem = null;
    this.centeredItem = null;
    this.rotationY = 0;
    this.targetRotationY = 0;
    this.velocity = 0;
    this.isDragging = false;
    this.lastDragX = 0;
    this.lastDragTime = 0;
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Zoom mode state
    this.currentZoomIndex = 0;
    this.targetZoomIndex = 0;
    this.smoothZoomIndex = 0;
    this.zoomIntroProgress = 0;
    this.zoomIntroComplete = false;
  }

  async init() {
    try {
      // Load gallery data
      await this.loadConfig();

      // Override settings from config if specified
      if (this.galleryData.gallery) {
        if (this.galleryData.gallery.layout) {
          this.config.layout = this.galleryData.gallery.layout;
          console.log(`Using layout from config: ${this.config.layout}`);
        }
        if (this.galleryData.gallery.showCardBackground !== undefined) {
          this.config.showCardBackground = this.galleryData.gallery.showCardBackground;
        }
        if (this.galleryData.gallery.cardBackgroundColor !== undefined) {
          this.config.cardBackgroundColor = this.galleryData.gallery.cardBackgroundColor;
        }
        if (this.galleryData.gallery.cardBackgroundOpacity !== undefined) {
          this.config.cardBackgroundOpacity = this.galleryData.gallery.cardBackgroundOpacity;
        }
      }

      // Setup Three.js scene
      this.setupScene();
      this.setupCamera();
      this.setupRenderer();
      this.setupLights();

      // Create gallery items
      await this.createGalleryItems();

      // Setup controls
      this.setupControls();

      // Start animation loop
      this.animate();

      // Handle window resize
      window.addEventListener('resize', () => this.onWindowResize(), false);

      console.log('Gallery initialized successfully');
    } catch (error) {
      console.error('Failed to initialize gallery:', error);
    }
  }

  async loadConfig() {
    try {
      const response = await fetch(this.config.configPath);
      if (!response.ok) {
        throw new Error(`Failed to load config: ${response.statusText}`);
      }
      this.galleryData = await response.json();
      console.log(`Loaded ${this.galleryData.items.length} gallery items`);
    } catch (error) {
      console.error('Error loading gallery config:', error);
      throw error;
    }
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050507);

    // Add fog for depth
    this.scene.fog = new THREE.Fog(0x050507, 10, 50);
  }

  setupCamera() {
    const container = document.querySelector(this.config.container);
    const aspect = container.clientWidth / container.clientHeight;

    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);

    // Position camera based on layout
    switch (this.config.layout) {
      case 'classic':
        this.camera.position.set(0, 2, 8);
        break;
      case 'carousel':
        this.camera.position.set(0, 2, 8);
        break;
      case 'rolodex':
        this.camera.position.set(0, 0, this.config.carouselRadius + 3);
        break;
      case 'coverflow':
        this.camera.position.set(0, 1, this.config.carouselRadius * 2);
        break;
      case 'helix':
        this.camera.position.set(this.config.carouselRadius * 2, this.config.helixHeight / 2, this.config.carouselRadius * 2);
        break;
      case 'grid':
        this.camera.position.set(0, 0, 12);
        break;
      case 'tunnel':
        this.camera.position.set(0, 0, 5);
        break;
      case 'zoom':
        this.camera.position.set(0, 0, 8);
        break;
      default:
        this.camera.position.set(0, 2, 8);
    }

    this.camera.lookAt(0, 0, 0);
  }

  setupRenderer() {
    const container = document.querySelector(this.config.container);

    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.isMobile, // Disable AA on mobile for performance
      alpha: true,
      powerPreference: 'high-performance'
    });

    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(this.renderer.domElement);
  }

  setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    this.scene.add(ambientLight);

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 10, 7.5);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    // Accent light (holographic cyan)
    const accentLight = new THREE.PointLight(0x00ffd5, 0.8, 20);
    accentLight.position.set(-5, 3, 5);
    this.scene.add(accentLight);

    // Accent light 2 (holographic pink/purple)
    const accentLight2 = new THREE.PointLight(0xff00ff, 0.6, 20);
    accentLight2.position.set(5, 3, -5);
    this.scene.add(accentLight2);
  }

  async createGalleryItems() {
    const items = this.galleryData.items;

    // Create items based on layout
    for (let i = 0; i < items.length; i++) {
      const itemData = items[i];
      const position = this.calculateItemPosition(i, items.length);
      const rotation = this.calculateItemRotation(i, items.length);

      const item = await this.createGalleryItem(itemData, position, i);

      // Apply mode-specific rotation
      if (rotation) {
        item.group.rotation.x = rotation.x;
        item.group.rotation.y = rotation.y;
        item.group.rotation.z = rotation.z;
      }

      this.items.push(item);
      this.scene.add(item.group);
    }
  }

  calculateItemPosition(index, total) {
    const spacing = this.config.itemSpacing;
    const angle = (index / total) * Math.PI * 2;

    switch (this.config.layout) {
      case 'classic':
        // Original simple circular carousel (flat, clean)
        return new THREE.Vector3(
          Math.sin(angle) * this.config.carouselRadius,
          0,
          Math.cos(angle) * this.config.carouselRadius
        );

      case 'carousel':
        // Flat circular carousel
        return new THREE.Vector3(
          Math.sin(angle) * this.config.carouselRadius,
          0,
          Math.cos(angle) * this.config.carouselRadius
        );

      case 'rolodex':
        // True rolodex - circular rotation around X-axis (vertical spin)
        return new THREE.Vector3(
          0,
          Math.sin(angle) * this.config.carouselRadius,
          Math.cos(angle) * this.config.carouselRadius
        );

      case 'coverflow':
        // Apple coverflow style - arc with perspective
        const coverRadius = this.config.carouselRadius * 1.5;
        const coverAngle = (index - total / 2) / total * Math.PI;
        return new THREE.Vector3(
          Math.sin(coverAngle) * coverRadius,
          0,
          Math.cos(coverAngle) * coverRadius - coverRadius
        );

      case 'helix':
        // Spiral helix going up
        const helixRadius = this.config.carouselRadius * 0.8;
        return new THREE.Vector3(
          Math.sin(angle) * helixRadius,
          index * (this.config.helixHeight / total),
          Math.cos(angle) * helixRadius
        );

      case 'grid':
        // Grid layout
        const cols = Math.ceil(Math.sqrt(total));
        const row = Math.floor(index / cols);
        const col = index % cols;
        return new THREE.Vector3(
          (col - cols / 2) * spacing,
          (row - Math.floor(total / cols) / 2) * spacing,
          0
        );

      case 'tunnel':
        // Linear tunnel going back
        return new THREE.Vector3(0, 0, -index * spacing);

      case 'zoom':
        // Vertical 3D stack - cards tiered behind the front card
        // Y position increases (cards go UP) as index increases
        // Z position goes back (depth) as index increases
        return new THREE.Vector3(
          0,
          index * this.config.zoomStackOffset,  // Stack vertically upward (positive Y = up)
          -index * this.config.zoomDepthSpacing  // Depth spacing
        );

      default:
        return new THREE.Vector3(0, 0, 0);
    }
  }

  calculateItemRotation(index, total) {
    const angle = (index / total) * Math.PI * 2;

    switch (this.config.layout) {
      case 'classic':
        // No special rotation - cards just face center naturally
        return { x: 0, y: 0, z: 0 };

      case 'rolodex':
        // No rotation - cards naturally flip with X-axis scene rotation
        return { x: 0, y: 0, z: 0 };

      case 'coverflow':
        // Side items angle inward
        if (index === Math.floor(total / 2)) {
          return { x: 0, y: 0, z: 0 };
        }
        const side = index < total / 2 ? 1 : -1;
        return { x: 0, y: side * (this.config.coverflowAngle * Math.PI / 180), z: 0 };

      default:
        return { x: 0, y: 0, z: 0 };
    }
  }

  async createGalleryItem(itemData, position, index) {
    const group = new THREE.Group();
    group.position.copy(position);
    group.userData = { ...itemData, index };

    // 16:9 aspect ratio sizing for 1280x720 images
    const imageWidth = 3.2;  // Width in 3D space
    const imageHeight = 1.8; // Height in 3D space (16:9 ratio)

    // Create card geometry (for background and borders)
    const cardGeometry = new THREE.PlaneGeometry(imageWidth + 0.2, imageHeight + 0.2);

    // Create card background (optional)
    if (this.config.showCardBackground) {
      const cardMaterial = new THREE.MeshStandardMaterial({
        color: this.config.cardBackgroundColor,
        emissive: 0x00ffd5,
        emissiveIntensity: 0.05,
        metalness: 0.9,
        roughness: 0.1,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: this.config.cardBackgroundOpacity
      });

      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      group.add(card);
    }

    // Load thumbnail texture or show placeholder
    if (itemData.thumbnail && !itemData.thumbnail.endsWith('/')) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        itemData.thumbnail,
        (texture) => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;

          // Create front image plane with 16:9 aspect ratio
          const imageGeometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
          const imageMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            opacity: 1.0
          });

          const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
          imageMesh.position.z = 0.02;
          group.add(imageMesh);

          // Add same image to back (mirrored)
          const backImageMesh = imageMesh.clone();
          backImageMesh.position.z = -0.02;
          backImageMesh.rotation.y = Math.PI;
          group.add(backImageMesh);

          group.userData.imageMesh = imageMesh;
          group.userData.backImageMesh = backImageMesh;
        },
        undefined,
        (error) => {
          console.warn(`Failed to load thumbnail for ${itemData.id}:`, error);
          this.createPlaceholder(group, itemData);
        }
      );
    } else if (this.config.showPlaceholder) {
      this.createPlaceholder(group, itemData);
    }

    // Add holographic border effect - brighter and more visible
    if (this.config.holographicEffect) {
      const borderGeometry = new THREE.EdgesGeometry(cardGeometry);
      const borderMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffd5,
        transparent: true,
        opacity: 0.8,
        linewidth: 2
      });
      const border = new THREE.LineSegments(borderGeometry, borderMaterial);
      group.add(border);
    }

    // Orient card to face center (for carousel)
    if (this.config.layout === 'carousel') {
      group.lookAt(0, group.position.y, 0);
    }

    return { group, data: itemData };
  }

  createPlaceholder(group, itemData) {
    // Create text placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 512, 512);

    // Border
    ctx.strokeStyle = '#00ffd5';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 492, 492);

    // Title text
    ctx.fillStyle = '#00ffd5';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(itemData.title, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    const imageGeometry = new THREE.PlaneGeometry(2.0, 2.0);
    const imageMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      opacity: 0.8
    });

    const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
    imageMesh.position.z = 0.02;
    imageMesh.position.y = 0.2;
    group.add(imageMesh);

    // Back placeholder
    const backImageMesh = imageMesh.clone();
    backImageMesh.position.z = -0.02;
    backImageMesh.rotation.y = Math.PI;
    group.add(backImageMesh);

    group.userData.imageMesh = imageMesh;
    group.userData.backImageMesh = backImageMesh;
  }

  setupControls() {
    const container = document.querySelector(this.config.container);
    const canvas = this.renderer.domElement;

    // Mouse drag controls with inertia
    canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastDragX = e.clientX;
      this.lastDragTime = Date.now();
      this.velocity = 0;
    }, false);

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.lastDragX;
        const deltaTime = Date.now() - this.lastDragTime;

        this.targetRotationY += deltaX * 0.01;

        if (this.config.enableInertia && deltaTime > 0) {
          this.velocity = (deltaX / deltaTime) * 0.1;
        }

        this.lastDragX = e.clientX;
        this.lastDragTime = Date.now();
      }
    }, false);

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    }, false);

    // Mouse move for hover detection
    canvas.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
    canvas.addEventListener('click', (e) => this.onMouseClick(e), false);

    // Touch controls for mobile with inertia
    if (this.config.enableMobileControls && this.isMobile) {
      let touchStartX = 0;
      let touchLastX = 0;
      let touchLastTime = 0;

      canvas.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchLastX = touchStartX;
        touchLastTime = Date.now();
        this.velocity = 0;
        this.isDragging = true;
      }, false);

      canvas.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - touchLastX;
        const deltaTime = Date.now() - touchLastTime;

        this.targetRotationY += deltaX * 0.01;

        if (this.config.enableInertia && deltaTime > 0) {
          this.velocity = (deltaX / deltaTime) * 0.1;
        }

        touchLastX = touchX;
        touchLastTime = Date.now();
      }, false);

      canvas.addEventListener('touchend', (e) => {
        this.isDragging = false;
        if (e.changedTouches.length > 0) {
          this.checkIntersection(e.changedTouches[0]);
        }
      }, false);
    }

    // Keyboard controls
    if (this.config.enableKeyboard) {
      document.addEventListener('keydown', (e) => {
        if (this.config.layout === 'zoom') {
          // For zoom mode, arrow keys navigate through items
          if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            this.navigateZoom(-1);
          } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            this.navigateZoom(1);
          }
        } else {
          // For other layouts, arrow keys rotate
          if (e.key === 'ArrowLeft') {
            this.targetRotationY += this.config.keyboardSpeed;
            this.velocity = this.config.keyboardSpeed * 0.1;
          } else if (e.key === 'ArrowRight') {
            this.targetRotationY -= this.config.keyboardSpeed;
            this.velocity = -this.config.keyboardSpeed * 0.1;
          }
        }
      }, false);
    }

    // Mouse wheel controls
    if (this.config.enableMouseWheel) {
      canvas.addEventListener('wheel', (e) => {
        e.preventDefault();

        if (this.config.layout === 'zoom') {
          // For zoom mode, mousewheel navigates through items
          const delta = e.deltaY > 0 ? 1 : -1;
          this.navigateZoom(delta);
        } else {
          // For other layouts, mousewheel rotates
          const delta = e.deltaY * this.config.mouseWheelSpeed;
          this.targetRotationY += delta;
          if (this.config.enableInertia) {
            this.velocity = delta * 0.1;
          }
        }
      }, { passive: false });
    }

    // Setup zoom mode navigation UI
    if (this.config.layout === 'zoom') {
      this.setupZoomNavigation();
    }
  }

  setupZoomNavigation() {
    const container = document.querySelector(this.config.container);

    // Create navigation container
    const navContainer = document.createElement('div');
    navContainer.id = 'zoom-nav';
    navContainer.style.cssText = `
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 100;
    `;

    // Create up button
    const upBtn = document.createElement('button');
    upBtn.innerHTML = '▲';
    upBtn.style.cssText = `
      width: 50px;
      height: 50px;
      background: rgba(0, 255, 213, 0.2);
      border: 2px solid #00ffd5;
      border-radius: 50%;
      color: #00ffd5;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    `;
    upBtn.onmouseenter = () => {
      upBtn.style.background = 'rgba(0, 255, 213, 0.4)';
      upBtn.style.transform = 'scale(1.1)';
    };
    upBtn.onmouseleave = () => {
      upBtn.style.background = 'rgba(0, 255, 213, 0.2)';
      upBtn.style.transform = 'scale(1)';
    };
    upBtn.onclick = () => this.navigateZoom(-1);

    // Create down button
    const downBtn = document.createElement('button');
    downBtn.innerHTML = '▼';
    downBtn.style.cssText = upBtn.style.cssText;
    downBtn.onmouseenter = upBtn.onmouseenter.bind(downBtn);
    downBtn.onmouseleave = upBtn.onmouseleave.bind(downBtn);
    downBtn.onclick = () => this.navigateZoom(1);

    navContainer.appendChild(upBtn);
    navContainer.appendChild(downBtn);
    container.appendChild(navContainer);

    this.zoomNavContainer = navContainer;
  }

  navigateZoom(direction) {
    if (this.config.layout !== 'zoom') return;

    // Update target index for smooth animation
    this.targetZoomIndex += direction;

    // Also update current index for item tracking
    this.currentZoomIndex += direction;

    // Infinite loop - wrap around when reaching ends
    const totalCards = this.items.length;
    if (this.currentZoomIndex < 0) {
      this.currentZoomIndex = totalCards - 1;
      this.targetZoomIndex = totalCards - 1;
      this.smoothZoomIndex = totalCards - 1;
    } else if (this.currentZoomIndex >= totalCards) {
      this.currentZoomIndex = 0;
      this.targetZoomIndex = 0;
      this.smoothZoomIndex = 0;
    }

    // Update centered item (the current front card)
    const frontCardIndex = this.currentZoomIndex;
    if (this.items[frontCardIndex] && this.config.onItemCenter) {
      this.config.onItemCenter(this.items[frontCardIndex].data);
    }
  }

  onMouseMove(event) {
    const container = document.querySelector(this.config.container);
    const rect = container.getBoundingClientRect();

    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.checkIntersection(event);
  }

  onMouseClick(event) {
    if (this.hoveredItem && this.config.onItemClick) {
      this.config.onItemClick(this.hoveredItem.data);
    }
  }

  checkIntersection(event) {
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(
      this.items.map(item => item.group),
      true
    );

    if (intersects.length > 0) {
      const intersectedItem = this.items.find(
        item => item.group === intersects[0].object.parent
      );

      if (intersectedItem !== this.hoveredItem) {
        // Reset previous hovered item
        if (this.hoveredItem) {
          this.hoveredItem.group.scale.set(1, 1, 1);
        }

        this.hoveredItem = intersectedItem;

        // Scale up hovered item
        if (this.hoveredItem) {
          this.hoveredItem.group.scale.set(1.1, 1.1, 1.1);

          if (this.config.onItemHover) {
            this.config.onItemHover(this.hoveredItem.data);
          }
        }
      }
    } else {
      if (this.hoveredItem) {
        this.hoveredItem.group.scale.set(1, 1, 1);
        this.hoveredItem = null;
      }
    }
  }

  onWindowResize() {
    const container = document.querySelector(this.config.container);

    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Apply inertia and friction
    if (this.config.enableInertia && !this.isDragging) {
      // Apply velocity to target rotation
      this.targetRotationY += this.velocity;

      // Apply friction
      this.velocity *= this.config.inertiaFriction;

      // Apply damping to slow down over time
      if (Math.abs(this.velocity) > 0.0001) {
        this.velocity *= this.config.inertiaDamping;
      } else {
        this.velocity = 0;
      }
    }

    // Smoother rotation with configurable easing
    this.rotationY += (this.targetRotationY - this.rotationY) * this.config.rotateEasing;

    // Auto-rotate (optional) - only when not dragging and no velocity
    if (this.config.autoRotate && !this.hoveredItem && !this.isDragging && Math.abs(this.velocity) < 0.001) {
      this.targetRotationY += this.config.rotateSpeed * 0.01;
    }

    // Rotate entire scene for carousel-based layouts
    if (['classic', 'carousel', 'coverflow', 'helix'].includes(this.config.layout)) {
      this.scene.rotation.y = this.rotationY;
    } else if (this.config.layout === 'rolodex') {
      // Rolodex rotates around X-axis (vertical flip)
      this.scene.rotation.x = this.rotationY;
    } else if (this.config.layout === 'zoom') {
      // Zoom mode intro animation
      if (this.config.zoomIntroAnimation && !this.zoomIntroComplete) {
        const deltaTime = 0.016; // Approximate frame time
        this.zoomIntroProgress += deltaTime / this.config.zoomAnimationDuration;

        if (this.zoomIntroProgress >= 1) {
          this.zoomIntroProgress = 1;
          this.zoomIntroComplete = true;
        }
      } else if (!this.config.zoomIntroAnimation) {
        this.zoomIntroProgress = 1;
        this.zoomIntroComplete = true;
      }

      // Easing function for smooth intro animation
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const introEase = easeOutCubic(this.zoomIntroProgress);

      // Smooth easing for navigation - smoothly interpolate between current and target index
      this.smoothZoomIndex += (this.targetZoomIndex - this.smoothZoomIndex) * this.config.zoomEasingSpeed;

      this.items.forEach((item, index) => {
        // Calculate the card's position in the infinite loop using the SMOOTH index
        // We use modulo to create an infinite loop effect
        const totalCards = this.items.length;

        // Use smooth index for fluid motion
        let relativeIndex = (index - this.smoothZoomIndex + totalCards * 2) % totalCards;

        // Base positions - ALL cards stay within view
        const baseY = relativeIndex * this.config.zoomStackOffset;  // Cards go UP
        const baseZ = -relativeIndex * this.config.zoomDepthSpacing; // Cards go BACK

        // During intro animation, all cards start at position 0 (stacked on top of first card)
        // Then they animate to their tiered positions
        const animatedY = baseY * introEase;
        const animatedZ = baseZ * introEase;

        // Set position
        item.group.position.y = animatedY;
        item.group.position.z = animatedZ;

        // Scale cards based on their position in stack - front is biggest
        // Smooth easing for scale transition
        const scaleRatio = 1 - (relativeIndex / totalCards) * 0.5;
        const scale = Math.max(0.5, scaleRatio);
        item.group.scale.set(scale, scale, scale);

        // Opacity - all cards stay visible, just fade slightly toward the back
        // Smooth easing for opacity transition
        const opacityRatio = 1 - (relativeIndex / totalCards) * 0.4;
        const opacity = Math.max(0.6, opacityRatio);

        item.group.children.forEach(child => {
          if (child.material) {
            child.material.opacity = opacity;
            child.material.transparent = true;
          }
        });
      });
    }

    // Make cards face camera in classic/carousel/rolodex mode
    if (['classic', 'carousel', 'rolodex'].includes(this.config.layout)) {
      this.items.forEach((item) => {
        // Get world position of the card
        const worldPos = new THREE.Vector3();
        item.group.getWorldPosition(worldPos);

        // Make the card look at the camera
        item.group.lookAt(this.camera.position);
      });
    }

    // Find item closest to center
    if (this.config.autoSelectCenter && ['carousel', 'classic', 'rolodex'].includes(this.config.layout)) {
      let closestItem = null;
      let minAngle = Infinity;

      this.items.forEach((item) => {
        // Calculate world position
        const worldPos = new THREE.Vector3();
        item.group.getWorldPosition(worldPos);

        // Calculate angle from camera forward direction
        const cameraDir = new THREE.Vector3(0, 0, -1);
        cameraDir.applyQuaternion(this.camera.quaternion);

        const itemDir = worldPos.clone().sub(this.camera.position).normalize();
        const angle = Math.abs(cameraDir.angleTo(itemDir));

        if (angle < minAngle) {
          minAngle = angle;
          closestItem = item;
        }
      });

      // Update centered item if changed
      if (closestItem && closestItem !== this.centeredItem && minAngle < this.config.centerThreshold) {
        this.centeredItem = closestItem;
        if (this.config.onItemCenter) {
          this.config.onItemCenter(closestItem.data);
        }
      }
    }

    // Animate holographic effects
    const time = Date.now() * 0.001;
    this.items.forEach((item, index) => {
      // Gentle floating animation
      item.group.position.y += Math.sin(time + index) * 0.001;

      // Holographic shimmer
      if (this.config.holographicEffect && item.group.children[0]) {
        const material = item.group.children[0].material;
        if (material.emissiveIntensity !== undefined) {
          material.emissiveIntensity = 0.1 + Math.sin(time * 2 + index) * 0.05;
        }
      }

      // Fade cards based on distance from camera (configurable)
      if (this.config.enableFade) {
        const worldPos = new THREE.Vector3();
        item.group.getWorldPosition(worldPos);
        const cameraDir = new THREE.Vector3(0, 0, -1);
        cameraDir.applyQuaternion(this.camera.quaternion);
        const itemDir = worldPos.clone().sub(this.camera.position).normalize();
        const angle = cameraDir.angleTo(itemDir);

        const opacity = THREE.MathUtils.clamp(
          1 - (angle / Math.PI) * this.config.fadeIntensity,
          this.config.minOpacity,
          1
        );

        item.group.children.forEach(child => {
          if (child.material) {
            child.material.opacity = opacity;
            child.material.transparent = true;
          }
        });
      }
    });

    this.renderer.render(this.scene, this.camera);
  }

  // Public API
  rotateToItem(index) {
    if (index >= 0 && index < this.items.length) {
      const angle = (index / this.items.length) * Math.PI * 2;
      this.targetRotationY = -angle;
    }
  }

  setLayout(layout) {
    this.config.layout = layout;
    // Re-position items
    this.items.forEach((item, index) => {
      const position = this.calculateItemPosition(index, this.items.length);
      item.group.position.copy(position);

      if (layout === 'carousel') {
        item.group.lookAt(0, item.group.position.y, 0);
      }
    });
  }

  destroy() {
    window.removeEventListener('resize', () => this.onWindowResize());
    const container = document.querySelector(this.config.container);
    if (container && this.renderer) {
      container.removeChild(this.renderer.domElement);
    }
    this.renderer?.dispose();
  }
}

export default GalleryCore;
