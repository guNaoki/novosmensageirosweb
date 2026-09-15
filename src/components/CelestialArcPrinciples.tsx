import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

// =========================================================
// BESPOKE ARTISTIC SVG VECTORS (Autorais & Simbólicos)
// =========================================================

const DeusVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 4" className="text-amber-600/50 dark:text-amber-400/40" />
    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.4" className="text-amber-600/70 dark:text-amber-400/60" />
    <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.6" className="text-amber-600/90 dark:text-amber-400/80" />
    <circle cx="40" cy="40" r="5" fill="currentColor" className="text-amber-600 dark:text-amber-400" />
    <path d="M40 8v8M40 64v8M8 40h8M64 40h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-amber-600 dark:text-amber-400" />
    <path d="M17.4 17.4l5.6 5.6M57 57l5.6 5.6M17.4 62.6l5.6-5.6M57 23l5.6-5.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-amber-600/70 dark:text-amber-400/60" />
  </svg>
);

const CentelhaAlmaVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" className="text-sky-600/40 dark:text-cyan-400/30" />
    <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.4" className="text-sky-600/60 dark:text-cyan-400/40" />
    <path d="M40 14c-4 9-11 16-11 24a11 11 0 0022 0c0-8-7-15-11-24z" stroke="currentColor" strokeWidth="1.6" className="text-sky-600 dark:text-cyan-400" fill="currentColor" fillOpacity="0.18" />
    <path d="M40 24c-2 5-6 9-6 14a6 6 0 0012 0c0-5-4-9-6-14z" fill="currentColor" className="text-sky-500 dark:text-cyan-300" fillOpacity="0.7" />
    <circle cx="40" cy="38" r="2.5" fill="currentColor" className="text-white" />
    <path d="M40 6v4M40 70v4M10 40h4M66 40h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-sky-600/60 dark:text-cyan-400/50" />
    <path d="M19 19l3 3M58 58l3 3M19 61l3-3M58 22l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-sky-600/50 dark:text-cyan-400/40" />
  </svg>
);

const ReencarnacaoVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <path d="M40 12a28 28 0 11-20 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-teal-600 dark:text-teal-400" />
    <path d="M16 20h6v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 dark:text-teal-400" />
    <path d="M40 24a16 16 0 11-11.3 4.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-teal-600/80 dark:text-teal-400/70" strokeDasharray="3 3" />
    <circle cx="40" cy="40" r="4" fill="currentColor" className="text-teal-600 dark:text-teal-300" />
  </svg>
);

const MediunidadeVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="24" cy="40" r="8" stroke="currentColor" strokeWidth="1.6" className="text-emerald-600 dark:text-emerald-400" fill="currentColor" fillOpacity="0.18" />
    <circle cx="56" cy="40" r="8" stroke="currentColor" strokeWidth="1.6" className="text-emerald-600 dark:text-emerald-400" fill="currentColor" fillOpacity="0.18" />
    <path d="M33 34c4-3 10-3 14 0M31 40c6-3 12-3 18 0M33 46c4 3 10 3 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-400" />
    <path d="M12 40a28 28 0 0156 0" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 4" className="text-emerald-600/50 dark:text-emerald-400/40" />
  </svg>
);

const MundosVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.6" className="text-indigo-600 dark:text-indigo-400" fill="currentColor" fillOpacity="0.15" />
    <ellipse cx="40" cy="40" rx="30" ry="10" stroke="currentColor" strokeWidth="1.4" transform="rotate(-25 40 40)" className="text-indigo-600/70 dark:text-indigo-400/60" strokeDasharray="4 3" />
    <circle cx="62" cy="30" r="4.5" fill="currentColor" className="text-indigo-600 dark:text-indigo-300" />
    <circle cx="20" cy="54" r="3.5" fill="currentColor" className="text-indigo-600/70 dark:text-indigo-400/60" />
    <circle cx="40" cy="16" r="2.5" fill="currentColor" className="text-indigo-600/90 dark:text-indigo-300/80" />
  </svg>
);

// =========================================================
// PRINCIPLES DATA SPECIFICATION (Paleta Nobre & Clássica)
// =========================================================

