import React from 'react';

interface CartoonAvatarProps {
  id: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const CartoonAvatar: React.FC<CartoonAvatarProps> = ({ id, className = '', size = 'md', animated = true }) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-20 h-20 text-4xl',
    lg: 'w-32 h-32 text-6xl',
    xl: 'w-48 h-48 text-8xl',
  }[size];

  const animationClass = animated ? 'hover:scale-110 transition-all duration-300 transform' : '';

  switch (id) {
    case 'po':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-400 p-3 shadow-xl shadow-amber-900/30 border-4 border-amber-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="46" fill="#f59e0b" opacity="0.3" className="animate-pulse" />
            <circle cx="24" cy="22" r="14" fill="#0f172a" />
            <circle cx="76" cy="22" r="14" fill="#0f172a" />
            <ellipse cx="50" cy="52" rx="36" ry="32" fill="#ffffff" />
            <ellipse cx="36" cy="48" rx="11" ry="14" fill="#0f172a" transform="rotate(-12 36 48)" />
            <ellipse cx="64" cy="48" rx="11" ry="14" fill="#0f172a" transform="rotate(12 64 48)" />
            <circle cx="37" cy="47" r="4" fill="#10b981" />
            <circle cx="38" cy="46" r="1.5" fill="#ffffff" />
            <circle cx="63" cy="47" r="4" fill="#10b981" />
            <circle cx="62" cy="46" r="1.5" fill="#ffffff" />
            <ellipse cx="50" cy="58" rx="6" ry="4" fill="#0f172a" />
            <path d="M 40 66 Q 50 76 60 66" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M 16 34 Q 50 24 84 34" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="84" cy="34" r="3" fill="#f59e0b" />
          </svg>
        </div>
      );

    case 'shifu':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-900 via-amber-700 to-amber-500 p-3 shadow-xl border-4 border-amber-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="12,38 32,10 38,40" fill="#c2410c" />
            <polygon points="18,34 30,16 34,36" fill="#ffedd5" />
            <polygon points="88,38 68,10 62,40" fill="#c2410c" />
            <polygon points="82,34 70,16 66,36" fill="#ffedd5" />
            <ellipse cx="50" cy="52" rx="34" ry="28" fill="#ea580c" />
            <ellipse cx="50" cy="56" rx="26" ry="20" fill="#ffedd5" />
            <path d="M 24 38 Q 36 30 46 44" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 76 38 Q 64 30 54 44" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="36" cy="48" r="4" fill="#047857" />
            <circle cx="64" cy="48" r="4" fill="#047857" />
            <ellipse cx="50" cy="54" rx="4" ry="3" fill="#451a03" />
            <path d="M 40 64 L 28 76 M 60 64 L 72 76" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'oogway':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-900 via-teal-700 to-emerald-500 p-3 shadow-xl border-4 border-emerald-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="42" fill="#065f46" stroke="#047857" strokeWidth="4" />
            <path d="M 30 30 L 70 30 L 80 50 L 70 70 L 30 70 L 20 50 Z" fill="#047857" opacity="0.4" />
            <ellipse cx="50" cy="45" rx="20" ry="24" fill="#10b981" />
            <ellipse cx="42" cy="42" rx="3" ry="4" fill="#064e3b" />
            <ellipse cx="58" cy="42" rx="3" ry="4" fill="#064e3b" />
            <path d="M 38 36 Q 42 32 46 36" stroke="#ec4899" strokeWidth="2" fill="none" />
            <path d="M 54 36 Q 58 32 62 36" stroke="#ec4899" strokeWidth="2" fill="none" />
            <path d="M 42 54 Q 50 60 58 54" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 30 68 C 40 60 60 60 70 68 L 74 90 L 26 90 Z" fill="#99f6e4" />
          </svg>
        </div>
      );

    case 'tigress':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-rose-800 via-amber-700 to-amber-500 p-3 shadow-xl border-4 border-amber-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="20,26 36,12 40,32" fill="#d97706" />
            <polygon points="80,26 64,12 60,32" fill="#d97706" />
            <ellipse cx="50" cy="52" rx="34" ry="30" fill="#f59e0b" />
            <ellipse cx="50" cy="60" rx="20" ry="16" fill="#fef3c7" />
            <path d="M 50 24 L 50 34 M 40 28 L 44 36 M 60 28 L 56 36" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 22 46 L 30 48 M 78 46 L 70 48" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <polygon points="30,42 42,46 32,52" fill="#0f172a" />
            <circle cx="36" cy="46" r="2.5" fill="#facc15" />
            <polygon points="70,42 58,46 68,52" fill="#0f172a" />
            <circle cx="64" cy="46" r="2.5" fill="#facc15" />
            <polygon points="46,58 54,58 50,63" fill="#be123c" />
            <path d="M 44 68 Q 50 64 56 68" stroke="#0f172a" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'tailung':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-800 p-3 shadow-xl border-4 border-sky-600 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="44" fill="#38bdf8" opacity="0.2" className="animate-pulse" />
            <polygon points="18,30 32,14 38,36" fill="#64748b" />
            <polygon points="82,30 68,14 62,36" fill="#64748b" />
            <ellipse cx="50" cy="52" rx="34" ry="30" fill="#94a3b8" />
            <ellipse cx="50" cy="60" rx="22" ry="16" fill="#f1f5f9" />
            <circle cx="28" cy="38" r="3" fill="#334155" />
            <circle cx="72" cy="38" r="3" fill="#334155" />
            <ellipse cx="36" cy="46" rx="6" ry="5" fill="#0284c7" />
            <ellipse cx="36" cy="46" rx="2" ry="4" fill="#f0f9ff" />
            <ellipse cx="64" cy="46" rx="6" ry="5" fill="#0284c7" />
            <ellipse cx="64" cy="46" rx="2" ry="4" fill="#f0f9ff" />
            <path d="M 40 64 Q 50 56 60 64" stroke="#0f172a" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'shen':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-rose-950 via-rose-900 to-rose-700 p-3 shadow-xl border-4 border-rose-500 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 10 60 Q 50 10 90 60 Z" fill="#fff1f2" stroke="#be123c" strokeWidth="3" />
            <circle cx="24" cy="36" r="4" fill="#be123c" />
            <circle cx="50" cy="20" r="4" fill="#be123c" />
            <circle cx="76" cy="36" r="4" fill="#be123c" />
            <ellipse cx="50" cy="50" rx="16" ry="24" fill="#ffffff" />
            <polygon points="50,56 42,68 58,68" fill="#e11d48" />
            <circle cx="44" cy="46" r="3.5" fill="#9f1239" />
            <circle cx="56" cy="46" r="3.5" fill="#9f1239" />
          </svg>
        </div>
      );

    case 'kai':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-700 p-3 shadow-xl border-4 border-emerald-500 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 30 40 Q 10 20 6 4" stroke="#10b981" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 70 40 Q 90 20 94 4" stroke="#10b981" strokeWidth="8" strokeLinecap="round" fill="none" />
            <ellipse cx="50" cy="54" rx="28" ry="26" fill="#1f2937" />
            <ellipse cx="50" cy="64" rx="18" ry="12" fill="#374151" />
            <ellipse cx="38" cy="48" rx="5" ry="4" fill="#34d399" />
            <ellipse cx="62" cy="48" rx="5" ry="4" fill="#34d399" />
            <circle cx="50" cy="70" r="7" stroke="#f59e0b" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'chameleon':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-950 via-purple-800 to-indigo-700 p-3 shadow-xl border-4 border-purple-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="42" fill="#a855f7" opacity="0.25" className="animate-spin-slow" />
            <path d="M 24 60 C 24 30 76 30 76 60 Z" fill="#06b6d4" />
            <circle cx="38" cy="46" r="8" fill="#d946ef" />
            <circle cx="38" cy="46" r="4" fill="#facc15" />
            <circle cx="62" cy="46" r="8" fill="#d946ef" />
            <circle cx="62" cy="46" r="4" fill="#facc15" />
          </svg>
        </div>
      );

    case 'zhen':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-800 via-amber-600 to-amber-400 p-3 shadow-xl border-4 border-amber-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="16,34 32,10 40,36" fill="#c2410c" />
            <polygon points="22,30 32,16 36,34" fill="#ffffff" />
            <polygon points="84,34 68,10 60,36" fill="#c2410c" />
            <polygon points="78,30 68,16 64,34" fill="#ffffff" />
            <polygon points="22,44 78,44 50,80" fill="#ea580c" />
            <polygon points="34,44 66,44 50,74" fill="#ffffff" />
            <ellipse cx="38" cy="46" rx="4" ry="5" fill="#451a03" />
            <ellipse cx="62" cy="46" rx="4" ry="5" fill="#451a03" />
            <circle cx="50" cy="74" r="3.5" fill="#0f172a" />
          </svg>
        </div>
      );

    case 'ping':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-teal-900 via-teal-700 to-emerald-500 p-3 shadow-xl border-4 border-teal-400 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 32 30 C 24 16 76 16 68 30 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="34" y="28" width="32" height="10" fill="#ffffff" />
            <ellipse cx="50" cy="54" rx="20" ry="24" fill="#f8fafc" />
            <polygon points="50,56 36,66 64,66" fill="#f97316" />
            <circle cx="42" cy="48" r="3" fill="#0f172a" />
            <circle cx="58" cy="48" r="3" fill="#0f172a" />
          </svg>
        </div>
      );

    case 'lishan':
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-600 p-3 shadow-xl border-4 border-amber-500 ${sizeClasses} ${animationClass} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="20" cy="26" r="14" fill="#0f172a" />
            <circle cx="80" cy="26" r="14" fill="#0f172a" />
            <ellipse cx="50" cy="54" rx="38" ry="32" fill="#ffffff" />
            <ellipse cx="34" cy="50" rx="12" ry="14" fill="#0f172a" transform="rotate(-15 34 50)" />
            <ellipse cx="66" cy="50" rx="12" ry="14" fill="#0f172a" transform="rotate(15 66 50)" />
            <circle cx="35" cy="49" r="4" fill="#f59e0b" />
            <circle cx="65" cy="49" r="4" fill="#f59e0b" />
            <path d="M 38 66 Q 50 78 62 66" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center rounded-3xl bg-slate-900 border-2 border-amber-500/40 ${sizeClasses} ${className}`}>
          <span>🥋</span>
        </div>
      );
  }
};
