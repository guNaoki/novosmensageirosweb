import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

// =========================================================
// BESPOKE ARTISTIC SVG VECTORS (Autorais & Simbólicos)
// =========================================================

const DeusVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 4" className="text-amber-500/40 dark:text-amber-400/40" />
    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.2" className="text-amber-500/60 dark:text-amber-400/60" />
    <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.5" className="text-amber-500/80 dark:text-amber-400/80" />
    <circle cx="40" cy="40" r="5" fill="currentColor" className="text-amber-500 dark:text-amber-400" />
    <path d="M40 8v8M40 64v8M8 40h8M64 40h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-amber-500 dark:text-amber-400" />
    <path d="M17.4 17.4l5.6 5.6M57 57l5.6 5.6M17.4 62.6l5.6-5.6M57 23l5.6-5.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-amber-500/60 dark:text-amber-400/60" />
  </svg>
);

const CentelhaAlmaVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-cyan-400/30" />
    <circle cx="40" cy="40" r="22" stroke="currentColor" strokeWidth="1.2" className="text-cyan-400/40" />
    <path d="M40 14c-4 9-11 16-11 24a11 11 0 0022 0c0-8-7-15-11-24z" stroke="currentColor" strokeWidth="1.5" className="text-cyan-500 dark:text-cyan-400" fill="currentColor" fillOpacity="0.15" />
    <path d="M40 24c-2 5-6 9-6 14a6 6 0 0012 0c0-5-4-9-6-14z" fill="currentColor" className="text-cyan-400 dark:text-cyan-300" fillOpacity="0.6" />
    <circle cx="40" cy="38" r="2.5" fill="currentColor" className="text-white" />
    <path d="M40 6v4M40 70v4M10 40h4M66 40h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-cyan-400/50" />
    <path d="M19 19l3 3M58 58l3 3M19 61l3-3M58 22l3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-cyan-400/40" />
  </svg>
);

const ReencarnacaoVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <path d="M40 12a28 28 0 11-20 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sky-500 dark:text-sky-400" />
    <path d="M16 20h6v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 dark:text-sky-400" />
    <path d="M40 24a16 16 0 11-11.3 4.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-sky-500/70 dark:text-sky-400/70" strokeDasharray="3 3" />
    <circle cx="40" cy="40" r="4" fill="currentColor" className="text-sky-500 dark:text-sky-300" />
  </svg>
);

const MediunidadeVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="24" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500 dark:text-emerald-400" fill="currentColor" fillOpacity="0.15" />
    <circle cx="56" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500 dark:text-emerald-400" fill="currentColor" fillOpacity="0.15" />
    <path d="M33 34c4-3 10-3 14 0M31 40c6-3 12-3 18 0M33 46c4 3 10 3 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-emerald-500/80 dark:text-emerald-400/80" />
    <path d="M12 40a28 28 0 0156 0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-emerald-500/40 dark:text-emerald-400/40" />
  </svg>
);

const MundosVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.5" className="text-purple-500 dark:text-purple-400" fill="currentColor" fillOpacity="0.1" />
    <ellipse cx="40" cy="40" rx="30" ry="10" stroke="currentColor" strokeWidth="1.2" transform="rotate(-25 40 40)" className="text-purple-500/60 dark:text-purple-400/60" strokeDasharray="4 3" />
    <circle cx="62" cy="30" r="4" fill="currentColor" className="text-purple-400 dark:text-purple-300" />
    <circle cx="20" cy="54" r="3" fill="currentColor" className="text-purple-500/60 dark:text-purple-400/60" />
    <circle cx="40" cy="16" r="2" fill="currentColor" className="text-purple-400/80 dark:text-purple-300/80" />
  </svg>
);

// =========================================================
// PRINCIPLES DATA SPECIFICATION
// =========================================================

