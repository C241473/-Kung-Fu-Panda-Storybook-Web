import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="relative border-t border-gold-500/20 bg-slate-950 py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center text-slate-950 text-xl font-bold">
            🐼
          </div>
          <span className="font-cinzel text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-200">
            {lang === 'bn' ? 'কুংফু পান্ডা মহাকাব্যিক ওয়েবসাইট' : 'KUNG FU PANDA STORYBOOK'}
          </span>
        </div>

        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          {lang === 'bn'
            ? 'পো, মাস্টার শিফু, গ্র্যান্ড মাস্টার ওগওয়ে এবং ফিউরিয়াস ফাইভের স্মরণে তৈরি একটি ডিজিটাল গল্পগ্রন্থ।'
            : 'Crafted with React, Three.js WebGL, and ancient martial arts wisdom. Dedicated to Po, Master Shifu, and the Furious Five.'}
        </p>

        <div className="pt-4 flex justify-center items-center gap-2 text-xs text-slate-500">
          <span className="text-gold-400 font-bold">Skadoosh! (স্ক্যাডুশ!)</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">
            {lang === 'bn' ? '"বিশ্বাসই আসল শক্তি"' : '"There is no secret ingredient."'}
          </span>
        </div>

        <p className="pt-2 text-[11px] italic tracking-wide text-slate-500/80">
          Made by Nazeha Mosharaf
        </p>
      </div>
    </footer>
  );
};
