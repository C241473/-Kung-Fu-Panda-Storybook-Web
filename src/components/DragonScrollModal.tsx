import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../audio/SoundManager';
import { X, Sparkles, Award } from 'lucide-react';
import { Language } from '../types';
import { CartoonAvatar } from './CartoonAvatars';

interface DragonScrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DragonScrollModal: React.FC<DragonScrollModalProps> = ({ isOpen, onClose, lang }) => {
  const [userName, setUserName] = useState('');
  const [revealedWisdom, setRevealedWisdom] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRevealWisdom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;

    soundManager.playWuxiBlast();

    const wisdomQuotes = lang === 'bn' ? [
      `মাস্টার ${userName}, গোপন বলে আলাদা কিছু নেই! কিছুকে বিশেষ করে তুলতে কেবল বিশ্বাস করতে হয় যে তা বিশেষ!`,
      `যোদ্ধা ${userName}, গতকাল হলো একটি ইতিহাস, আগামীকাল একটি রহস্য, কিন্তু আজকের দিনটি একটি পরম উপহার।`,
      `${userName}, তোমার গল্পের শুরুটা চমৎকার না হলেও তুমি কে তা দিয়ে নির্ধারিত হয় না। তুমি কাকে বেছে নাও সেটাই আসল!`,
      `চি মাস্টার ${userName}, তুমি যখন নিজেকে গ্রহণ করতে শিখবে, তখন কোনো শত্রুই তোমার আত্মিক শক্তির সামনে দাঁড়াতে পারবে না!`,
    ] : [
      `Master ${userName}, there is no secret ingredient. To make something special, you just have to believe it is special!`,
      `Warrior ${userName}, yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.`,
      `${userName}, your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story — who you choose to be!`,
      `Master of Chi ${userName}, when you learn to embrace who you truly are, no adversary can stand against your inner peace!`,
    ];

    const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
    setRevealedWisdom(randomWisdom);

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#facc15', '#10b981', '#f59e0b', '#ffffff']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border-2 border-gold-500/60 p-8 md:p-12 shadow-2xl shadow-gold-500/20 overflow-hidden">
        <button
          onClick={() => {
            soundManager.playChopstickClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-gold-400 hover:bg-slate-700 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-3 mb-8">
          <div className="flex justify-center mb-2">
            <CartoonAvatar id="po" size="lg" />
          </div>
          <span className="text-gold-400 font-cinzel text-xs font-bold tracking-widest uppercase block">
            {lang === 'bn' ? 'জেড প্যালেসের পবিত্র নিদর্শন' : 'The Sacred Artifact of Jade Palace'}
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-slate-100">
            {lang === 'bn' ? 'পবিত্র ড্রাগন স্ক্রোল' : 'The Dragon Scroll'}
          </h2>
        </div>

        {/* Scroll Body */}
        <div className="relative rounded-2xl bg-gradient-to-b from-amber-100 via-yellow-50 to-amber-200 p-8 text-slate-950 shadow-inner border-y-8 border-gold-600 mb-8">
          <div className="text-center space-y-4">
            <div className="text-4xl">🪞✨</div>
            <h3 className="font-cinzel text-xl md:text-2xl font-black text-amber-950 uppercase tracking-wide">
              {lang === 'bn' ? 'প্রতিচ্ছবির অমূল্য সত্য' : 'The Reflective Truth'}
            </h3>
            <p className="font-serif italic text-lg md:text-xl text-amber-900 leading-relaxed font-semibold">
              {lang === 'bn'
                ? '"পবিত্র ফাঁকা ড্রাগন স্ক্রোলে তাকাও। এখানে গোপন কোনো মন্ত্র বা উপাদান নেই..."'
                : '"Look closely upon the blank scroll. There is no secret ingredient, no magical spell..."'}
            </p>
            <div className="py-2">
              <span className="font-cinzel text-2xl md:text-3xl font-extrabold text-amber-950 underline decoration-gold-600">
                {lang === 'bn' ? 'তুমি নিজেই মূল শক্তি!' : 'IT IS JUST YOU.'}
              </span>
            </div>
          </div>
        </div>

        {!revealedWisdom ? (
          <form onSubmit={handleRevealWisdom} className="space-y-4">
            <label className="block text-center text-sm font-semibold text-slate-300">
              {lang === 'bn'
                ? 'আপনার যোদ্ধার নাম লিখুন এবং আপনার ভাগ্যবাক্য উন্মোচন করুন:'
                : 'Enter your warrior name to unroll your personalized destiny:'}
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={lang === 'bn' ? 'যেমন: পো / পান্ডা মাস্টার' : 'e.g. Po the Panda / Master Alex'}
                className="flex-1 px-5 py-3.5 rounded-xl bg-slate-950 border border-gold-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-sm md:text-base hover:brightness-110 shadow-lg shadow-gold-500/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {lang === 'bn' ? 'স্ক্রোল খুলুন' : 'Unroll'}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-center p-6 rounded-2xl bg-slate-950/80 border border-gold-500/40">
            <div className="flex items-center justify-center gap-2 text-gold-400 font-bold text-sm">
              <Award className="w-5 h-5" />
              {lang === 'bn' ? 'ভাগ্যবাণী খোদাই করা হয়েছে!' : 'Destiny Inscribed!'}
            </div>
            <p className="font-serif italic text-lg text-slate-100 leading-relaxed">
              "{revealedWisdom}"
            </p>
            <button
              onClick={() => setRevealedWisdom(null)}
              className="text-xs text-gold-400 underline hover:text-gold-300 font-semibold"
            >
              {lang === 'bn' ? 'নতুন নাম লিখুন' : 'Inscribe Another Name'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
