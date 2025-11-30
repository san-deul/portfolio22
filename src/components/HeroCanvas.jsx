import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.2;
    mountRef.current.appendChild(renderer.domElement);

    // 🎨 머티리얼 - 내부 발광 + 유리 느낌
    const geometry = new THREE.SphereGeometry(1, 128, 128);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#1e90ff"),
      emissive: new THREE.Color("#0077ff"),
      emissiveIntensity: 3,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.9, // ← 유리처럼
      thickness: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // 💡 Light - 주변과 내부에 glow
    const ambient = new THREE.AmbientLight(0x6699ff, 0.5);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x3399ff, 5, 50);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x0033ff, 3, 50);
    backLight.position.set(-2, -1, -3);
    scene.add(backLight);

    // ✨ Bloom 효과
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.8, // bloom strength
      0.6, // radius
      0.1 // threshold
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // 🌀 Animation
    const animate = () => {
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.002;
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    // 🖱️ Mouse reaction
    const handleMouseMove = (e) => {
      const x = (e.clientX / width) * 2 - 1;
      const y = -(e.clientY / height) * 2 + 1;
      sphere.rotation.y = x * 1.2;
      sphere.rotation.x = y * 1.2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #000015, #000)",
      }}
    />
  );
}
