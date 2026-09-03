import React, { useState } from 'react';
import { Character, Language } from '../types';
import { soundManager } from '../audio/SoundManager';
import { Shield, Zap, Sparkles, X, Award } from 'lucide-react';
import { CartoonAvatar } from './CartoonAvatars';

interface CharacterCodexProps {
  characters: Character[];
  lang: Language;
}

export const CharacterCodex: React.FC<CharacterCodexProps> = ({ characters, lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hero' | 'master' | 'furious_five' | 'villain' | 'ally'>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = characters.filter((c) => {
    if (selectedFilter === 'all') return true;
    return c.role === selectedFilter;
  });

  const filterOptions = [
    { id: 'all', label: lang === 'bn' ? 'সকল চরিত্র' : 'All Characters' },
    { id: 'hero', label: lang === 'bn' ? 'নায়কগণ' : 'Heroes' },
    { id: 'master', label: lang === 'bn' ? 'মাস্টারগণ' : 'Masters' },
    { id: 'furious_five', label: lang === 'bn' ? 'ফিউরিয়াস ফাইভ' : 'Furious Five' },
    { id: 'villain', label: lang === 'bn' ? 'খলনায়কগণ' : 'Villains' },
    { id: 'ally', label: lang === 'bn' ? 'সহযোদ্ধা ও পরিবার' : 'Allies & Family' }
  ] as const;

  return (
    <section id="character-codex" className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Title Header with Cartoon Scroll Theme */}
      <div className="text-center space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 to-emerald-500/20 border-2 border-gold-500/40 text-gold-400 font-cinzel text-xs md:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-gold-500/10">
          <Shield className="w-4 h-4 text-emerald-400" />
          {lang === 'bn' ? 'জেড প্যালেস কার্টুন গ্যালারি' : 'Jade Palace Cartoon Codex'}
        </span>
        <h2 className="font-cinzel text-4xl md:text-6xl font-extrabold text-slate-100 drop-shadow-lg">
          {lang === 'bn' ? 'কুংফু পান্ডা চরিত্র পঞ্জি' : 'Master & Character Codex'}
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          {lang === 'bn'
            ? 'কুংফু পান্ডা সিরিজের সমস্ত বীর, মাস্টার, ফিউরিয়াস ফাইভ ও খলনায়কদের কার্টুন ইলাস্ট্রেশন, ক্ষমতা ও গল্প।'
            : 'Explore custom cartoon artworks, combat stats, and legend bios of every hero, master, and villain.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              soundManager.playChopstickClick();
              setSelectedFilter(opt.id as any);
            }}
            className={`px-5 py-2.5 rounded-2xl font-cinzel text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 border-2 ${
              selectedFilter === opt.id
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 border-gold-400 shadow-xl shadow-gold-500/30 scale-105'
                : 'glass-panel text-slate-300 border-slate-700/80 hover:text-gold-400 hover:border-gold-500/50'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Characters Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            onClick={() => {
              soundManager.playFluteNote(440);
              setSelectedCharacter(char);
            }}
            className="group relative rounded-3xl glass-panel border-2 border-slate-800 p-6 space-y-6 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-gold-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all pointer-events-none" />

            <div className="space-y-4">
              {/* Top Card Header with Cartoon Avatar */}
              <div className="flex items-center gap-4">
                <CartoonAvatar id={char.id} size="md" />

                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase block truncate">
                    {char.title[lang]}
                  </span>
                  <h3 className="font-cinzel text-2xl font-black text-slate-100 group-hover:text-gold-400 transition-colors truncate">
                    {char.name[lang]}
                  </h3>
                </div>
              </div>

              {/* Speech Bubble Quote */}
              <div className="relative p-3 rounded-2xl bg-slate-900/90 border border-gold-500/30 text-slate-200 italic text-xs md:text-sm">
                "{char.quote[lang]}"
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-3">
                {char.description[lang]}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              {/* Special Move Badge */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold uppercase">
                  {lang === 'bn' ? 'বিশেষ কৌশল' : 'Signature Move'}
                </span>
                <span className="font-bold text-gold-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-gold-400" />
                  {char.specialMove[lang]}
                </span>
              </div>

              {/* Mini Stats Progress Bars */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-medium text-slate-300 mb-0.5">
                    <span>{lang === 'bn' ? 'চপলতা (Agility)' : 'Agility'}</span>
                    <span>{char.stats.agility}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: `${char.stats.agility}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-slate-300 mb-0.5">
                    <span>{lang === 'bn' ? 'চি শক্তি (Chi)' : 'Chi Energy'}</span>
                    <span>{char.stats.chi}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-1000"
                      style={{ width: `${char.stats.chi}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Cartoon Character Profile Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border-2 border-gold-500/60 p-6 md:p-10 space-y-6 shadow-2xl overflow-hidden">
            <button
              onClick={() => {
                soundManager.playChopstickClick();
                setSelectedCharacter(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-gold-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <CartoonAvatar id={selectedCharacter.id} size="xl" />
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  {selectedCharacter.title[lang]}
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-slate-100">
                  {selectedCharacter.name[lang]}
                </h2>
                <p className="font-serif italic text-gold-300 text-lg">
                  "{selectedCharacter.quote[lang]}"
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-slate-200 text-sm md:text-base leading-relaxed">
              <h4 className="font-cinzel text-gold-400 font-bold uppercase text-xs tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                {lang === 'bn' ? 'চরিত্রের পূর্ণ বিবরণ' : 'Full Character Bio'}
              </h4>
              <p>{selectedCharacter.description[lang]}</p>
            </div>

            <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between text-sm">
              <span className="font-bold text-slate-300">
                {lang === 'bn' ? 'সিগনেচার কুংফু কৌশল' : 'Signature Move'}
              </span>
              <span className="font-black text-gold-400 flex items-center gap-1 text-base">
                <Zap className="w-5 h-5 text-gold-400" />
                {selectedCharacter.specialMove[lang]}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
