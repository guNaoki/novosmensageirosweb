import { motion, useTransform, type MotionValue } from 'framer-motion';

// =========================================================
// PEÇAS COMPARTILHADAS DA HOME
// Cópia fiel do que já existe em SpiritismPortal.tsx (que não foi alterado).
// TODO: quando a página /espiritismo for reformada, SpiritismPortal passa a importar daqui.
// =========================================================

export const LightRadianceVector = () => (
  <svg
    viewBox="0 0 1200 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85 dark:opacity-40 transition-opacity duration-500"
  >
    <defs>
      <radialGradient id="heroLightAura" cx="50%" cy="38%" r="50%">
        <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
        <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="heroRayGrad" x1="50%" y1="38%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" stopOpacity="0.65" />
        <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </linearGradient>
    </defs>

    <motion.circle
      cx="600"
      cy="230"
      r="300"
      fill="url(#heroLightAura)"
      animate={{ opacity: [0.65, 1, 0.65], scale: [0.96, 1.04, 0.96] }}
      transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ transformOrigin: '600px 230px' }}
    />

    <motion.g
      animate={{ rotate: [0, 360], opacity: [0.75, 1, 0.75] }}
      transition={{
        rotate: { duration: 180, repeat: Infinity, ease: 'linear' },
        opacity: { duration: 9, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
      }}
      style={{ transformOrigin: '600px 230px' }}
    >
      <line x1="600" y1="230" x2="220" y2="50" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
      <line x1="600" y1="230" x2="980" y2="50" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
      <line x1="600" y1="230" x2="160" y2="230" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
      <line x1="600" y1="230" x2="1040" y2="230" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
      <line x1="600" y1="230" x2="320" y2="440" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
      <line x1="600" y1="230" x2="880" y2="440" stroke="url(#heroRayGrad)" strokeWidth="1.5" />
    </motion.g>

    <motion.g
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '600px 230px' }}
    >
      <circle cx="600" cy="230" r="260" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.65" />
      <circle cx="860" cy="230" r="3.5" fill="#0369a1" opacity="0.9" />
      <circle cx="340" cy="230" r="2.5" fill="#0369a1" opacity="0.8" />
    </motion.g>

    <motion.g
      animate={{ rotate: [0, -360] }}
      transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '600px 230px' }}
    >
      <circle cx="600" cy="230" r="190" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <circle cx="600" cy="40" r="3" fill="#0369a1" opacity="0.9" />
    </motion.g>

    <motion.circle
      cx="600"
      cy="230"
      r="120"
      stroke="#0284c7"
      strokeWidth="1.5"
      animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.98, 1.02, 0.98] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ transformOrigin: '600px 230px' }}
    />
  </svg>
);

const STARS = [
  { x: '12%', y: '25%', size: 'w-1.5 h-1.5', delay: 0, duration: 4 },
  { x: '24%', y: '15%', size: 'w-1 h-1', delay: 1.2, duration: 5 },
  { x: '35%', y: '32%', size: 'w-2 h-2', delay: 0.6, duration: 4.5 },
  { x: '18%', y: '58%', size: 'w-1 h-1', delay: 2.1, duration: 6 },
  { x: '82%', y: '22%', size: 'w-2 h-2', delay: 0.8, duration: 4.2 },
  { x: '72%', y: '42%', size: 'w-1.5 h-1.5', delay: 1.8, duration: 5.5 },
  { x: '88%', y: '65%', size: 'w-1 h-1', delay: 2.5, duration: 4.8 },
  { x: '60%', y: '18%', size: 'w-1.5 h-1.5', delay: 1.5, duration: 6.2 },
  { x: '45%', y: '68%', size: 'w-1 h-1', delay: 0.4, duration: 5.1 },
  { x: '8%', y: '78%', size: 'w-1.5 h-1.5', delay: 3.0, duration: 5.8 },
  { x: '92%', y: '35%', size: 'w-1 h-1', delay: 1.1, duration: 4.4 },
  { x: '52%', y: '82%', size: 'w-1.5 h-1.5', delay: 2.3, duration: 6.5 },
];

export const PoeiraEstelarVector = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {STARS.map((star, idx) => (
      <motion.div
        key={idx}
        animate={{ opacity: [0.25, 0.95, 0.25], scale: [0.8, 1.3, 0.8] }}
        transition={{
          duration: star.duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: star.delay,
        }}
        style={{ left: star.x, top: star.y }}
        className={`absolute ${star.size} rounded-full bg-sky-500 dark:bg-sky-200 shadow-[0_0_6px_rgba(2,132,199,0.7)] dark:shadow-[0_0_8px_rgba(56,189,248,0.9)]`}
      />
    ))}
  </div>
);

// =========================================================
// ÍCONES DE MARCA
// =========================================================

export const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const TikTokIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const YouTubeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.41 0-2.8-.36-4.03-1.05l-.29-.16-3 0.79.8-2.92-.19-.3a8.19 8.19 0 0 1-1.26-4.6c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 0.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
  </svg>
);

// =========================================================
// REVELAÇÃO PALAVRA A PALAVRA COM BLUR (mesmo efeito da citação atual da Home)
// =========================================================

interface WordRevealProps {
  word: string;
  highlight?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  /** deslocamento horizontal inicial (px) para dar dinamismo; a palavra converge ao centro */
  drift?: number;
  /** blur inicial em px */
  blur?: number;
  className?: string;
}

export function WordReveal({ word, highlight, progress, range, drift = 0, blur = 4, className = '' }: WordRevealProps) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [24, 0]);
  const x = useTransform(progress, range, [drift, 0]);
  const filter = useTransform(progress, range, [`blur(${blur}px)`, 'blur(0px)']);
  const scale = useTransform(progress, range, [0.9, 1]);

  return (
    <motion.span
      style={{ opacity, y, x, filter, scale }}
      className={`inline-block select-none will-change-transform ${
        highlight
          ? 'text-primary dark:text-sky-300 font-bold drop-shadow-[0_2px_12px_rgba(2,132,199,0.2)] dark:drop-shadow-[0_2px_18px_rgba(56,189,248,0.4)]'
          : 'text-slate-900 dark:text-slate-100'
      } ${className}`}
    >
      {word}
    </motion.span>
  );
}
