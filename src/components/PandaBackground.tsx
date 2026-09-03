import React from 'react';

export const PandaBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep Obsidian Charcoal Sky Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060911] via-[#0b101d] to-[#060911]" />

      {/* Subtle woven scroll texture keeps the valley atmosphere visible on small screens. */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,transparent_0%,rgba(251,191,36,0.08)_45%,transparent_46%),linear-gradient(25deg,transparent_0%,rgba(16,185,129,0.06)_50%,transparent_51%)] bg-[length:180px_180px]" />

      {/* Warm Peach Blossom Pink & Amber Radial Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-600/10 via-rose-500/5 to-transparent rounded-full blur-[140px]" />

      {/* Soothing Jade Emerald Sanctuary Glow */}
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[150px]" />

      {/* Soft Crimson Lantern Warm Glow */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px]" />

      {/* Animated Floating Character Silhouettes in Backdrop */}
      <div className="absolute top-24 left-[6%] opacity-10 animate-bounce-slow text-6xl filter blur-[1px]">
        🐼
      </div>
      <div className="absolute top-48 right-[8%] opacity-10 animate-pulse text-6xl filter blur-[1px]">
        🦊
      </div>
      <div className="absolute top-[45%] left-[4%] opacity-10 animate-float text-6xl filter blur-[1px]">
        🐢
      </div>
      <div className="absolute top-[62%] right-[5%] opacity-10 animate-bounce-slow text-6xl filter blur-[1px]">
        🐯
      </div>

      {/* SVG Kung Fu Panda Valley of Peace Mountains & Jade Palace Pagoda Silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[55vh] min-h-[280px] opacity-30 object-cover"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 600 L 0 320 Q 180 200 360 340 T 720 280 T 1080 360 T 1440 260 L 1440 600 Z"
          fill="#03060c"
        />
        <path
          d="M 660 360 L 660 300 L 620 300 L 680 240 L 640 240 L 720 160 L 800 240 L 760 240 L 820 300 L 780 300 L 780 360 Z"
          fill="#050812"
        />
        <path d="M 600 300 Q 720 260 840 300 M 620 240 Q 720 210 820 240 M 660 160 Q 720 140 780 160" stroke="#d97706" strokeWidth="2" opacity="0.3" fill="none" />
        <path
          d="M 0 600 L 0 420 Q 240 360 480 460 Q 720 380 960 480 Q 1200 400 1440 460 L 1440 600 Z"
          fill="#020409"
        />
      </svg>

      {/* Floating Chinese Clouds */}
      <svg className="absolute top-20 left-10 w-64 h-32 opacity-10 animate-float" viewBox="0 0 200 100" fill="#fef3c7">
        <path d="M 20 60 Q 40 20 80 40 Q 120 10 160 50 Q 180 60 180 80 Q 180 100 120 90 Q 60 100 20 60 Z" />
      </svg>
      <svg className="absolute top-40 right-16 w-80 h-40 opacity-10 animate-pulse" viewBox="0 0 200 100" fill="#fef3c7">
        <path d="M 20 60 Q 40 20 80 40 Q 120 10 160 50 Q 180 60 180 80 Q 180 100 120 90 Q 60 100 20 60 Z" />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020409]/80 to-transparent" />

      {/* Subtle Bamboo Scroll Border Layer */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-emerald-950/30 to-transparent border-r border-amber-500/10 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-emerald-950/30 to-transparent border-l border-amber-500/10 hidden md:block" />
    </div>
  );
};
