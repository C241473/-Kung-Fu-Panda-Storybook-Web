import React, { useState, useEffect } from 'react';
import { soundManager } from '../audio/SoundManager';
import { Wind } from 'lucide-react';
import { Language } from '../types';

interface InnerPeaceModeProps {
  lang: Language;
}

export const InnerPeaceMode: React.FC<InnerPeaceModeProps> = ({ lang }) => {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          if (phase === 'Inhale') {
            setPhase('Hold');
            soundManager.playFluteNote(587.33);
            return 4;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            soundManager.playFluteNote(392.00);
            return 4;
          } else {
            setPhase('Inhale');
            soundManager.playFluteNote(440.00);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [active, phase]);

  const toggleMeditation = () => {
    const nextState = !active;
    setActive(nextState);
    if (nextState) {
      soundManager.startAmbientSoundscape();
      soundManager.playGong();
    }
  };

  const getPhaseText = () => {
    if (lang === 'bn') {
      if (phase === 'Inhale') return 'শ্বাস নিন (Inhale)';
      if (phase === 'Hold') return 'শ্বাস ধরে রাখুন (Hold)';
      return 'শ্বাস ছাড়ুন (Exhale)';
    }
    return phase;
  };

  return (
    <section id="inner-peace" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="relative rounded-3xl glass-panel border border-emerald-500/40 p-8 md:p-12 overflow-hidden text-center shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="space-y-3 mb-10">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-cinzel text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <span className="text-emerald-400 font-extrabold">☯</span>
            {lang === 'bn' ? 'ওগওয়ের স্পিরিট রিয়েলম সাধনা' : 'Master Oogway’s Sanctuary'}
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold text-slate-100">
            {lang === 'bn' ? 'ইনার পিস ও চি মেডিটেশন' : 'Inner Peace & Chi Meditation'}
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto text-sm md:text-base">
            {lang === 'bn'
              ? '"তোমার মন হলো এই পানির মতো, যখন মন অশান্ত থাকে তখন সত্য দেখা কঠিন। কিন্তু মনকে শান্ত হতে দিলে উত্তর আপনাতেই পরিষ্কার হয়ে ওঠে।"'
              : '"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear."'}
          </p>
        </div>

        {/* Breathing Circle Visualization */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto my-8 flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full border-2 border-emerald-400/40 transition-all duration-1000 ${
              active && phase === 'Inhale'
                ? 'scale-125 bg-emerald-500/20 blur-sm'
                : active && phase === 'Hold'
                ? 'scale-125 bg-gold-500/20 blur-md'
                : 'scale-90 bg-transparent'
            }`}
          />
          <div
            className={`absolute w-48 h-48 rounded-full border border-gold-400/60 transition-all duration-1000 flex items-center justify-center ${
              active && phase === 'Inhale'
                ? 'scale-110 shadow-[0_0_50px_rgba(16,185,129,0.5)]'
                : 'scale-95 shadow-none'
            }`}
          >
            <div className="text-center space-y-2 z-10">
              <span className="text-5xl block animate-spin-slow">☯️</span>
              {active ? (
                <div>
                  <span className="font-cinzel text-xl md:text-2xl font-extrabold text-gold-300 block uppercase">
                    {getPhaseText()}
                  </span>
                  <span className="text-4xl font-black text-emerald-400">{counter}</span>
                </div>
              ) : (
                <span className="font-cinzel text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                  {lang === 'bn' ? 'শুরু করতে নিচে ক্লিক করুন' : 'Click Below to Begin'}
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={toggleMeditation}
          className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl inline-flex items-center gap-2 active:scale-95 ${
            active
              ? 'bg-slate-800 text-rose-400 border border-rose-500/40 hover:bg-slate-700'
              : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 hover:brightness-110 shadow-emerald-500/25'
          }`}
        >
          <Wind className="w-5 h-5" />
          {active
            ? lang === 'bn'
              ? 'মেডিটেশন বিরতি দিন'
              : 'Pause Meditation'
            : lang === 'bn'
            ? 'চি মেডিটেশন শুরু করুন'
            : 'Begin Chi Breathing'}
        </button>
      </div>
    </section>
  );
};
