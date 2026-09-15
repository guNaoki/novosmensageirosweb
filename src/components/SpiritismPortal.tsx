import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../data/stats';
import {
  Heart,
  ArrowRight,
  ExternalLink,
  Compass as CompassIcon,
  ShieldAlert,
} from 'lucide-react';
import Button from './ui/Button';
import CelestialArcPrinciples from './CelestialArcPrinciples';

// =========================================================
// BESPOKE ARTISTIC SVG VECTORS (Autorais e Nobres)
// =========================================================

const LightRadianceVector = () => (
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

    {/* 1. Aura Central Ectoplasmática (Respiração Suave) */}
    <motion.circle
      cx="600"
      cy="230"
      r="300"
      fill="url(#heroLightAura)"
      animate={{
        opacity: [0.65, 1, 0.65],
        scale: [0.96, 1.04, 0.96],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: '600px 230px' }}
    />

    {/* 2. Feixes de Luz Radiais com rotação suave e pulso de luminosidade */}
    <motion.g
      animate={{
        rotate: [0, 360],
        opacity: [0.75, 1, 0.75],
      }}
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

    {/* 3. Anel Celestial Externo Pontilhado (Rotação Horária com pontos orbitais bem evidentes) */}
    <motion.g
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '600px 230px' }}
    >
      <circle cx="600" cy="230" r="260" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.65" />
      <circle cx="860" cy="230" r="3.5" fill="#0369a1" opacity="0.9" />
      <circle cx="340" cy="230" r="2.5" fill="#0369a1" opacity="0.8" />
    </motion.g>

    {/* 4. Anel Intermediário Pontilhado (Rotação Anti-Horária Oposta) */}
    <motion.g
      animate={{ rotate: [0, -360] }}
      transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '600px 230px' }}
    >
      <circle cx="600" cy="230" r="190" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <circle cx="600" cy="40" r="3" fill="#0369a1" opacity="0.9" />
    </motion.g>

    {/* 5. Anel Interno Focado (Pulso Suave de Respiração) */}
    <motion.circle
      cx="600"
      cy="230"
      r="120"
      stroke="#0284c7"
      strokeWidth="1.5"
      animate={{
        opacity: [0.45, 0.75, 0.45],
        scale: [0.98, 1.02, 0.98],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: '600px 230px' }}
    />
  </svg>
);

const PoeiraEstelarVector = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[
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
    ].map((star, idx) => (
      <motion.div
        key={idx}
        animate={{
          opacity: [0.25, 0.95, 0.25],
          scale: [0.8, 1.3, 0.8],
        }}
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
// SCROLL-DRIVEN TEXT REVEAL: CITAÇÃO ALLAN KARDEC
// =========================================================

interface WordRevealProps {
  word: string;
  highlight?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}

function WordReveal({ word, highlight, progress, range }: WordRevealProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [12, 0]);
  const filter = useTransform(progress, range, ['blur(4px)', 'blur(0px)']);
  const scale = useTransform(progress, range, [0.94, 1]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter,
        scale,
      }}
      className={`inline-block transition-colors duration-300 select-none ${
        highlight
          ? 'text-primary dark:text-sky-300 font-bold drop-shadow-[0_2px_12px_rgba(2,132,199,0.2)] dark:drop-shadow-[0_2px_18px_rgba(56,189,248,0.4)]'
          : 'text-slate-900 dark:text-slate-100'
      }`}
    >
      {word}
    </motion.span>
  );
}

function KardecQuoteReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'center 0.45'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 26 });

  const totalWords = 6;
  const getWordRange = (idx: number): [number, number] => {
    const start = (idx / totalWords) * 0.7;
    const end = Math.min(1, start + (1 / totalWords) * 0.95);
    return [start, end];
  };

  // Linha 1 no mobile: "Fora da caridade" (17 caracteres)
  const line1 = [
    { text: 'Fora', highlight: false, globalIdx: 0, range: getWordRange(0) },
    { text: 'da', highlight: false, globalIdx: 1, range: getWordRange(1) },
    { text: 'caridade', highlight: true, globalIdx: 2, range: getWordRange(2) },
  ];

  // Linha 2 no mobile: "não há salvação." (16 caracteres)
  const line2 = [
    { text: 'não', highlight: false, globalIdx: 3, range: getWordRange(3) },
    { text: 'há', highlight: false, globalIdx: 4, range: getWordRange(4) },
    { text: 'salvação.', highlight: true, globalIdx: 5, range: getWordRange(5) },
  ];

  const quoteOpacity = useTransform(smoothProgress, [0, 0.25], [0.1, 0.45]);
  const quoteScale = useTransform(smoothProgress, [0, 0.3], [0.85, 1.05]);
  const citeOpacity = useTransform(smoothProgress, [0.72, 1], [0, 1]);
  const lineScale = useTransform(smoothProgress, [0.72, 1], [0.1, 1]);

  return (
    <section
      ref={containerRef}
      id="frase-kardec"
      className="py-24 sm:py-32 md:py-40 bg-slate-50/80 dark:bg-[#040d1f] relative z-10 transition-colors duration-500 text-center overflow-hidden border-y border-slate-200/50 dark:border-slate-800/60"
    >
      {/* Luz ambiente central suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="relative flex flex-col items-center justify-center">
          <motion.span
            style={{ opacity: quoteOpacity, scale: quoteScale }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl text-sky-600 dark:text-sky-300 leading-none select-none mb-3 block"
          >
            “
          </motion.span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.26] italic px-2 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-y-1.5 md:gap-x-3.5">
            {/* Linha 1 no mobile: "Fora da caridade" */}
            <span className="inline-flex items-center justify-center gap-x-2 sm:gap-x-3 whitespace-nowrap">
              {line1.map((w) => (
                <WordReveal
                  key={w.globalIdx}
                  word={w.text}
                  highlight={w.highlight}
                  progress={smoothProgress}
                  range={w.range}
                />
              ))}
            </span>

            {/* Linha 2 no mobile: "não há salvação." */}
            <span className="inline-flex items-center justify-center gap-x-2 sm:gap-x-3 whitespace-nowrap">
              {line2.map((w) => (
                <WordReveal
                  key={w.globalIdx}
                  word={w.text}
                  highlight={w.highlight}
                  progress={smoothProgress}
                  range={w.range}
                />
              ))}
            </span>
          </blockquote>

          <motion.div
            style={{ opacity: citeOpacity }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400"
          >
            <motion.span
              style={{ scaleX: lineScale }}
              className="h-px w-10 sm:w-16 bg-slate-300 dark:bg-slate-700 origin-right"
            />
            <cite className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase not-italic text-slate-700 dark:text-slate-300">
              Allan Kardec
            </cite>
            <motion.span
              style={{ scaleX: lineScale }}
              className="h-px w-10 sm:w-16 bg-slate-300 dark:bg-slate-700 origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SpiritismPortalProps {
  onChangeRoute: (route: string) => void;
}

export default function SpiritismPortal({ onChangeRoute }: SpiritismPortalProps) {
  const [activeSection, setActiveSection] = useState('hero');

  // Consume any cross-page navigation scroll target on mount
  useEffect(() => {
    const targetId = sessionStorage.getItem('navScrollTarget');
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 6;

    const tryScroll = () => {
      attempts++;
      const el = document.getElementById(targetId);
      if (el) {
        const navbarOffset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        
        if (attempts >= 3) {
          sessionStorage.removeItem('navScrollTarget');
          return;
        }
      }
      
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 150);
      } else {
        sessionStorage.removeItem('navScrollTarget');
      }
    };

    const timer = setTimeout(tryScroll, 180);
    return () => clearTimeout(timer);
  }, []);

  // Active section spy for Desktop Left Sidebar Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'hero',
        'frase-kardec',
        'principios',
        'nossa-historia',
        'fale-conosco',
        'amor-ideal'
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'frase-kardec', label: 'Caridade' },
    { id: 'principios', label: '5 Princípios' },
    { id: 'nossa-historia', label: 'História' },
    { id: 'fale-conosco', label: 'Fale Conosco' },
    { id: 'amor-ideal', label: 'Parceiros' }
  ];

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  // Custom Instagram brand icon
  const Instagram = ({ className = "w-5 h-5" }: { className?: string }) => (
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

  // Custom TikTok brand icon (official Simple Icons path)
  const TikTok = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  // Custom YouTube brand icon
  const YouTube = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  // WhatsApp Icon SVG
  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.41 0-2.8-.36-4.03-1.05l-.29-.16-3 0.79.8-2.92-.19-.3a8.19 8.19 0 0 1-1.26-4.6c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 0.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );

  // Helper to extract clean metric numbers without placeholder labels
  const getCleanNumber = (val: string) => {
    return val.split(' - ')[0].trim();
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">

      {/* ========================================================= */}
      {/* SUMÁRIO LATERAL DESKTOP MINIMALISTA (Left Quick Nav) */}
      {/* ========================================================= */}
      <aside
        className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-start space-y-2 pointer-events-auto select-none"
        aria-label="Sumário da Página"
      >
        <div className="flex flex-col items-center space-y-3 py-3 px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-2.5 focus:outline-none cursor-pointer text-left"
                title={item.label}
              >
                {/* Minimal dot / active pill */}
                <div
                  className={`transition-all duration-300 rounded-full ${isActive
                      ? 'w-2.5 h-6 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                      : 'w-2 h-2 bg-slate-400/40 dark:bg-slate-600/60 group-hover:bg-sky-400/70 group-hover:scale-125'
                    }`}
                />

                {/* Text Label on hover or active */}
                <span
                  className={`text-[11px] font-bold tracking-tight transition-all duration-200 whitespace-nowrap drop-shadow-sm ${isActive
                      ? 'text-sky-500 dark:text-sky-300 opacity-100 translate-x-0'
                      : 'text-slate-500 dark:text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none'
                    }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>


      {/* ========================================================= */}
      {/* 1. HERO SECTION (Full-Width Contemplativo & Editorial)     */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 text-slate-900 dark:text-white overflow-hidden bg-gradient-to-b from-sky-100/90 via-blue-50/70 to-slate-100/90 dark:from-[#06152e]/95 dark:via-[#081b3a]/80 dark:to-[#040d1f] transition-colors duration-300"
      >
        {/* Static Cloud Background Image com Alto Contraste no Modo Claro */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/imagens-pagina/ceunuvem1.webp"
            alt="Fundo celestial sereno"
            className="w-full h-full object-cover object-center opacity-38 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-slate-100/80 dark:from-[#06152e]/70 dark:via-transparent dark:to-[#040d1f]"></div>
        </div>

        {/* Bespoke Artistic Light Radiance Vector */}
        <LightRadianceVector />

        {/* Ethereal Stardust Constellation Particles */}
        <PoeiraEstelarVector />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            {/* Main Editorial Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto text-balance"
            >
              Novos Mensageiros: <br />
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">
                Luz e Acolhimento
              </span> nas redes digitais.
            </motion.h1>

            {/* Editorial Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Levamos os ensinamentos da Doutrina Espírita de forma leve, profunda e acolhedora. Um farol de escuta e amparo para quem busca respostas e paz para a alma.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              {/* WhatsApp Button */}
              <Button
                variant="whatsapp"
                size="md"
                as="a"
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20receber%20acolhimento%20e%20conversa%20fraterna."
                target="_blank"
                iconLeft={<WhatsAppIcon className="w-4 h-4 fill-white" />}
              >
                Falar no WhatsApp (Acolhimento)
              </Button>

              {/* Projeto de Resgate CTA */}
              <Button
                variant="secondary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  onChangeRoute('/resgate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Conhecer o Projeto de Resgate
              </Button>

              {/* Casas Espíritas & Livros Gratuitos CTA */}
              <Button
                variant="outline"
                size="md"
                iconLeft={<CompassIcon className="w-4 h-4 text-sky-500" />}
                onClick={() => {
                  onChangeRoute('/recursos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Casas Espíritas & Livros Gratuitos
              </Button>
            </motion.div>

            {/* Authentic Channels Showcase (Linha Minimalista) */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 max-w-3xl mx-auto w-full"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/novosmensageiros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-pink-500 dark:hover:text-pink-400 transition-colors group cursor-pointer"
                  title="Instagram @novosmensageiros"
                >
                  <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="font-bold text-pink-600 dark:text-pink-400">+{SOCIAL_STATS.instagramFollowers}</strong> seguidores
                  </span>
                </a>

                <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none">•</span>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@novosmensageiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group cursor-pointer"
                  title="TikTok @novosmensageiros"
                >
                  <TikTok className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="font-bold text-slate-900 dark:text-white">{getCleanNumber(SOCIAL_STATS.tiktokViews)}</strong> visualizações
                  </span>
                </a>

                <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none">•</span>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@NovosMensageiros/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors group cursor-pointer"
                  title="YouTube Shorts Novos Mensageiros"
                >
                  <YouTube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="font-bold text-slate-900 dark:text-white">Canal Oficial</strong>
                  </span>
                </a>
              </div>

              {/* Reassurance note */}
              <p className="mt-3 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 text-center">
                Uma ponte viva de escuta fraterna gratuita, sigilosa e sem julgamentos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CITAÇÃO ALLAN KARDEC (Scroll-Driven Text Reveal)         */}
      {/* ========================================================= */}
      <KardecQuoteReveal />

      {/* ========================================================= */}
      {/* 3. OS 5 PRINCÍPIOS BÁSICOS (Arco Celestial Sticky Scroll) */}
      {/* ========================================================= */}
      <CelestialArcPrinciples onChangeRoute={onChangeRoute} />


      {/* ========================================================= */}
      {/* 6. NOSSA HISTÓRIA & PROPÓSITO (Linha do Tempo Conectada)   */}
      {/* ========================================================= */}
      <section
        id="nossa-historia"
        className="py-14 sm:py-20 md:py-24 scroll-mt-20 sm:scroll-mt-24 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A história por trás dos Novos Mensageiros
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Como um canal de divulgação da Doutrina Espírita nas redes sociais deparou-se com a urgência de acolher e salvar vidas no silêncio dos comentários digitais.
            </p>
          </div>

          {/* Connected Sequential Journey Flow */}
          <div className="relative mb-12">
            {/* Desktop continuous connector line */}
            <div className="hidden md:block absolute top-7 left-16 right-16 h-0.5 bg-gradient-to-r from-sky-400/20 via-sky-500/40 to-sky-400/20 z-0"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left relative z-10"
            >
              {/* Step 1 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-[#0B132B]/85 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-sky-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-sky-500 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      01
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20">
                      <CompassIcon className="w-4 h-4 text-sky-500" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                      O Começo
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sementes Digitais</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    O projeto nasceu com a missão de semear consolo, esperança e paz através de reflexões diárias da Doutrina Espírita no Instagram e TikTok.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-[#0B132B]/85 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-rose-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-rose-500 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      02
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                      <ShieldAlert className="w-4 h-4 text-rose-500" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                      O Chamado
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">A Ponta do Iceberg</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Ao viralizarmos conteúdos sobre o vazio da alma e a depressão, os comentários revelaram um pedido de socorro silencioso de centenas de pessoas em sofrimento profundo.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-[#0B132B]/85 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      03
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <Heart className="w-4 h-4 fill-emerald-500/20 text-emerald-500" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                      A Ação
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">A Corrente de Resgate</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Criamos uma operação de busca ativa e escuta fraterna para identificar desabafos, dar suporte imediato via WhatsApp e encaminhar para atendimento especializado.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              variant="secondary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                onChangeRoute('/historia');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Conhecer Toda a Nossa Trajetória
            </Button>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* 8. FALE CONOSCO (Atendimento Fraterno & WhatsApp)         */}
      {/* ========================================================= */}
      <section
        id="fale-conosco"
        className="py-14 sm:py-20 scroll-mt-20 sm:scroll-mt-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 text-center space-y-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-2 border border-emerald-500/20">
                <WhatsAppIcon className="w-6 h-6 fill-emerald-600 dark:fill-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Fale Conosco no WhatsApp
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Precisa de uma conversa fraterna, apoio emocional ou esclarecimento sobre a Doutrina Espírita? Nossa equipe de voluntários está disponível para te ouvir com carinho, respeito e discrição.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2 max-w-md mx-auto">
              <Button
                variant="whatsapp"
                size="lg"
                as="a"
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20equipe%20dos%20Novos%20Mensageiros."
                target="_blank"
                className="w-full text-sm sm:text-base py-3.5"
                iconLeft={<WhatsAppIcon className="w-4 h-4 fill-white" />}
              >
                Conversar no WhatsApp (Atendimento Fraterno)
              </Button>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Sigilo e Discrição</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Acolhimento Sem Julgamentos</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 9. RECRUITING CALL TO ACTION (Transição para Resgate) */}
      {/* ========================================================= */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden border-t border-slate-800">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-5 pointer-events-none">
          <Heart className="w-96 h-96 fill-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Quer fazer a diferença conosco voluntariamente?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed font-normal">
            Se você deseja doar um pouco do seu tempo nas redes sociais para mapear dores e salvar vidas, seja como voluntário digital, Psicólogo parceiro ou Casa Espírita, conheça o nosso <strong className="font-extrabold text-white">Projeto de Resgate</strong>.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              onClick={() => {
                onChangeRoute('/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Conhecer o Projeto de Resgate
            </Button>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 10. PROJETOS PARCEIROS (Amor Ideal & Mei Mei) */}
      {/* ========================================================= */}
      <section
        id="amor-ideal"
        className="py-14 sm:py-20 scroll-mt-20 sm:scroll-mt-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Amor Ideal e Centro Espírita Mei Mei
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Iniciativas parceiras dedicadas à fraternidade, acolhimento espiritual e disseminação de amor ativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-14 flex items-center">
                  <div className="bg-white dark:bg-[#080E21] p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs inline-flex items-center justify-center">
                    <img
                      src="/amorideal.webp"
                      alt="Projeto Amor Ideal"
                      className="h-9 w-auto object-contain max-w-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Projeto Amor Ideal</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Uma obra dedicada ao amparo fraterno, fortalecimento de laços de afeto e promoção da caridade ativa na sociedade.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <a
                  href="https://www.amorideal.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                >
                  Conhecer o Projeto Amor Ideal
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-14 flex items-center">
                  <div className="bg-white dark:bg-[#080E21] p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs inline-flex items-center justify-center">
                    <img
                      src="/meimei.webp"
                      alt="Centro Espírita Mei Mei"
                      className="h-9 w-auto object-contain max-w-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Centro Espírita Mei Mei</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Instituição dedicada ao estudo espírita, palestras consoladoras, passe e trabalhos assistenciais inspirados no espírito Mei Mei.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <a
                  href="https://www.centroespiritameimei.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                >
                  Visitar Centro Espírita Mei Mei
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
