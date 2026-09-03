import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { soundManager } from '../audio/SoundManager';
import { Sparkles, Flame, Shield, Heart } from 'lucide-react';
import { Language } from '../types';
import { CartoonAvatar } from './CartoonAvatars';

interface Hero3DProps {
  lang: Language;
}

export const Hero3D: React.FC<Hero3DProps> = ({ lang }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.4);
    scene.add(ambientLight);

    const goldenSpot = new THREE.SpotLight(0xfacc15, 8);
    goldenSpot.position.set(5, 8, 8);
    goldenSpot.angle = Math.PI / 4;
    scene.add(goldenSpot);

    const jadePoint = new THREE.PointLight(0x10b981, 6, 20);
    jadePoint.position.set(-5, -2, 5);
    scene.add(jadePoint);

    // 3. Central Glowing Chi Sphere (Yin-Yang Core)
    const sphereGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xd97706,
      emissiveIntensity: 0.6,
    });
    const chiSphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(chiSphere);

    // Floating Golden Aura Rings
    const auraGeo = new THREE.TorusGeometry(2.6, 0.04, 16, 100);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.7,
    });
    const auraRing = new THREE.Mesh(auraGeo, auraMat);
    scene.add(auraRing);

    // 4. Falling Petals
    const petalCount = 220;
    const petalGeo = new THREE.BufferGeometry();
    const petalPositions = new Float32Array(petalCount * 3);

    for (let i = 0; i < petalCount * 3; i += 3) {
      petalPositions[i] = (Math.random() - 0.5) * 20;
      petalPositions[i + 1] = Math.random() * 15 - 5;
      petalPositions[i + 2] = (Math.random() - 0.5) * 15;
    }

    petalGeo.setAttribute('position', new THREE.BufferAttribute(petalPositions, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f472b6';
      ctx.beginPath();
      ctx.arc(16, 16, 12, 0, Math.PI * 2);
      ctx.fill();
    }
    const petalTexture = new THREE.CanvasTexture(canvas);

    const petalMat = new THREE.PointsMaterial({
      size: 0.35,
      map: petalTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const petalParticles = new THREE.Points(petalGeo, petalMat);
    scene.add(petalParticles);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      chiSphere.position.y = Math.sin(elapsedTime * 1.5) * 0.2;
      chiSphere.rotation.y = elapsedTime * 0.5 + mouseX * 0.3;
      chiSphere.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 - mouseY * 0.2;
      auraRing.rotation.z = elapsedTime * 0.8;

      const positions = petalParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < petalCount * 3; i += 3) {
        positions[i] -= 0.03;
        positions[i - 1] += Math.sin(elapsedTime + i) * 0.01;
        if (positions[i] < -8) {
          positions[i] = 10;
        }
      }
      petalParticles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-12 px-4">
      {/* Hero Cartoon Mascot Row Parade */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6">
        <CartoonAvatar id="po" size="md" />
        <CartoonAvatar id="shifu" size="md" />
        <CartoonAvatar id="oogway" size="md" />
        <CartoonAvatar id="tigress" size="md" />
        <CartoonAvatar id="tailung" size="md" />
        <CartoonAvatar id="shen" size="md" />
        <CartoonAvatar id="kai" size="md" />
        <CartoonAvatar id="chameleon" size="md" />
        <CartoonAvatar id="zhen" size="md" />
      </div>

      {/* Hero Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel text-gold-400 border-2 border-gold-500/40 text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-xl shadow-gold-500/20 animate-pulse">
        <Sparkles className="w-4 h-4 text-gold-400" />
        {lang === 'bn' ? 'কুংফু পান্ডা অ্যানিমেটেড কার্টুন লিজেন্ড' : 'The Sacred Cartoon Legend of Po & Masters'}
      </div>

      {/* Main Title */}
      <h1 className="relative z-10 font-cinzel text-5xl md:text-7xl lg:text-8xl font-black text-center tracking-tight leading-none mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-gold-400 to-amber-500 text-glow-gold">
          KUNG FU PANDA
        </span>
        <br />
        <span className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
          {lang === 'bn' ? 'পো-র লিজেন্ডারি কার্টুন গল্পগ্রন্থ' : 'The Legendary Animated Journey'}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 max-w-2xl text-center text-slate-300 text-lg md:text-xl font-medium mb-8 leading-relaxed">
        {lang === 'bn'
          ? 'নুডল স্যুপের বাটি থেকে শুরু করে প্রাচীন চি শক্তি অর্জন পর্যন্ত কুংফু পান্ডা সিরিজের সম্পূর্ণ কাহিনীর কার্টুন ইলাস্ট্রেশনযুক্ত গল্পগ্রন্থ।'
          : 'From noodle bowl dreams to mastering the ancient energy of Chi. Explore the animated cartoon storybook of the valley’s greatest warrior.'}
      </p>

      {/* 3D Chi Sphere Canvas Mounting Area */}
      <div className="relative z-10 w-full max-w-4xl h-[340px] md:h-[400px] cursor-pointer group flex items-center justify-center">
        <div ref={mountRef} className="w-full h-full" />
      </div>

      {/* Call to Action Button */}
      <div className="relative z-10 flex justify-center items-center mt-6">
        <a
          href="#story-chapters"
          onClick={() => soundManager.playGong()}
          className="flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-slate-950 font-black text-xl hover:brightness-110 transition-all shadow-2xl shadow-gold-500/30 active:scale-95 border-2 border-gold-300"
        >
          <Flame className="w-6 h-6 text-red-600 animate-bounce" />
          {lang === 'bn' ? 'গল্প পড়া শুরু করুন' : 'Begin Story Journey'}
        </a>
      </div>
    </section>
  );
};
