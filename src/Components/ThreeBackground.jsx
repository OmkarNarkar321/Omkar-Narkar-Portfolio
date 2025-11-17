import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const isMobile = window.innerWidth < 768;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    
    if (!mount.contains(renderer.domElement)) {
      mount.appendChild(renderer.domElement);
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    
    const light1 = new THREE.PointLight(0xff6b35, 2, 100);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00d4ff, 2, 100);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Material
    const material = (color) => new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.3,
      roughness: 0.4,
      clearcoat: 0.3,
      clearcoatRoughness: 0.5,
      transparent: true,
      opacity: 0.6
    });

    const colors = [0xff6b35, 0x00d4ff, 0xff1744, 0x00e676, 0xffd600];
    const geos = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.6, isMobile ? 16 : 32, isMobile ? 16 : 32),
      new THREE.TorusGeometry(0.6, 0.2, isMobile ? 12 : 16, isMobile ? 50 : 100),
      new THREE.OctahedronGeometry(0.7)
    ];

    const shapes = [];
    const count = isMobile ? 4 : 6;

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        geos[Math.floor(Math.random() * geos.length)],
        material(colors[Math.floor(Math.random() * colors.length)])
      );
      
      const angle = (i / count) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 14, (Math.random() - 0.5) * 10, Math.sin(angle) * 14 - 5);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      
      mesh.userData = {
        rx: (Math.random() - 0.5) * 0.006,
        ry: (Math.random() - 0.5) * 0.006,
        offset: Math.random() * Math.PI * 2,
        initY: mesh.position.y
      };
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    camera.position.z = 15;

    let mouseX = 0, mouseY = 0;

    const onMove = (e) => {
      const x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
      mouseX = (x / window.innerWidth) * 2 - 1;
      mouseY = -(y / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove);

    let frame, time = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      time += 0.006;

      shapes.forEach(m => {
        m.rotation.x += m.userData.rx;
        m.rotation.y += m.userData.ry;
        m.position.y = m.userData.initY + Math.sin(time + m.userData.offset) * 0.2;
      });

      const factor = isMobile ? 0.6 : 1.2;
      camera.position.x += (mouseX * factor - camera.position.x) * 0.02;
      camera.position.y += (mouseY * factor - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      light1.position.x = Math.sin(time * 0.4) * 10;
      light1.position.z = Math.cos(time * 0.4) * 10;
      light2.position.x = Math.cos(time * 0.6) * 10;
      light2.position.z = Math.sin(time * 0.6) * 10;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', onResize);
      
      shapes.forEach(m => {
        m.geometry.dispose();
        m.material.dispose();
        scene.remove(m);
      });
      
      geos.forEach(g => g.dispose());
      renderer.dispose();
      
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }} />;
}