export interface PrincipleItem {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  colorHex: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  glowClass: string;
  Icon: ({ className }: { className?: string }) => React.ReactElement;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: '01',
    step: 1,
    title: 'Existência de Deus',
    subtitle: 'Inteligência Suprema e Causa Primária',
    description: 'Deus é a inteligência suprema do universo e a causa primária de todas as coisas. Soberanamente justo e bom, rege a criação através de leis morais e naturais perfeitas que guiam todos os seres ao progresso moral infinito.',
    quote: '“A inteligência suprema do Universo, causa primária de todas as coisas.” — O Livro dos Espíritos, q. 1',
    colorHex: '#f59e0b',
    colorClass: 'text-amber-500 dark:text-amber-400',
    bgClass: 'bg-amber-500/10 dark:bg-amber-400/10',
    borderClass: 'border-amber-500/40 dark:border-amber-400/30',
    glowClass: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
    Icon: DeusVector
  },
  {
    id: '02',
    step: 2,
    title: 'Imortalidade da Alma',
    subtitle: 'Continuidade da Consciência e do Afeto',
    description: 'O espírito sobrevive à morte do corpo biológico. O mundo espiritual é a nossa pátria de origem e destino, onde a individualidade da consciência se preserva intacta e os laços do verdadeiro amor jamais se desfazem.',
    quote: '“O corpo é apenas a vestimenta temporária do espírito que caminha rumo à luz.”',
    colorHex: '#06b6d4',
    colorClass: 'text-cyan-500 dark:text-cyan-400',
    bgClass: 'bg-cyan-500/10 dark:bg-cyan-400/10',
    borderClass: 'border-cyan-500/40 dark:border-cyan-400/30',
    glowClass: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]',
    Icon: CentelhaAlmaVector
  },
  {
    id: '03',
    step: 3,
    title: 'Pluralidade das Existências',
    subtitle: 'Reencarnação e Evolução Contínua',
    description: 'A reencarnação é a lei da misericórdia divina que concede novas oportunidades de aprendizado, reparação de faltas e aquisição de virtudes. Nascer, viver, morrer e renascer ainda: tal é a lei cósmica da evolução humana.',
    quote: '“Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.”',
    colorHex: '#38bdf8',
    colorClass: 'text-sky-500 dark:text-sky-400',
    bgClass: 'bg-sky-500/10 dark:bg-sky-400/10',
    borderClass: 'border-sky-500/40 dark:border-sky-400/30',
    glowClass: 'shadow-[0_0_30px_rgba(56,189,248,0.35)]',
    Icon: ReencarnacaoVector
  },
  {
    id: '04',
    step: 4,
    title: 'Comunicabilidade dos Espíritos',
    subtitle: 'Mediunidade com Caridade e Propósito',
    description: 'O intercâmbio entre os planos visível e invisível é uma lei natural presente em toda a história humana. A mediunidade, exercida com amor, sobriedade e desinteresse, traz consolo aos corações aflitos e esclarecimento à razão.',
    quote: '“Dai de graça o que de graça recebestes. A caridade é a alma da mediunidade.”',
    colorHex: '#10b981',
    colorClass: 'text-emerald-500 dark:text-emerald-400',
    bgClass: 'bg-emerald-500/10 dark:bg-emerald-400/10',
    borderClass: 'border-emerald-500/40 dark:border-emerald-400/30',
    glowClass: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
    Icon: MediunidadeVector
  },
  {
    id: '05',
    step: 5,
    title: 'Pluralidade dos Mundos Habitados',
    subtitle: 'Habitabilidade Universal no Cosmos',
    description: 'A Terra é apenas uma entre incontáveis moradas que abrigam espíritos em diferentes graus de maturidade moral pelo cosmos. O universo infinito pulsa vida, cooperação e fraternidade em todas as dimensões da criação.',
    quote: '“Há muitas moradas na casa de meu Pai.” — Jesus (João, 14:2)',
    colorHex: '#a855f7',
    colorClass: 'text-purple-500 dark:text-purple-400',
    bgClass: 'bg-purple-500/10 dark:bg-purple-400/10',
    borderClass: 'border-purple-500/40 dark:border-purple-400/30',
    glowClass: 'shadow-[0_0_30px_rgba(168,85,247,0.35)]',
    Icon: MundosVector
  }
];

// Desktop crescent coordinates (in 240x480 SVG coordinate space)
const DESKTOP_POINTS = [
  { x: 195, y: 45 },
  { x: 110, y: 135 },
  { x: 75, y: 240 }, // Apex
  { x: 110, y: 345 },
  { x: 195, y: 435 }
];

