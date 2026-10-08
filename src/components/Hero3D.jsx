import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';
import { Play, RotateCw, Sparkles, Layers, Sliders, Eye } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [modelType, setModelType] = useState('torus'); // torus, crystal, gyro
  const [colorTheme, setColorTheme] = useState('cyan'); // cyan, pink, purple, gold
  const [wireframe, setWireframe] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [fps, setFps] = useState(60);

  // References for live update inside the animation loop
  const liveSettingsRef = useRef({
    modelType: 'torus',
    colorTheme: 'cyan',
    wireframe: false,
    speedMultiplier: 1,
  });

  useEffect(() => {
    liveSettingsRef.current = {
      modelType,
      colorTheme,
      wireframe,
      speedMultiplier,
    };
  }, [modelType, colorTheme, wireframe, speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.035);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Color definitions
    const colors = {
      cyan: { primary: 0x00f5d4, secondary: 0x3a86ff, point: 0x00f5d4 },
      pink: { primary: 0xf72585, secondary: 0x7209b7, point: 0xf72585 },
      purple: { primary: 0x9d4edd, secondary: 0x4361ee, point: 0x9d4edd },
      gold: { primary: 0xffbe0b, secondary: 0xfb5607, point: 0xffbe0b },
    };

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(colors[liveSettingsRef.current.colorTheme].point, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colors[liveSettingsRef.current.colorTheme].secondary, 2.5, 50);
    pointLight2.position.set(-5, -4, -3);
    scene.add(pointLight2);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 10, 5);
    scene.add(dirLight);

    // Main 3D Models Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 1. Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32, 2, 3);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: colors[liveSettingsRef.current.colorTheme].primary,
      emissive: colors[liveSettingsRef.current.colorTheme].primary,
      emissiveIntensity: 0.15,
      metalness: 0.2,
      roughness: 0.25,
      transmission: 0.6,
      thickness: 1.2,
      transparent: true,
      opacity: 0.88,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);

    // Inner glowing sphere inside torus
    const innerCoreGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    torusMesh.add(innerCoreMesh);

    // 2. Crystal Icosahedron
    const crystalGeo = new THREE.IcosahedronGeometry(2, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: colors[liveSettingsRef.current.colorTheme].primary,
      emissive: colors[liveSettingsRef.current.colorTheme].secondary,
      emissiveIntensity: 0.2,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.75,
      transparent: true,
      opacity: 0.9,
      wireframe: false,
      flatShading: true,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);

    // Crystal outer wireframe cage
    const wireCageGeo = new THREE.IcosahedronGeometry(2.35, 1);
    const wireCageMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireCageMesh = new THREE.Mesh(wireCageGeo, wireCageMat);
    crystalMesh.add(wireCageMesh);

    // 3. Gyro Rings
    const gyroGroup = new THREE.Group();
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.08, 16, 100);
    const ring2Geo = new THREE.TorusGeometry(1.65, 0.08, 16, 100);
    const ring3Geo = new THREE.TorusGeometry(1.2, 0.08, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: colors[liveSettingsRef.current.colorTheme].primary,
      metalness: 0.8,
      roughness: 0.2,
      emissive: colors[liveSettingsRef.current.colorTheme].primary,
      emissiveIntensity: 0.3,
    });

    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    const ring3 = new THREE.Mesh(ring3Geo, ringMat);
    gyroGroup.add(ring1);
    gyroGroup.add(ring2);
    gyroGroup.add(ring3);

    const gyroSphereGeo = new THREE.OctahedronGeometry(0.7, 0);
    const gyroSphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const gyroSphere = new THREE.Mesh(gyroSphereGeo, gyroSphereMat);
    gyroGroup.add(gyroSphere);

    // Current active mesh inside group
    modelGroup.add(torusMesh);

    // Particle Cloud (Dust field)
    const particleCount = 900;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(colors.cyan.primary);
    const altColor = new THREE.Color(colors.cyan.secondary);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 22;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 22;

      const mixedColor = Math.random() > 0.5 ? baseColor : altColor;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Interaction & Dragging
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x * 0.7;
      mouseY = y * 0.7;

      if (isDragging) {
        const deltaX = event.clientX - previousMouseX;
        const deltaY = event.clientY - previousMouseY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
      }
    };

    const onPointerDown = (event) => {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // FPS Counter tracking
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    // Animation Loop
    let currentActiveType = 'torus';

    const animate = (time) => {
      animId = requestAnimationFrame(animate);

      // FPS Calculation
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }

      const settings = liveSettingsRef.current;

      // Model Switch dynamically
      if (settings.modelType !== currentActiveType) {
        modelGroup.clear();
        if (settings.modelType === 'torus') {
          modelGroup.add(torusMesh);
        } else if (settings.modelType === 'crystal') {
          modelGroup.add(crystalMesh);
        } else if (settings.modelType === 'gyro') {
          modelGroup.add(gyroGroup);
        }
        currentActiveType = settings.modelType;
      }

      // Live Color Theme Update
      const themeColors = colors[settings.colorTheme] || colors.cyan;
      pointLight1.color.setHex(themeColors.point);
      pointLight2.color.setHex(themeColors.secondary);

      torusMat.color.setHex(themeColors.primary);
      torusMat.emissive.setHex(themeColors.primary);
      crystalMat.color.setHex(themeColors.primary);
      crystalMat.emissive.setHex(themeColors.secondary);
      ringMat.color.setHex(themeColors.primary);
      ringMat.emissive.setHex(themeColors.primary);
      wireCageMat.color.setHex(themeColors.primary);

      // Wireframe state
      torusMat.wireframe = settings.wireframe;
      crystalMat.wireframe = settings.wireframe;
      ringMat.wireframe = settings.wireframe;

      // Rotation & Speeds
      const speed = 0.007 * settings.speedMultiplier;

      if (!isDragging) {
        targetRotationY += speed;
        targetRotationX += speed * 0.4;
      }

      // Smooth Model Rotation Interpolation
      modelGroup.rotation.y += (targetRotationY + mouseX * 0.6 - modelGroup.rotation.y) * 0.08;
      modelGroup.rotation.x += (targetRotationX - mouseY * 0.6 - modelGroup.rotation.x) * 0.08;

      // Unique internal rotations
      if (currentActiveType === 'gyro') {
        ring1.rotation.x += 0.012 * settings.speedMultiplier;
        ring1.rotation.y += 0.008 * settings.speedMultiplier;
        ring2.rotation.y += 0.016 * settings.speedMultiplier;
        ring2.rotation.z += 0.01 * settings.speedMultiplier;
        ring3.rotation.z += 0.02 * settings.speedMultiplier;
        ring3.rotation.x += 0.015 * settings.speedMultiplier;
        gyroSphere.rotation.x += 0.03 * settings.speedMultiplier;
        gyroSphere.rotation.y += 0.03 * settings.speedMultiplier;
      } else if (currentActiveType === 'crystal') {
        wireCageMesh.rotation.y -= 0.006 * settings.speedMultiplier;
        wireCageMesh.rotation.x += 0.004 * settings.speedMultiplier;
      } else if (currentActiveType === 'torus') {
        innerCoreMesh.rotation.y += 0.02 * settings.speedMultiplier;
      }

      // Gentle Camera Floating
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Particle Drift
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose
      torusGeo.dispose();
      torusMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      wireCageGeo.dispose();
      wireCageMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMat.dispose();
      gyroSphereGeo.dispose();
      gyroSphereMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '560px' }}>
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'grab',
        }}
        title="Döndürmek için sürükleyin veya etkileşime geçin"
      />

      {/* Floating 3D HUD & Control Panel */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          width: '92%',
          maxWidth: '540px',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '12px 18px',
            borderRadius: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            background: 'rgba(10, 14, 24, 0.75)',
            border: '1px solid rgba(0, 245, 212, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 245, 212, 0.1)',
          }}
        >
          {/* Model Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Layers size={13} style={{ color: '#00f5d4' }} /> Geometri:
            </span>
            {[
              { id: 'torus', label: 'Torus' },
              { id: 'crystal', label: 'Kristal' },
              { id: 'gyro', label: 'Kuantum' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  sound.playClick();
                  setModelType(m.id);
                }}
                style={{
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: modelType === m.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.06)',
                  color: modelType === m.id ? '#050608' : '#e2e8f0',
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Theme Colors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={13} style={{ color: '#f72585' }} /> Renk:
            </span>
            {[
              { id: 'cyan', color: '#00f5d4' },
              { id: 'pink', color: '#f72585' },
              { id: 'purple', color: '#9d4edd' },
              { id: 'gold', color: '#ffbe0b' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  sound.playHover();
                  setColorTheme(c.id);
                }}
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: c.color,
                  border: colorTheme === c.id ? '2px solid #fff' : '2px solid transparent',
                  transform: colorTheme === c.id ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.2s',
                  boxShadow: colorTheme === c.id ? `0 0 10px ${c.color}` : 'none',
                }}
                title={c.id}
              />
            ))}
          </div>

          {/* Toggles: Wireframe & Speed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => {
                sound.playClick();
                setWireframe(!wireframe);
              }}
              style={{
                fontSize: '0.72rem',
                padding: '4px 8px',
                borderRadius: '10px',
                background: wireframe ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255,255,255,0.05)',
                color: wireframe ? '#00f5d4' : '#94a3b8',
                border: wireframe ? '1px solid #00f5d4' : '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Eye size={12} /> {wireframe ? 'Kafes Açık' : 'Kafes'}
            </button>

            <button
              onClick={() => {
                sound.playHover();
                setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1));
              }}
              style={{
                fontSize: '0.72rem',
                padding: '4px 8px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
              title="Dönüş Hızı"
            >
              <RotateCw size={12} /> {speedMultiplier}x
            </button>
          </div>
        </div>
      </div>

      {/* Floating Spatial Badges */}
      <div
        className="glass-pill animate-float"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(15, 20, 32, 0.75)',
          border: '1px solid rgba(0, 245, 212, 0.3)',
          color: '#e2e8f0',
          fontSize: '0.78rem',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00f5d4',
            display: 'inline-block',
            boxShadow: '0 0 8px #00f5d4',
          }}
        />
        <span>Three.js Engine • {fps} FPS</span>
      </div>

      <div
        className="glass-pill"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'rgba(15, 20, 32, 0.75)',
          border: '1px solid rgba(247, 37, 133, 0.3)',
          color: '#e2e8f0',
          fontSize: '0.78rem',
        }}
      >
        <span style={{ color: '#f72585' }}>✦</span>
        <span>Etkileşimli 3D Render</span>
      </div>
    </div>
  );
}