export interface PrincipleItem {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  colorHex: string;
  Icon: ({ className }: { className?: string }) => React.ReactElement;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: '01',
    step: 1,
    title: 'Existência de Deus',
    subtitle: 'Inteligência Suprema e Causa Primária',
    description: 'Deus é a inteligência suprema do universo e a causa primária de todas as coisas. Soberanamente justo e bom, rege a criação através de leis morais e naturais perfeitas que guiam todos os seres ao progresso moral infinito.',
    quote: 'A inteligência suprema do Universo, causa primária de todas as coisas.',
    quoteAuthor: 'Allan Kardec — O Livro dos Espíritos, questão 1',
    colorHex: '#d97706',
    Icon: DeusVector
  },
  {
    id: '02',
    step: 2,
    title: 'Imortalidade da Alma',
    subtitle: 'Continuidade da Consciência e do Afeto',
    description: 'O espírito sobrevive à morte do corpo biológico. O mundo espiritual é a nossa pátria de origem e destino, onde a individualidade da consciência se preserva intacta e os laços do verdadeiro amor jamais se desfazem.',
    quote: 'O espírito sobrevive à matéria: a morte nada mais é que o retorno à nossa verdadeira pátria.',
    quoteAuthor: 'Allan Kardec — O Céu e o Inferno',
    colorHex: '#0284c7',
    Icon: CentelhaAlmaVector
  },
  {
    id: '03',
    step: 3,
    title: 'Pluralidade das Existências',
    subtitle: 'Reencarnação e Evolução Contínua',
    description: 'A reencarnação é a lei da misericórdia divina que concede novas oportunidades de aprendizado, reparação de faltas e aquisição de virtudes. Nascer, viver, morrer e renascer ainda: tal é a lei cósmica da evolução humana.',
    quote: 'Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.',
    quoteAuthor: 'Allan Kardec — Epígrafe no Cemitério Père-Lachaise',
    colorHex: '#0d9488',
    Icon: ReencarnacaoVector
  },
  {
    id: '04',
    step: 4,
    title: 'Comunicabilidade dos Espíritos',
    subtitle: 'Mediunidade com Caridade e Propósito',
    description: 'O intercâmbio entre os planos visível e invisível é uma lei natural presente em toda a história humana. A mediunidade, exercida com amor, sobriedade e desinteresse, traz consolo aos corações aflitos e esclarecimento à razão.',
    quote: 'Dai de graça o que de graça recebestes. A caridade é a alma da verdadeira mediunidade.',
    quoteAuthor: 'Allan Kardec — O Livro dos Médiuns',
    colorHex: '#15803d',
    Icon: MediunidadeVector
  },
  {
    id: '05',
    step: 5,
    title: 'Pluralidade dos Mundos Habitados',
    subtitle: 'Habitabilidade Universal no Cosmos',
    description: 'A Terra é apenas uma entre incontáveis moradas que abrigam espíritos em diferentes graus de maturidade moral pelo cosmos. O universo infinito pulsa vida, cooperação e fraternidade em todas as dimensões da criação divina.',
    quote: 'Há muitas moradas na casa de meu Pai. O Universo é a oficina infinita da criação.',
    quoteAuthor: 'Jesus (João, 14:2) / Allan Kardec',
    colorHex: '#4338ca',
    Icon: MundosVector
  }
];

// Desktop Inverted Crescent Coordinates ) (in 260x520 SVG space)
// Curvatura monumental para a direita: d="M 50,40 C 230,150 230,370 50,480"
const DESKTOP_INVERTED_POINTS = [
  { x: 50, y: 40 },
  { x: 151, y: 140 },
  { x: 185, y: 260 }, // Ápice à direita
  { x: 151, y: 380 },
  { x: 50, y: 480 }
];

// Mobile Arc Coordinates (in 360x90 SVG space)
const MOBILE_ARC_POINTS = [
  { x: 45, y: 68 },
  { x: 110, y: 38 },
  { x: 180, y: 25 }, // Ápice central
  { x: 250, y: 38 },
  { x: 315, y: 68 }
];

interface CelestialArcPrinciplesProps {
  onChangeRoute: (route: string) => void;
}

