import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { StoryChapterSection } from './components/StoryChapter';
import { DumplingGame } from './components/DumplingGame';
import { CharacterCodex } from './components/CharacterCodex';
import { InnerPeaceMode } from './components/InnerPeaceMode';
import { QuotesGenerator } from './components/QuotesGenerator';
import { Footer } from './components/Footer';
import { PandaBackground } from './components/PandaBackground';
import { Language } from './types';
import { CHARACTERS_DATA } from './data/characters';
import { CHAPTERS_DATA } from './data/chapters';

export function App() {
  // Primary default language set to English ('en')
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-gold-500 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* Immersive Animated Kung Fu Panda Series Background */}
      <PandaBackground />

      <div className="relative z-10">
        {/* Fixed Navbar with Language Switcher */}
        <Navbar
          lang={lang}
          onToggleLang={toggleLanguage}
        />

        {/* 3D Hero Section with Cartoon Mascot Parade */}
        <Hero3D
          lang={lang}
        />

        {/* Story Chapters Section (Movies 1, 2, 3, & 4) */}
        <StoryChapterSection
          chapters={CHAPTERS_DATA}
          lang={lang}
        />

        {/* Master Oogway & Shifu Wisdom Generator */}
        <QuotesGenerator lang={lang} />

        {/* Complete Animated Character Codex (15 Characters across all movies) */}
        <CharacterCodex
          characters={CHARACTERS_DATA}
          lang={lang}
        />

        {/* Interactive Chopsticks Dumpling Mini-Game */}
        <DumplingGame lang={lang} />

        {/* Inner Peace Chi Meditation Mode */}
        <InnerPeaceMode lang={lang} />

        {/* Footer */}
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
