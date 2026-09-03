import React, { useState } from 'react';
import { soundManager } from '../audio/SoundManager';
import { Quote, RefreshCw, Copy, Check } from 'lucide-react';
import { Language } from '../types';
import { CartoonAvatar } from './CartoonAvatars';

const OOGWAY_QUOTES = [
  {
    avatarId: 'oogway',
    text: {
      en: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
      bn: "গতকাল একটি ইতিহাস, আগামীকাল একটি রহস্য, কিন্তু আজকের দিনটি একটি পরম উপহার।"
    },
    author: { en: "Grand Master Oogway", bn: "গ্র্যান্ড মাস্টার ওগওয়ে" },
    context: { en: "Under the Sacred Peach Tree of Heavenly Wisdom", bn: "পবিত্র পিচ গাছের নিচে" }
  },
  {
    avatarId: 'po',
    text: {
      en: "There is no secret ingredient. It's just you.",
      bn: "গোপন বলে আলাদা কিছু নেই, তোমার নিজের ওপর বিশ্বাসই আসল গোপন উপাদান।"
    },
    author: { en: "Mr. Ping / Po", bn: "মি. পিং / পো" },
    context: { en: "Discovered inside the reflection of the Dragon Scroll", bn: "ড্রাগন স্ক্রোলের ফাঁকা প্রতিচ্ছবিতে আবিষ্কৃত" }
  },
  {
    avatarId: 'oogway',
    text: {
      en: "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
      bn: "তোমার মন হলো শান্ত পানির মতো, যখন অস্থির থাকে তখন স্পষ্ট দেখা যায় না। কিন্তু স্থির হলে উত্তর নিজেই ভেসে ওঠে।"
    },
    author: { en: "Grand Master Oogway", bn: "গ্র্যান্ড মাস্টার ওগওয়ে" },
    context: { en: "Teaching Master Shifu about patience and faith", bn: "মাস্টার শিফুকে বিশ্বাস ও ধৈর্যের শিক্ষা" }
  },
  {
    avatarId: 'oogway',
    text: {
      en: "One often meets his destiny on the road he takes to avoid it.",
      bn: "যে পথ মানুষ বিপদ এড়াতে বেছে নেয়, সেই পথেই প্রায়শই সে নিজের ভাগ্যের মুখোমুখি হয়।"
    },
    author: { en: "Grand Master Oogway", bn: "গ্র্যান্ড মাস্টার ওগওয়ে" },
    context: { en: "Foreseeing Tai Lung's escape from Chorh-Gom Prison", bn: "তাই লাংয়ের বন্দিদশা থেকে পালানোর ভবিষ্যৎবাণী" }
  },
  {
    avatarId: 'shifu',
    text: {
      en: "If you only do what you can do, you will never be more than you are now.",
      bn: "তুমি যদি কেবল সাধ্যের কাজগুলোই করতে থাকো, তবে কখনো নিজের চেয়ে বড় কিছু হতে পারবে না।"
    },
    author: { en: "Master Shifu", bn: "মাস্টার শিফু" },
    context: { en: "Training Po to become the Master of Chi", bn: "পো-কে চি শক্তি অর্জনের ট্রেনিংয়ের সময়ে" }
  },
  {
    avatarId: 'po',
    text: {
      en: "I'm not a big fat panda. I'm THE big fat panda!",
      bn: "আমি সাধারণ কোনো মোটাসোটা পান্ডা নই, আমি হলাম সেই একমাত্র লেজেন্ডারি পান্ডা!"
    },
    author: { en: "Po the Dragon Warrior", bn: "পো ড্রাগন ওয়ারিয়র" },
    context: { en: "Before executing the Wuxi Finger Hold", bn: "উসি ফিঙ্গার হোল্ড প্রয়োগ করার পূর্বে" }
  }
];

interface QuotesGeneratorProps {
  lang: Language;
}

export const QuotesGenerator: React.FC<QuotesGeneratorProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const nextQuote = () => {
    soundManager.playFluteNote(523.25);
    setCurrentIndex((prev) => (prev + 1) % OOGWAY_QUOTES.length);
  };

  const currentQuote = OOGWAY_QUOTES[currentIndex];

  const handleCopy = () => {
    soundManager.playChopstickClick();
    navigator.clipboard.writeText(`"${currentQuote.text[lang]}" — ${currentQuote.author[lang]}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="relative rounded-3xl glass-panel border-2 border-gold-500/40 p-8 md:p-12 space-y-6 shadow-2xl text-center flex flex-col items-center">
        <CartoonAvatar id={currentQuote.avatarId} size="md" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider">
          <Quote className="w-3.5 h-3.5 text-gold-400" />
          {lang === 'bn' ? 'প্রাচীন কার্টুন গুরুবাণী স্ক্রোল' : 'Scroll of Ancient Wisdom'}
        </div>

        <h2 className="font-cinzel text-2xl md:text-3xl font-extrabold text-slate-100">
          {lang === 'bn' ? 'মহামতি ওগওয়ে ও শিফুর অমর উক্তি' : 'Wisdom of the Grand Masters'}
        </h2>

        <div className="py-4 space-y-4">
          <p className="font-serif italic text-xl md:text-2xl text-amber-200 leading-relaxed max-w-2xl mx-auto">
            "{currentQuote.text[lang]}"
          </p>
          <div className="space-y-1">
            <p className="font-bold text-gold-400 font-cinzel text-lg">
              — {currentQuote.author[lang]}
            </p>
            <p className="text-xs text-slate-400 italic">
              {currentQuote.context[lang]}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <button
            onClick={nextQuote}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-gold-500/20 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            {lang === 'bn' ? 'পরবর্তী পরম বাক্য' : 'Next Master Quote'}
          </button>
          <button
            onClick={handleCopy}
            className="px-6 py-3 rounded-xl glass-panel text-slate-300 font-semibold text-sm hover:text-gold-400 hover:border-gold-500/40 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied
              ? lang === 'bn'
                ? 'কপি করা হয়েছে!'
                : 'Copied!'
              : lang === 'bn'
              ? 'উক্তি কপি করুন'
              : 'Copy Quote'}
          </button>
        </div>
      </div>
    </section>
  );
};