// Mobile Mode A: Top Arch Coordinates (in 360x90 SVG space)
const MOBILE_A_POINTS = [
  { x: 45, y: 65 },
  { x: 110, y: 38 },
  { x: 180, y: 24 }, // Apex
  { x: 250, y: 38 },
  { x: 315, y: 65 }
];

// Mobile Mode B: Slim Left Crescent Coordinates (in 80x360 SVG space)
const MOBILE_B_POINTS = [
  { x: 62, y: 30 },
  { x: 38, y: 100 },
  { x: 26, y: 180 }, // Apex
  { x: 38, y: 260 },
  { x: 62, y: 330 }
];

interface CelestialArcPrinciplesProps {
  onChangeRoute: (route: string) => void;
}

export default function CelestialArcPrinciples({ onChangeRoute }: CelestialArcPrinciplesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMode, setMobileMode] = useState<'A' | 'B'>('A');

  // Track scroll progress along the 280vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // 5 clean steps mapped from 0 to 1
    const nextIndex = Math.min(4, Math.max(0, Math.floor(progress * 5)));
    setActiveIndex(nextIndex);
  });

  const activePrinciple = PRINCIPLES[activeIndex];

  // Manual jump by clicking dots or arrows
  const goToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(4, index));
    setActiveIndex(clamped);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (clamped / 4.5) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="principios"
      className="relative h-[280vh] bg-slate-50 dark:bg-[#030914] text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background static sky texture & aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/imagens-pagina/ceunuvem2.webp"
          alt="Céu cósmico"
          className="w-full h-full object-cover opacity-15 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-50 dark:to-[#030914]"></div>
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-35"></div>
      </div>

      {/* Sticky Viewport Container */}
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col justify-between py-6 sm:py-8 z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center space-y-2 shrink-0">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 sm:w-10 bg-sky-500/40"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Doutrina Espírita • Pilares Fundamentais
            </span>
            <span className="h-px w-6 sm:w-10 bg-sky-500/40"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Os 5 Princípios Básicos
          </h2>

          {/* Mobile Mode Selector (A/B Test directly in code-dev) */}
          <div className="flex md:hidden items-center justify-center gap-1.5 pt-1">
            <div className="inline-flex p-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/60 text-[10px] font-bold">
              <button
                onClick={() => setMobileMode('A')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  mobileMode === 'A'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Modo A: Arco no Topo
              </button>
              <button
                onClick={() => setMobileMode('B')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  mobileMode === 'B'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Modo B: Arco Lateral
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN SHOWCASE CONTAINER                                   */}
        {/* ========================================================= */}
        <div className="flex-grow flex items-center justify-center my-auto py-2 sm:py-4">

          {/* ------------------------------------------------------- */}
          {/* DESKTOP LAYOUT (>= md: Side-by-Side with Half-Moon Arc) */}
          {/* ------------------------------------------------------- */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-5xl mx-auto">
            
            {/* Left Col: The Celestial Half-Moon Arc (4 Cols) */}
            <div className="md:col-span-5 flex justify-center items-center relative">
              <div className="relative w-[260px] h-[480px]">
                
                {/* SVG Crescent Arc Line */}
                <svg
                  viewBox="0 0 240 480"
                  fill="none"
                  className="w-full h-full pointer-events-none drop-shadow-md"
                >
                  <defs>
                    <linearGradient id="arcGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                      <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                      <stop offset="75%" stopColor="#10b981" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>

                  {/* Outer subtle guide arc */}
                  <path
                    d="M 215,30 C 25,140 25,340 215,450"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    className="text-slate-300/60 dark:text-slate-700/60"
                  />

                  {/* Main Celestial Arc */}
                  <path
                    d="M 195,45 C 55,145 55,335 195,435"
                    stroke="url(#arcGlowGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Milestone Points */}
                  {DESKTOP_POINTS.map((pt, idx) => {
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
                          r={isCurrent ? 7 : 4}
                          fill={isPassed ? pItem.colorHex : '#94a3b8'}
                          opacity={isPassed ? 1 : 0.4}
                          className="transition-all duration-300"
                        />
                        {isCurrent && (
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={12}
                            stroke={pItem.colorHex}
                            strokeWidth="1.5"
                            fill="none"
                            opacity={0.6}
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Animated Orbital Beacon (Nó Luminoso Móvel) */}
                <motion.div
                  className="absolute w-20 h-20 -ml-10 -mt-10 rounded-full flex items-center justify-center pointer-events-none z-20"
                  animate={{
                    left: `${DESKTOP_POINTS[activeIndex].x}px`,
                    top: `${DESKTOP_POINTS[activeIndex].y}px`
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 24
                  }}
                >
                  {/* Glowing background aura */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-70 dark:opacity-90 transition-colors duration-500"
                    style={{ backgroundColor: activePrinciple.colorHex }}
                  />

                  {/* Central Glass Node Badge */}
                  <div
                    className="relative w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-2 shadow-xl flex items-center justify-center p-2.5 transition-colors duration-500"
                    style={{ borderColor: activePrinciple.colorHex }}
                  >
                    <activePrinciple.Icon className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                {/* Step indicator tags */}
                {DESKTOP_POINTS.map((pt, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => goToIndex(idx)}
                      style={{ left: `${pt.x + 22}px`, top: `${pt.y - 10}px` }}
                      className={`absolute text-[11px] font-mono font-bold transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'text-slate-900 dark:text-white font-extrabold scale-110'
                          : 'text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300'
                      }`}
                    >
                      {PRINCIPLES[idx].id}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Col: Editorial Text Reveal Card (7 Cols) */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="bg-white/90 dark:bg-[#081226]/90 backdrop-blur-md rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-8 lg:p-10 shadow-lg min-h-[360px] flex flex-col justify-between transition-all duration-300">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePrinciple.id}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    {/* Top Row: Number & Subtitle */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-white shadow-xs"
                          style={{ backgroundColor: activePrinciple.colorHex }}
                        >
                          {activePrinciple.id} / 05
                        </span>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: activePrinciple.colorHex }}
                        >
                          {activePrinciple.subtitle}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        {activeIndex + 1} de 5
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                      {activePrinciple.title}
                    </h3>

                    {/* Thin colored separator */}
                    <div
                      className="h-1 w-16 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: activePrinciple.colorHex }}
                    />

                    {/* Description Paragraph */}
                    <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                      {activePrinciple.description}
                    </p>

                    {/* Philosophical quote */}
                    <p className="text-xs sm:text-sm italic text-slate-500 dark:text-slate-400 border-l-2 pl-3 py-1 font-serif" style={{ borderColor: activePrinciple.colorHex }}>
                      {activePrinciple.quote}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Interactive Navigation & Action */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => goToIndex(activeIndex - 1)}
                      disabled={activeIndex === 0}
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                      title="Princípio Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => goToIndex(activeIndex + 1)}
                      disabled={activeIndex === 4}
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                      title="Próximo Princípio"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                    onClick={() => {
                      onChangeRoute('/recursos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs"
                  >
                    Estudar nos Recursos
                  </Button>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------- */}
          {/* MOBILE LAYOUT (< md: Supports Mode A and Mode B)        */}
          {/* ------------------------------------------------------- */}
          <div className="block md:hidden w-full">

            {/* >>> MODO A: Arco em Abóbada Superior <<< */}
            {mobileMode === 'A' && (
              <div className="space-y-3 w-full">
                
                {/* Top Celestial Arch */}
                <div className="relative w-full max-w-xs mx-auto h-[80px]">
                  <svg viewBox="0 0 360 85" fill="none" className="w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="mobileArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="25%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="75%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 30,68 C 100,20 260,20 330,68"
                      stroke="url(#mobileArcGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {MOBILE_A_POINTS.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt.x}
                        cy={pt.y}
                        r={idx === activeIndex ? 6 : 4}
                        fill={idx <= activeIndex ? PRINCIPLES[idx].colorHex : '#94a3b8'}
                        className="pointer-events-auto cursor-pointer"
                        onClick={() => goToIndex(idx)}
                      />
                    ))}
                  </svg>

                  {/* Orbital Node sliding across the arch */}
                  <motion.div
                    className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center pointer-events-none z-20"
                    animate={{
                      left: `${MOBILE_A_POINTS[activeIndex].x}px`,
                      top: `${MOBILE_A_POINTS[activeIndex].y}px`
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-xs opacity-75"
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

                {/* Content Card below */}
                <div className="bg-white/95 dark:bg-[#0B132B]/95 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 p-5 shadow-sm space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePrinciple.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: activePrinciple.colorHex }}
                        >
                          {activePrinciple.id} / 05
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider truncate max-w-[200px]"
                          style={{ color: activePrinciple.colorHex }}
                        >
                          {activePrinciple.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        {activePrinciple.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {activePrinciple.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation controls */}
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => goToIndex(activeIndex - 1)}
                        disabled={activeIndex === 0}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30"
                      >
                        Anterior
                      </button>
                      <button
                        onClick={() => goToIndex(activeIndex + 1)}
                        disabled={activeIndex === 4}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30"
                      >
                        Próximo
                      </button>
                    </div>

                    <button
                      onClick={() => onChangeRoute('/recursos')}
                      className="text-sky-600 dark:text-sky-400 font-bold"
                    >
                      Ver Recursos ➔
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* >>> MODO B: Arco Fino na Lateral Esquerda <<< */}
            {mobileMode === 'B' && (
              <div className="flex items-center gap-3 w-full">
                
                {/* Left Slim Vertical Arc */}
                <div className="relative w-[75px] h-[340px] shrink-0">
                  <svg viewBox="0 0 80 360" fill="none" className="w-full h-full pointer-events-none">
                    <path
                      d="M 62,30 C 15,95 15,265 62,330"
                      stroke="url(#mobileArcGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {MOBILE_B_POINTS.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt.x}
                        cy={pt.y}
                        r={idx === activeIndex ? 5 : 3.5}
                        fill={idx <= activeIndex ? PRINCIPLES[idx].colorHex : '#94a3b8'}
                        className="pointer-events-auto cursor-pointer"
                        onClick={() => goToIndex(idx)}
                      />
                    ))}
                  </svg>

                  {/* Orbital Beacon */}
                  <motion.div
                    className="absolute w-11 h-11 -ml-5.5 -mt-5.5 rounded-full flex items-center justify-center pointer-events-none z-20"
                    animate={{
                      left: `${MOBILE_B_POINTS[activeIndex].x}px`,
                      top: `${MOBILE_B_POINTS[activeIndex].y}px`
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-xs opacity-75"
                      style={{ backgroundColor: activePrinciple.colorHex }}
                    />
                    <div
                      className="relative w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 shadow-md flex items-center justify-center p-1"
                      style={{ borderColor: activePrinciple.colorHex }}
                    >
                      <activePrinciple.Icon className="w-full h-full object-contain" />
                    </div>
                  </motion.div>
                </div>

                {/* Right Content */}
                <div className="flex-1 bg-white/95 dark:bg-[#0B132B]/95 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 p-4 shadow-sm space-y-2.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePrinciple.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: activePrinciple.colorHex }}
                        >
                          {activePrinciple.id}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {activeIndex + 1}/5
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                        {activePrinciple.title}
                      </h3>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {activePrinciple.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <button
                      onClick={() => goToIndex(activeIndex - 1)}
                      disabled={activeIndex === 0}
                      className="px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-30"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => goToIndex(activeIndex + 1)}
                      disabled={activeIndex === 4}
                      className="px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-30"
                    >
                      →
                    </button>
                    <button
                      onClick={() => onChangeRoute('/recursos')}
                      className="text-sky-600 dark:text-sky-400 font-bold"
                    >
                      Recursos
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Footer Progress Line */}
        <div className="shrink-0 pt-2 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
              Role a página para navegar
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px]">ou clique nos números</span>
          </div>

          <div className="flex items-center gap-1.5">
            {PRINCIPLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 bg-sky-500'
                    : idx < activeIndex
                    ? 'w-2 bg-sky-300 dark:bg-sky-700'
                    : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
                title={`Ir para o princípio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