export default function CelestialArcPrinciples({ onChangeRoute }: CelestialArcPrinciplesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress along the 400vh desktop container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // 5 clean steps mapped com amplo dwell time (platô de permanência de 20% cada)
    const nextIndex = Math.min(4, Math.max(0, Math.floor(progress * 4.999)));
    setActiveIndex(nextIndex);
  });

  const activePrinciple = PRINCIPLES[activeIndex];

  // Manual jump by clicking dots, numbers or keyboard
  const goToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(4, index));
    setActiveIndex(clamped);

    // Only scroll window on desktop where 400vh sticky scroll is active
    if (typeof window !== 'undefined' && window.innerWidth >= 768 && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (clamped / 4.2) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // Keyboard navigation listener (← / → ou ↑ / ↓)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Only react if section is currently visible in viewport
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          if (activeIndex < 4) {
            e.preventDefault();
            goToIndex(activeIndex + 1);
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          if (activeIndex > 0) {
            e.preventDefault();
            goToIndex(activeIndex - 1);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      id="principios"
      className="relative py-14 sm:py-20 md:py-0 md:h-[400vh] bg-slate-100 dark:bg-[#030914] text-slate-900 dark:text-white transition-colors duration-500"
    >
      {/* Global Shared SVG Defs for High-Contrast Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="celestialGradInverted" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="25%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="75%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="celestialGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="25%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="75%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <filter id="celestialAtmosphereGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background Static Sky Texture com ALTO CONTRASTE no Modo Claro (85% opacidade) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/imagens-pagina/ceunuvem2.webp"
          alt="Céu celestial nítido"
          className="w-full h-full object-cover opacity-85 dark:opacity-25 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/85 via-blue-50/70 to-slate-100/90 dark:from-[#030914]/90 dark:via-[#071328]/85 dark:to-[#030914]/95"></div>
      </div>

      {/* Full-Screen Canvas Container (Sticky no Desktop abaixo da Navbar fixa, Natural no Mobile) */}
      <div className="relative md:sticky md:top-16 lg:top-[4.5rem] h-auto md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-4.5rem)] w-full flex flex-col justify-between z-10 px-4 sm:px-8 lg:px-16 py-4 md:py-6 max-w-7xl mx-auto">

        {/* Section Top Eyebrow */}
        <div className="flex items-center justify-between shrink-0 border-b border-slate-300/80 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full transition-colors duration-500 shadow-xs"
              style={{ backgroundColor: activePrinciple.colorHex }}
            />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-sky-900 dark:text-sky-300">
              Doutrina Espírita • Pilares Fundamentais
            </span>
          </div>

          <div className="text-xs sm:text-sm font-serif font-bold text-slate-700 dark:text-slate-300">
            {activePrinciple.id} <span className="text-slate-400">/ 05</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN IMMERSIVE SHOWCASE (Zero Cards Fechados)             */}
        {/* ========================================================= */}
        <div className="flex-grow flex items-center my-auto py-6 sm:py-8">

          {/* ------------------------------------------------------- */}
          {/* DESKTOP LAYOUT (>= md: Editorial à Esquerda, Arco à Direita) */}
          {/* ------------------------------------------------------- */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            
            {/* Lado Esquerdo (60%): Tipografia Editorial Nobre */}
            <div className="md:col-span-7 flex flex-col justify-center pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.id}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 text-left"
                >
                  {/* Subtitle with active color accent */}
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-white shadow-xs"
                      style={{ backgroundColor: activePrinciple.colorHex }}
                    >
                      {activePrinciple.id}
                    </span>
                    <span
                      className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-500"
                      style={{ color: activePrinciple.colorHex }}
                    >
                      {activePrinciple.subtitle}
                    </span>
                  </div>

                  {/* Monumental Headline in Playfair Display serif */}
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.12]">
                    {activePrinciple.title}
                  </h3>

                  {/* High-Contrast Description Paragraph */}
                  <p className="text-lg lg:text-xl text-slate-800 dark:text-slate-200 font-normal leading-relaxed max-w-2xl">
                    {activePrinciple.description}
                  </p>

                  {/* Kardec Quote in Traditional Editorial Typography (SEM borda lateral clichê) */}
                  <div className="pt-4 border-t border-slate-300/80 dark:border-slate-800/90 max-w-2xl">
                    <blockquote className="font-serif italic text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-snug">
                      “{activePrinciple.quote}”
                    </blockquote>
                    <cite className="block mt-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 not-italic uppercase">
                      — {activePrinciple.quoteAuthor}
                    </cite>
                  </div>

                  {/* Action Link to Resources Portal */}
                  <div className="pt-2 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconRight={<ArrowRight className="w-4 h-4 ml-1.5" />}
                      onClick={() => {
                        onChangeRoute('/recursos');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-sm font-bold text-sky-900 dark:text-sky-300 hover:text-sky-950 dark:hover:text-white pl-0"
                    >
                      Estudar nos Recursos & Obras Básicas
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Lado Direito (40%): O Grande Arco Orbital Invertido ) */}
            <div className="md:col-span-5 flex justify-center items-center relative">
              <div className="relative w-[260px] h-[520px]">
                
                {/* SVG Crescent Inverted Arc Line ) */}
                <svg
                  viewBox="0 0 260 520"
                  fill="none"
                  className="w-full h-full pointer-events-none drop-shadow-md overflow-visible"
                >
                  {/* Subtle outer guide track */}
                  <path
                    d="M 40,30 C 250,140 250,380 40,490"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    className="text-slate-400/50 dark:text-slate-700/60"
                  />

                  {/* Main solid track arc in deep navy */}
                  <path
                    d="M 50,40 C 230,150 230,370 50,480"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="text-slate-300 dark:text-slate-800"
                  />

                  {/* Main Celestial Inverted Arc (Vibrant Gradient) */}
                  <path
                    d="M 50,40 C 230,150 230,370 50,480"
                    stroke="url(#celestialGradInverted)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.4"
                    filter="url(#celestialAtmosphereGlow)"
                  />
                  <path
                    d="M 50,40 C 230,150 230,370 50,480"
                    stroke="url(#celestialGradInverted)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* 5 Milestone Astronomy Points */}
                  {DESKTOP_INVERTED_POINTS.map((pt, idx) => {
                    const isPassed = idx <= activeIndex;
                    const isCurrent = idx === activeIndex;
                    const pItem = PRINCIPLES[idx];

                    return (
                      <g
                        key={idx}
                        className="cursor-pointer pointer-events-auto transition-transform hover:scale-125"
                        onClick={() => goToIndex(idx)}
                      >
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isCurrent ? 7.5 : 4.5}
                          fill={isPassed ? pItem.colorHex : '#94a3b8'}
                          className="transition-all duration-300"
                        />
                        {isCurrent && (
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={15}
                            stroke={pItem.colorHex}
                            strokeWidth="1.6"
                            fill="none"
                            opacity={0.7}
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Animated Orbital Beacon (Astro-Guia com Porcentagem no Arco Invertido) */}
                <motion.div
                  className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none z-20"
                  animate={{
                    left: `${(DESKTOP_INVERTED_POINTS[activeIndex].x / 260) * 100}%`,
                    top: `${(DESKTOP_INVERTED_POINTS[activeIndex].y / 520) * 100}%`
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24
                  }}
                >
                  {/* Atmospheric Glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-60 dark:opacity-80 transition-colors duration-500"
                    style={{ backgroundColor: activePrinciple.colorHex }}
                  />

                  {/* Glass Orb Badge with Authentic Symbol */}
                  <div
                    className="relative w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-2 shadow-xl flex items-center justify-center p-2.5 transition-colors duration-500"
                    style={{ borderColor: activePrinciple.colorHex }}
                  >
                    <activePrinciple.Icon className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                {/* Step indicator tags */}
                {DESKTOP_INVERTED_POINTS.map((pt, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToIndex(idx)}
                      style={{
                        left: `${((pt.x + 24) / 260) * 100}%`,
                        top: `${((pt.y - 10) / 520) * 100}%`
                      }}
                      className={`absolute text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'text-slate-950 dark:text-white font-extrabold scale-110'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {PRINCIPLES[idx].id}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------- */}
          {/* MOBILE LAYOUT (< md: Experiência Vertical Integrada)    */}
          {/* ------------------------------------------------------- */}
          <div className="block md:hidden w-full max-w-lg mx-auto space-y-6">
            
            {/* Top Celestial Arch */}
            <div className="relative w-full max-w-xs mx-auto h-[90px]">
              <svg viewBox="0 0 360 90" fill="none" className="w-full h-full pointer-events-none overflow-visible">
                <path
                  d="M 30,75 C 100,20 260,20 330,75"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-slate-300 dark:text-slate-800"
                />
                <path
                  d="M 30,75 C 100,20 260,20 330,75"
                  stroke="url(#celestialGradH)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.4"
                  filter="url(#celestialAtmosphereGlow)"
                />
                <path
                  d="M 30,75 C 100,20 260,20 330,75"
                  stroke="url(#celestialGradH)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Milestone Dots */}
                {MOBILE_ARC_POINTS.map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.x}
                    cy={pt.y}
                    r={idx === activeIndex ? 6.5 : 4}
                    fill={idx <= activeIndex ? PRINCIPLES[idx].colorHex : '#94a3b8'}
                    className="pointer-events-auto cursor-pointer"
                    onClick={() => goToIndex(idx)}
                  />
                ))}
              </svg>

              {/* Orbital Beacon (Astro-Guia Mobile) */}
              <motion.div
                className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none z-20"
                animate={{
                  left: `${(MOBILE_ARC_POINTS[activeIndex].x / 360) * 100}%`,
                  top: `${(MOBILE_ARC_POINTS[activeIndex].y / 90) * 100}%`
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-xs opacity-70"
                  style={{ backgroundColor: activePrinciple.colorHex }}
                />
                <div
                  className="relative w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 shadow-md flex items-center justify-center p-1.5"
                  style={{ borderColor: activePrinciple.colorHex }}
                >
                  <activePrinciple.Icon className="w-full h-full object-contain" />
                </div>
              </motion.div>
            </div>

            {/* Mobile Editorial Content (Touch Swipeable) */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) {
                  goToIndex(activeIndex + 1);
                } else if (info.offset.x > 40) {
                  goToIndex(activeIndex - 1);
                }
              }}
              className="text-left space-y-4 touch-pan-y"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-white shadow-xs"
                      style={{ backgroundColor: activePrinciple.colorHex }}
                    >
                      {activePrinciple.id} / 05
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-wider truncate max-w-[220px]"
                      style={{ color: activePrinciple.colorHex }}
                    >
                      {activePrinciple.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-slate-950 dark:text-white leading-tight">
                    {activePrinciple.title}
                  </h3>

                  <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                    {activePrinciple.description}
                  </p>

                  <div className="pt-2 border-t border-slate-300/80 dark:border-slate-800/80">
                    <blockquote className="font-serif italic text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      “{activePrinciple.quote}”
                    </blockquote>
                    <cite className="block mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 not-italic uppercase">
                      — {activePrinciple.quoteAuthor}
                    </cite>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Controls */}
              <div className="pt-4 border-t border-slate-300/80 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 disabled:opacity-30 font-semibold cursor-pointer active:scale-95"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => goToIndex(activeIndex + 1)}
                    disabled={activeIndex === 4}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 disabled:opacity-30 font-semibold cursor-pointer active:scale-95"
                  >
                    Próximo →
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onChangeRoute('/recursos')}
                  className="text-sky-900 dark:text-sky-300 font-bold hover:underline cursor-pointer"
                >
                  Recursos ➔
                </button>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Footer Navigation Bar */}
        <div className="shrink-0 pt-4 border-t border-slate-300/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="hidden md:flex items-center gap-2">
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200">
              {activePrinciple.title}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-[11px]">Role a página ou use as setas do teclado (← / →)</span>
          </div>

          <div className="flex md:hidden items-center gap-1.5 text-[11px] text-slate-500">
            <span>Deslize na horizontal ou use os botões</span>
          </div>

          {/* 5 Milestone Indicator Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="hidden md:flex p-1.5 rounded-lg border border-slate-300/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Princípio Anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {PRINCIPLES.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-7 shadow-xs'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                }`}
                style={{
                  backgroundColor: idx === activeIndex ? p.colorHex : undefined
                }}
                title={`Princípio ${idx + 1}: ${p.title}`}
              />
            ))}

            <button
              type="button"
              onClick={() => goToIndex(activeIndex + 1)}
              disabled={activeIndex === 4}
              className="hidden md:flex p-1.5 rounded-lg border border-slate-300/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Próximo Princípio"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
