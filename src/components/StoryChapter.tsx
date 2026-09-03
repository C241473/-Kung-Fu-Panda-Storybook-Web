import React, { useState } from 'react';
import { StoryChapterData, Language } from '../types';
import { soundManager } from '../audio/SoundManager';
import { Quote, Sparkles, Volume2, VolumeX, BookOpen, Film, X } from 'lucide-react';
import { CartoonAvatar } from './CartoonAvatars';

interface StoryChapterProps {
  chapters: StoryChapterData[];
  lang: Language;
}

export const StoryChapterSection: React.FC<StoryChapterProps> = ({ chapters, lang }) => {
  const [activeReadingChapter, setActiveReadingChapter] = useState<StoryChapterData | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<string>('all');

  const filteredChapters = chapters.filter((c) => {
    if (selectedMovie === 'all') return true;
    return c.movie.toLowerCase() === selectedMovie.toLowerCase();
  });

  const handleSpeakText = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.lang = lang === 'bn' ? 'bn-BD' : 'en-US';

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const getChapterAvatarId = (id: number) => {
    switch (id) {
      case 1:
        return 'po';
      case 2:
        return 'shifu';
      case 3:
        return 'shen';
      case 4:
        return 'kai';
      case 5:
        return 'zhen';
      default:
        return 'po';
    }
  };

  return (
    <section id="story-chapters" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header with Cartoon Scroll Theme */}
      <div className="text-center space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 to-amber-500/20 border-2 border-gold-500/40 text-gold-400 font-cinzel text-xs md:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-gold-500/10">
          <BookOpen className="w-4 h-4 text-gold-400" />
          {lang === 'bn' ? 'কার্টুন মহাকাব্যিক গল্পকাহিনী' : 'Illustrated Sacred Chronicles'}
        </span>
        <h2 className="font-cinzel text-4xl md:text-6xl font-extrabold text-slate-100 drop-shadow-lg">
          {lang === 'bn' ? 'কুংফু পান্ডা সিরিজের কাহিনীর অধ্যায়সমূহ' : 'Kung Fu Panda Movie Chapters'}
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          {lang === 'bn'
            ? 'নুডলস বয় পো-র সাধারণ জীবন থেকে শুরু করে ড্রাগন ওয়ারিয়র, পরম মনঃশান্তি ও স্পিরিচুয়াল লিডার হওয়ার রোমাঞ্চকর কার্টুন কাহিনী।'
            : 'Follow Po’s grand journey from noodle shop dreamer to Dragon Warrior, Chi Master, and Spiritual Leader.'}
        </p>

        {/* Movie Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
          {[
            { id: 'all', label: lang === 'bn' ? 'সব অধ্যায়' : 'All Chapters' },
            { id: 'kung fu panda 1', label: 'Kung Fu Panda 1' },
            { id: 'kung fu panda 2', label: 'Kung Fu Panda 2' },
            { id: 'kung fu panda 3', label: 'Kung Fu Panda 3' },
            { id: 'kung fu panda 4', label: 'Kung Fu Panda 4' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playChopstickClick();
                setSelectedMovie(tab.id);
              }}
              className={`px-5 py-2.5 rounded-2xl font-cinzel text-xs md:text-sm font-bold tracking-wider uppercase transition-all border-2 ${
                selectedMovie === tab.id
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 border-gold-400 shadow-xl shadow-gold-500/25 scale-105'
                  : 'glass-panel text-slate-300 border-slate-700/80 hover:text-gold-400 hover:border-gold-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Panels */}
      <div className="space-y-24">
        {filteredChapters.map((chap, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={chap.id}
              id={`chapter-${chap.id}`}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
            >
              {/* Background Glow */}
              <div
                className={`absolute -inset-4 rounded-3xl opacity-20 blur-3xl transition-opacity group-hover:opacity-30 pointer-events-none ${
                  chap.visualTheme === 'gold'
                    ? 'bg-gold-500'
                    : chap.visualTheme === 'jade'
                    ? 'bg-emerald-500'
                    : chap.visualTheme === 'red'
                    ? 'bg-rose-500'
                    : chap.visualTheme === 'purple'
                    ? 'bg-purple-500'
                    : 'bg-teal-500'
                }`}
              />

              {/* Story Text Side */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider">
                    {lang === 'bn' ? `অধ্যায় 0${chap.id}` : `Chapter 0${chap.id}`}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-gold-400" />
                    {chap.movie}
                  </span>
                  <span className="text-slate-400 text-xs font-medium tracking-widest uppercase">
                    {chap.location[lang]}
                  </span>
                </div>

                <h3 className="font-cinzel text-3xl md:text-5xl font-black text-slate-100 leading-tight">
                  {chap.title[lang]}
                </h3>
                <p className="text-gold-400 font-medium text-lg md:text-xl italic">
                  "{chap.subtitle[lang]}"
                </p>

                <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                  {chap.storyText[lang].map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Iconic Quote Box */}
                <div
                  onClick={() => soundManager.playFluteNote(523.25)}
                  className="cursor-pointer p-6 rounded-2xl glass-panel border-l-4 border-l-gold-500 space-y-2 hover:border-gold-400 transition-all group/quote"
                >
                  <div className="flex items-center gap-2 text-gold-400">
                    <Quote className="w-5 h-5" />
                    <span className="font-cinzel font-bold text-sm tracking-wider uppercase">
                      {lang === 'bn' ? 'গুরুবাণী ও জ্ঞানবাক্য' : 'Master Wisdom'}
                    </span>
                  </div>
                  <p className="text-slate-100 font-serif italic text-lg md:text-xl leading-relaxed">
                    "{chap.quote.text[lang]}"
                  </p>
                  <p className="text-right text-gold-400/80 font-bold text-sm">
                    — {chap.quote.author[lang]}
                  </p>
                </div>

                {/* Actions Bar */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      soundManager.playChopstickClick();
                      handleSpeakText(chap.storyText[lang].join(' '));
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border-2 ${
                      isSpeaking
                        ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 animate-pulse'
                        : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-gold-500/50 hover:text-gold-400'
                    }`}
                  >
                    {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold-400" />}
                    {isSpeaking
                      ? lang === 'bn'
                        ? 'পড়া বন্ধ করুন'
                        : 'Stop Voice Narration'
                      : lang === 'bn'
                      ? 'ভয়েসে গল্প শুনুন'
                      : 'Listen to Story'}
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playGong();
                      setActiveReadingChapter(chap);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-lg shadow-gold-500/20 transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    {lang === 'bn' ? 'ফুলস্ক্রিন বই আকারে পড়ুন' : 'Read Storybook Mode'}
                  </button>

                  <span className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    {chap.keyMoment[lang]}
                  </span>
                </div>
              </div>

              {/* Visual Cartoon Card Side */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl p-6 glass-panel border-2 border-gold-500/40 shadow-2xl flex flex-col items-center justify-center text-center space-y-6 hover:scale-[1.02] transition-transform duration-500">
                  <CartoonAvatar id={getChapterAvatarId(chap.id)} size="xl" />

                  <div className="space-y-2">
                    <span className="px-3.5 py-1 rounded-full bg-gold-500 text-slate-950 font-black text-xs uppercase tracking-wider inline-block shadow-md">
                      {chap.badge[lang]}
                    </span>
                    <h4 className="font-cinzel text-2xl font-extrabold text-slate-100">
                      {chap.title[lang]}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Storybook Modal */}
      {activeReadingChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] glass-panel border-2 border-gold-500/50 rounded-3xl p-6 md:p-10 overflow-y-auto space-y-8 shadow-2xl">
            <button
              onClick={() => {
                soundManager.playChopstickClick();
                setActiveReadingChapter(null);
                if (isSpeaking) window.speechSynthesis.cancel();
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-gold-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center text-center space-y-3">
              <CartoonAvatar id={getChapterAvatarId(activeReadingChapter.id)} size="lg" />
              <span className="px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest">
                {activeReadingChapter.movie}
              </span>
              <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold text-slate-100">
                {activeReadingChapter.title[lang]}
              </h2>
              <p className="text-gold-400 italic text-lg">"{activeReadingChapter.subtitle[lang]}"</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 text-slate-200 text-lg md:text-xl leading-relaxed">
              {activeReadingChapter.storyText[lang].map((para, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-bold first-letter:text-gold-400">
                  {para}
                </p>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-center space-y-2">
              <p className="font-serif italic text-xl text-gold-300">
                "{activeReadingChapter.quote.text[lang]}"
              </p>
              <p className="font-bold text-sm text-gold-400">— {activeReadingChapter.quote.author[lang]}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
