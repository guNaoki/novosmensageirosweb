import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from 'framer-motion';
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
    colorHex: '#16a34a',
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

// =========================================================
// GEOMETRIA DA CURVA DE BÉZIER E SEGMENTOS COLORIDOS
// =========================================================

// Função analítica para avaliar qualquer ponto na curva Bézier cúbica desktop (260x520)
// P0=(50, 40), P1=(230, 150), P2=(230, 370), P3=(50, 480)
function getDesktopBezierPoint(t: number) {
  const c = Math.max(0, Math.min(1, t));
  const u = 1 - c;
  const tt = c * c;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * c;

  const x = uuu * 50 + 3 * uu * c * 230 + 3 * u * tt * 230 + ttt * 50;
  const y = uuu * 40 + 3 * uu * c * 150 + 3 * u * tt * 370 + ttt * 480;
  return { x, y };
}

// Função analítica para avaliar qualquer ponto na curva Bézier cúbica mobile (360x90)
// P0=(30, 75), P1=(100, 20), P2=(260, 20), P3=(330, 75)
function getMobileBezierPoint(t: number) {
  const c = Math.max(0, Math.min(1, t));
  const u = 1 - c;
  const tt = c * c;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * c;

  const x = uuu * 30 + 3 * uu * c * 100 + 3 * u * tt * 260 + ttt * 330;
  const y = uuu * 75 + 3 * uu * c * 20 + 3 * u * tt * 20 + ttt * 75;
  return { x, y };
}

// 5 Marcos Exatos de Parada Desktop (t = 0, 0.25, 0.5, 0.75, 1.0)
const DESKTOP_INVERTED_POINTS = [
  { x: 50.0, y: 40.0 },
  { x: 151.3, y: 139.7 },
  { x: 185.0, y: 260.0 }, // Ápice central à direita
  { x: 151.3, y: 380.3 },
  { x: 50.0, y: 480.0 }
];

// 4 Segmentos Desktop com as cores exatas de cada par de bolinhas
const DESKTOP_SEGMENTS = [
  {
    d: "M 50.0,40.0 C 95.0,67.5 128.8,101.9 151.3,139.7",
    gradId: "segGrad1"
  },
  {
    d: "M 151.3,139.7 C 173.8,177.5 185.0,218.8 185.0,260.0",
    gradId: "segGrad2"
  },
  {
    d: "M 185.0,260.0 C 185.0,301.3 173.8,342.5 151.3,380.3",
    gradId: "segGrad3"
  },
  {
    d: "M 151.3,380.3 C 128.8,418.1 95.0,452.5 50.0,480.0",
    gradId: "segGrad4"
  }
];

// 5 Marcos Exatos de Parada Mobile (t = 0, 0.25, 0.5, 0.75, 1.0)
const MOBILE_ARC_POINTS = [
  { x: 30.0, y: 75.0 },
  { x: 96.6, y: 44.1 },
  { x: 180.0, y: 33.8 }, // Ápice central superior
  { x: 263.4, y: 44.1 },
  { x: 330.0, y: 75.0 }
];

// 4 Segmentos Mobile com as cores exatas de cada par de bolinhas
const MOBILE_SEGMENTS = [
  {
    d: "M 30.0,75.0 C 47.5,61.3 70.6,50.9 96.6,44.1",
    gradId: "mobGrad1"
  },
  {
    d: "M 96.6,44.1 C 122.5,37.2 151.3,33.8 180.0,33.8",
    gradId: "mobGrad2"
  },
  {
    d: "M 180.0,33.8 C 208.8,33.8 237.5,37.2 263.4,44.1",
    gradId: "mobGrad3"
  },
  {
    d: "M 263.4,44.1 C 289.4,50.9 312.5,61.3 330.0,75.0",
    gradId: "mobGrad4"
  }
];

interface CelestialArcPrinciplesProps {
  onChangeRoute: (route: string) => void;
}

