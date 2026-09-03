import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, Compass, Shield, Globe } from 'lucide-react';
import { soundManager } from '../audio/SoundManager';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isMuted, setIsMuted] = useState(soundManager.getMutedState());

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundManager.startAmbientSoundscape();
      soundManager.playGong();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-4 md:px-8 py-2.5 sm:py-3.5 glass-panel border-b border-gold-500/30 bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-950/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-gradient-to-tr from-gold-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black text-xl sm:text-2xl shadow-lg shadow-gold-500/30 group-hover:scale-110 transition-transform border-2 border-gold-300 animate-pulse">
            🐼
          </div>
          <div className="min-w-0">
            <span className="block truncate font-cinzel text-xs sm:text-lg md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-amber-400 to-yellow-200 tracking-wide">
              {lang === 'bn' ? 'কুংফু পান্ডা স্টোরিবুক' : 'KUNG FU PANDA'}
            </span>
            <span className="hidden sm:block text-[10px] text-emerald-400 tracking-widest uppercase font-extrabold">
              {lang === 'bn' ? 'ভ্যালি অফ পিস কার্টুন গ্যালারি' : 'Valley of Peace Cartoon Legends'}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-bold text-slate-300">
          <a
            href="#story-chapters"
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105"
            onClick={() => soundManager.playChopstickClick()}
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            {lang === 'bn' ? 'গল্পসমূহ' : 'Movie Chapters'}
          </a>
          <a
            href="#character-codex"
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105"
            onClick={() => soundManager.playChopstickClick()}
          >
            <Shield className="w-4 h-4 text-rose-400" />
            {lang === 'bn' ? 'চরিত্রসমূহ' : 'Character Codex'}
          </a>
          <a
            href="#dumpling-game"
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105"
            onClick={() => soundManager.playChopstickClick()}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            {lang === 'bn' ? 'ডাম্পলিং গেম' : 'Dumpling Battle'}
          </a>
          <a
            href="#inner-peace"
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105"
            onClick={() => soundManager.playChopstickClick()}
          >
            <span className="text-emerald-400 font-extrabold">☯</span>
            {lang === 'bn' ? 'চি মেডিটেশন' : 'Chi Meditation'}
          </a>
        </div>

        {/* Action Controls */}
        <div className="shrink-0 flex items-center gap-1.5 sm:gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={() => {
              soundManager.playChopstickClick();
              onToggleLang();
            }}
            className="flex items-center gap-2 px-2 sm:px-3.5 py-2 rounded-2xl bg-slate-900 border-2 border-slate-700 hover:border-gold-500/60 text-xs font-extrabold text-slate-200 hover:text-gold-400 transition-all shadow-md active:scale-95"
            title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          >
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="hidden sm:inline uppercase tracking-wider font-black">{lang === 'bn' ? 'BN (বাংলা)' : 'EN (English)'}</span>
          </button>

          {/* Zen Music Toggle Button */}
          <button
            onClick={handleToggleSound}
            className={`p-2.5 rounded-2xl border-2 transition-all ${
              isMuted
                ? 'bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/30'
            }`}
            title={isMuted ? 'Unmute Ambient Zen Music' : 'Mute Ambient Music'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
          </button>
        </div>
      </div>
    </nav>
  );
};
