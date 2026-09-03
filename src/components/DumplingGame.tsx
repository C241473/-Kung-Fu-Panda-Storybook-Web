import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../audio/SoundManager';
import { Trophy, Flame, Sparkles, Award, Utensils } from 'lucide-react';
import { Language } from '../types';
import { CartoonAvatar } from './CartoonAvatars';

interface FallingItem {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  type: 'dumpling' | 'noodle' | 'cookie' | 'peach';
  emoji: string;
  points: number;
}

interface DumplingGameProps {
  lang: Language;
}

export const DumplingGame: React.FC<DumplingGameProps> = ({ lang }) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [items, setItems] = useState<FallingItem[]>([]);
  const [combo, setCombo] = useState(0);
  const [popupText, setPopupText] = useState<{ text: string; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<FallingItem[]>([]);

  const getKungFuRank = (pts: number) => {
    if (pts >= 300) {
      return lang === 'bn'
        ? { rank: '🐉 ড্রাগন ওয়ারিয়র মাস্টার', badge: 'Dragon Warrior' }
        : { rank: '🐉 Dragon Warrior Master', badge: 'Dragon Warrior' };
    }
    if (pts >= 180) {
      return lang === 'bn'
        ? { rank: '🥋 জেড প্যালেস যোদ্ধা', badge: 'Jade Warrior' }
        : { rank: '🥋 Jade Palace Warrior', badge: 'Jade Warrior' };
    }
    if (pts >= 80) {
      return lang === 'bn'
        ? { rank: '🥢 চপস্টিক মাস্টার', badge: 'Chopstick Novice' }
        : { rank: '🥢 Chopstick Master', badge: 'Chopstick Novice' };
    }
    return lang === 'bn'
      ? { rank: '🍜 নুডল শপ শিক্ষানবিস', badge: 'Noodle Apprentice' }
      : { rank: '🍜 Noodle Shop Apprentice', badge: 'Noodle Apprentice' };
  };

  const startGame = () => {
    soundManager.playGong();
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setGameActive(true);
    setItems([]);
    itemsRef.current = [];
  };

  useEffect(() => {
    if (!gameActive) return;
    if (timeLeft <= 0) {
      setGameActive(false);
      soundManager.playWuxiBlast();
      confetti({
        particleCount: 140,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#d97706', '#10b981', '#f59e0b', '#ffffff']
      });
      if (score > highScore) {
        setHighScore(score);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, timeLeft, score, highScore]);

  useEffect(() => {
    if (!gameActive) return;

    const spawnInterval = setInterval(() => {
      if (itemsRef.current.length < 6) {
        const rand = Math.random();
        let newItem: FallingItem;

        if (rand > 0.85) {
          // Sacred Peach of Wisdom (+50 pts)
          newItem = {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: -10,
            speed: Math.random() * 2 + 2.5,
            size: 60,
            type: 'peach',
            emoji: '🍑',
            points: 50,
          };
        } else if (rand > 0.6) {
          // Secret Noodle Soup Bowl (+25 pts)
          newItem = {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: -10,
            speed: Math.random() * 2 + 2.0,
            size: 55,
            type: 'noodle',
            emoji: '🍜',
            points: 25,
          };
        } else if (rand > 0.3) {
          // Fortune Cookie (+15 pts)
          newItem = {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: -10,
            speed: Math.random() * 2 + 1.8,
            size: 48,
            type: 'cookie',
            emoji: '🥠',
            points: 15,
          };
        } else {
          // Steamed Dumpling (+10 pts)
          newItem = {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: -10,
            speed: Math.random() * 2 + 1.5,
            size: 52,
            type: 'dumpling',
            emoji: '🥟',
            points: 10,
          };
        }

        itemsRef.current = [...itemsRef.current, newItem];
        setItems(itemsRef.current);
      }
    }, 750);

    return () => clearInterval(spawnInterval);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive) return;

    let animationFrame = 0;
    let lastTimestamp = performance.now();
    const animate = (timestamp: number) => {
      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;
      itemsRef.current = itemsRef.current
        .map((item) => ({ ...item, y: item.y + item.speed * deltaSeconds * 10 }))
        .filter((item) => item.y < 105);
      setItems(itemsRef.current);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [gameActive]);

  const catchItem = (item: FallingItem, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playChopstickClick();

    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const catchphrases = [
        'SKADOOSH!',
        'NOODLE POWER!',
        'INNER PEACE!',
        'SECRET INGREDIENT!',
        'PO’S FAVORITE!'
      ];
      const text = item.type === 'peach' ? '🍑 +50 & BONUS!' : catchphrases[Math.floor(Math.random() * catchphrases.length)];
      setPopupText({ text, x, y });
      setTimeout(() => setPopupText(null), 850);
    }

    if (item.type === 'peach') {
      setTimeLeft((prev) => prev + 3); // Time bonus
      soundManager.playFluteNote(587.33);
    }

    itemsRef.current = itemsRef.current.filter((currentItem) => currentItem.id !== item.id);
    setItems(itemsRef.current);
    setScore((prev) => prev + item.points + combo * 2);
    setCombo((prev) => prev + 1);

    confetti({
      particleCount: item.type === 'peach' ? 35 : 15,
      spread: 45,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });
  };

  const currentRank = getKungFuRank(score);

  return (
    <section id="dumpling-game" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="relative rounded-3xl glass-panel border-2 border-amber-500/30 p-8 md:p-12 overflow-hidden shadow-2xl">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="flex justify-center items-center gap-4 mb-2">
            <CartoonAvatar id="shifu" size="sm" />
            <CartoonAvatar id="po" size="md" />
            <CartoonAvatar id="ping" size="sm" />
          </div>

          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-cinzel text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-400" />
            {lang === 'bn' ? 'পো ও শিফুর চপস্টিক গেম' : 'Po & Master Shifu’s Noodle Battle'}
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-slate-100">
            {lang === 'bn' ? 'কুংফু পান্ডা নুডল ও ডাম্পলিং প্রতিযোগিতা' : 'Kung Fu Panda Noodle & Dumpling Sparring'}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
            {lang === 'bn'
              ? 'চপস্টিক দিয়ে আকাশ থেকে পড়া ডাম্পলিং (🥟), নুডল স্যুপ (🍜), ও পবিত্র পিচ (🍑) ধরুন! আপনার চপস্টিক দক্ষতা প্রমাণ করুন।'
              : 'Use your chopsticks to catch falling Dumplings (🥟), Secret Noodles (🍜), and Peaches of Wisdom (🍑) mid-air!'}
          </p>
        </div>

        {/* Game Stats Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">
                {lang === 'bn' ? 'স্কোর' : 'Score'}
              </span>
              <p className="font-cinzel text-2xl md:text-3xl font-black text-amber-400">{score}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">
                {lang === 'bn' ? 'কম্বো' : 'Combo'}
              </span>
              <p className="font-cinzel text-xl md:text-2xl font-extrabold text-emerald-400">x{combo}</p>
            </div>
          </div>

          {/* Current Rank Badge */}
          <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-bold flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{currentRank.rank}</span>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">
                {lang === 'bn' ? 'অবশিষ্ট সময়' : 'Time Left'}
              </span>
              <p className="font-cinzel text-2xl md:text-3xl font-black text-rose-400">{timeLeft}s</p>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">
                  {lang === 'bn' ? 'সেরা রেকর্ড' : 'Best Record'}
                </span>
                <span className="font-extrabold text-slate-200">{highScore} pts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Playfield Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[380px] md:h-[420px] rounded-2xl bg-slate-950/90 border-2 border-slate-800 overflow-hidden cursor-crosshair flex flex-col justify-center items-center select-none"
        >
          {/* Comic Catchphrase Popup */}
          {popupText && (
            <div
              style={{ left: popupText.x, top: popupText.y }}
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 font-black text-2xl md:text-3xl text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)] animate-bounce z-30"
            >
              {popupText.text}
            </div>
          )}

          {!gameActive ? (
            <div className="text-center space-y-6 z-10 px-4 flex flex-col items-center">
              <CartoonAvatar id="po" size="lg" />
              <h3 className="font-cinzel text-2xl md:text-3xl font-extrabold text-slate-100">
                {lang === 'bn' ? 'পো ও শিফুর চপস্টিক পরীক্ষায় প্রস্তুত?' : 'Ready for Po & Master Shifu’s Test?'}
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                {lang === 'bn'
                  ? 'ডাম্পলিং ও নুডলস ধরার জন্য চপস্টিক ব্যবহার করুন এবং ড্রাগন ওয়ারিয়র র্যাঙ্ক অর্জন করুন!'
                  : 'Catch falling dumplings and noodle bowls to claim the Dragon Warrior Master Rank!'}
              </p>
              <button
                onClick={startGame}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 text-slate-950 font-black text-lg hover:brightness-110 shadow-xl shadow-amber-500/25 active:scale-95 transition-all inline-flex items-center gap-2 border-2 border-amber-300"
              >
                <Sparkles className="w-5 h-5" />
                {lang === 'bn' ? 'গেম শুরু করুন' : 'Start Noodle Battle'}
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  onPointerDown={(e) => catchItem(item, e)}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    fontSize: `${item.size}px`,
                  }}
                  className="absolute cursor-pointer touch-none transition-transform hover:scale-125 active:scale-90 animate-pulse filter drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                >
                  {item.emoji}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