export default function CelestialArcPrinciples({ onChangeRoute }: CelestialArcPrinciplesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress along the 320vh / 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Buttery-smooth spring progress for responsive continuous tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 28,
    restDelta: 0.001
  });

  // Continuous reactive beacon positions along the cubic bezier curves
  const desktopBeaconX = useTransform(smoothProgress, (p) => {
    const pt = getDesktopBezierPoint(p);
    return `${(pt.x / 260) * 100}%`;
  });
  const desktopBeaconY = useTransform(smoothProgress, (p) => {
    const pt = getDesktopBezierPoint(p);
    return `${(pt.y / 520) * 100}%`;
  });

  const mobileBeaconX = useTransform(smoothProgress, (p) => {
    const pt = getMobileBezierPoint(p);
    return `${(pt.x / 360) * 100}%`;
  });
  const mobileBeaconY = useTransform(smoothProgress, (p) => {
    const pt = getMobileBezierPoint(p);
    return `${(pt.y / 90) * 100}%`;
  });

  // Step threshold detection centered around milestones 0, 0.25, 0.5, 0.75, 1.0
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    let idx = 0;
    if (p >= 0.875) idx = 4;
    else if (p >= 0.625) idx = 3;
    else if (p >= 0.375) idx = 2;
    else if (p >= 0.125) idx = 1;
    else idx = 0;

    setActiveIndex((prev) => (prev !== idx ? idx : prev));
  });

  const activePrinciple = PRINCIPLES[activeIndex];

  // Manual jump by clicking dots, numbers or keyboard
  const goToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(4, index));
    setActiveIndex(clamped);

    if (typeof window !== 'undefined' && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetProgress = clamped / 4; // 0, 0.25, 0.5, 0.75, 1.0
      const targetScroll = containerTop + targetProgress * scrollableDistance;
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
      className="relative h-[320vh] md:h-[400vh] bg-slate-50 dark:bg-[#030914] text-slate-900 dark:text-white transition-colors duration-500"
    >
      {/* Shared SVG Defs with Segment Gradients matching the dots */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Desktop Segment Gradients: 01 Amber -> 02 Sky -> 03 Teal -> 04 Green -> 05 Indigo */}
          <linearGradient id="segGrad1" x1="50" y1="40" x2="151.3" y2="139.7" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="segGrad2" x1="151.3" y1="139.7" x2="185" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="segGrad3" x1="185" y1="260" x2="151.3" y2="380.3" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="segGrad4" x1="151.3" y1="380.3" x2="50" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>

          {/* Mobile Segment Gradients */}
          <linearGradient id="mobGrad1" x1="30" y1="75" x2="96.6" y2="44.1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="mobGrad2" x1="96.6" y1="44.1" x2="180" y2="33.8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="mobGrad3" x1="180" y1="33.8" x2="263.4" y2="44.1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="mobGrad4" x1="263.4" y1="44.1" x2="330" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>

          <filter id="celestialAtmosphereGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background Static Sky / Canvas Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Dark Mode: Fundo Cósmico com Nuvem e Estrelas */}
        <div className="hidden dark:block absolute inset-0">
          <img
            src="/imagens-pagina/ceunuvem2.webp"
            alt="Céu celestial noturno"
            className="w-full h-full object-cover opacity-25 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/90 via-[#071328]/85 to-[#030914]/95" />
        </div>

        {/* Light Mode: Canvas Editorial Límpido, Cristalino e sem manchas embaçadas */}
        <div className="dark:hidden absolute inset-0 bg-[#f8fafc]" />
        <div className="dark:hidden absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Full-Screen Canvas Container (Sticky no Desktop e Mobile, 100% visível abaixo da Navbar) */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full flex flex-col justify-between z-10 px-4 sm:px-8 lg:px-16 py-3 sm:py-4 md:py-6 max-w-7xl mx-auto overflow-hidden">

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
        <div className="flex-grow flex items-stretch md:items-center my-auto py-2 md:py-8">

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
              <div className="relative w-[240px] lg:w-[260px] h-[480px] lg:h-[520px] max-h-[calc(100vh-10rem)] aspect-[1/2]">
                
                {/* SVG Crescent Inverted Arc Line ) */}
                <svg
                  viewBox="0 0 260 520"
                  fill="none"
                  className="w-full h-full pointer-events-none drop-shadow-md overflow-visible"
                >
                  {/* Subtle neutral background guide track */}
                  <path
                    d="M 50,40 C 230,150 230,370 50,480"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    className="text-slate-300 dark:text-slate-800"
                    strokeLinecap="round"
                  />

                  {/* 4 Colored Segments with the EXACT colors of the dots */}
                  {DESKTOP_SEGMENTS.map((seg, sIdx) => {
                    const isPassedOrCurrent = activeIndex >= sIdx;
                    return (
                      <g key={sIdx}>
                        {/* Atmosphere glow on active segments */}
                        <path
                          d={seg.d}
                          stroke={`url(#${seg.gradId})`}
                          strokeWidth="5"
                          strokeLinecap="round"
                          opacity={isPassedOrCurrent ? 0.35 : 0.15}
                          filter="url(#celestialAtmosphereGlow)"
                          className="transition-opacity duration-300"
                        />
                        {/* Main crisp line */}
                        <path
                          d={seg.d}
                          stroke={`url(#${seg.gradId})`}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          opacity={isPassedOrCurrent ? 1 : 0.35}
                          className="transition-opacity duration-300"
                        />
                      </g>
                    );
                  })}

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

                {/* Continuous Sliding Beacon along Desktop Bezier Curve */}
                <motion.div
                  className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none z-20"
                  style={{
                    left: desktopBeaconX,
                    top: desktopBeaconY
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
          <div className="block md:hidden w-full max-w-lg mx-auto flex flex-col justify-between h-full py-1">
            
            {/* Top Celestial Arch */}
            <div className="relative w-full max-w-xs mx-auto h-[90px] shrink-0 pt-1">
              <svg viewBox="0 0 360 90" fill="none" className="w-full h-full pointer-events-none overflow-visible">
                {/* Subtle base guide track */}
                <path
                  d="M 30,75 C 100,20 260,20 330,75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 5"
                  className="text-slate-300 dark:text-slate-800"
                  strokeLinecap="round"
                />

                {/* 4 Colored Segments matching the dots */}
                {MOBILE_SEGMENTS.map((seg, sIdx) => {
                  const isPassedOrCurrent = activeIndex >= sIdx;
                  return (
                    <g key={sIdx}>
                      <path
                        d={seg.d}
                        stroke={`url(#${seg.gradId})`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity={isPassedOrCurrent ? 0.35 : 0.15}
                        filter="url(#celestialAtmosphereGlow)"
                        className="transition-opacity duration-300"
                      />
                      <path
                        d={seg.d}
                        stroke={`url(#${seg.gradId})`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity={isPassedOrCurrent ? 1 : 0.35}
                        className="transition-opacity duration-300"
                      />
                    </g>
                  );
                })}

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

              {/* Continuous Sliding Beacon along Mobile Curve */}
              <motion.div
                className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none z-20"
                style={{
                  left: mobileBeaconX,
                  top: mobileBeaconY
                }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-xs opacity-70 transition-colors duration-300"
                  style={{ backgroundColor: activePrinciple.colorHex }}
                />
                <div
                  className="relative w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 shadow-md flex items-center justify-center p-1.5 transition-colors duration-300"
                  style={{ borderColor: activePrinciple.colorHex }}
                >
                  <activePrinciple.Icon className="w-full h-full object-contain" />
                </div>
              </motion.div>
            </div>

            {/* Mobile Editorial Content (Estabilizado com Altura Generosa / Sem Pulos de Layout) */}
            <div className="flex-grow flex flex-col justify-center my-auto space-y-3.5 py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-white shadow-xs"
                      style={{ backgroundColor: activePrinciple.colorHex }}
                    >
                      {activePrinciple.id} / 05
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-wider truncate max-w-[210px]"
                      style={{ color: activePrinciple.colorHex }}
                    >
                      {activePrinciple.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-[1.14]">
                    {activePrinciple.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                    {activePrinciple.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                    <blockquote className="font-serif italic text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-snug">
                      “{activePrinciple.quote}”
                    </blockquote>
                    <cite className="block mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 not-italic uppercase tracking-wider">
                      — {activePrinciple.quoteAuthor}
                    </cite>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Controls (Deck Unificado na Base da Seção - Ergonômico & Completo) */}
            <div className="shrink-0 pt-3 pb-1 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => goToIndex(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 disabled:opacity-25 font-semibold cursor-pointer active:scale-95 text-xs text-slate-700 dark:text-slate-200"
                >
                  ← Anterior
                </button>

                {/* 5 Milestone Indicator Pills no centro do deck */}
                <div className="flex items-center gap-2">
                  {PRINCIPLES.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIndex
                          ? 'w-6 shadow-xs'
                          : 'w-2 bg-slate-300 dark:bg-slate-700'
                      }`}
                      style={{
                        backgroundColor: idx === activeIndex ? p.colorHex : undefined
                      }}
                      title={`Princípio ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goToIndex(activeIndex + 1)}
                  disabled={activeIndex === 4}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 disabled:opacity-25 font-semibold cursor-pointer active:scale-95 text-xs text-slate-700 dark:text-slate-200"
                >
                  Próximo →
                </button>
              </div>

              {/* Secondary Action: Recursos Link */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                <span className="text-[11px]">Role a página para avançar</span>
                <button
                  type="button"
                  onClick={() => onChangeRoute('/recursos')}
                  className="text-sky-900 dark:text-sky-300 font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  Recursos & Obras ➔
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Desktop-Only Footer Navigation Bar */}
        <div className="hidden md:flex shrink-0 pt-4 border-t border-slate-300/80 dark:border-slate-800/80 items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200">
              {activePrinciple.title}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-[11px]">Role a página ou use as setas do teclado (← / →)</span>
          </div>

          {/* 5 Milestone Indicator Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-lg border border-slate-300/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
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
              className="p-1.5 rounded-lg border border-slate-300/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
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
