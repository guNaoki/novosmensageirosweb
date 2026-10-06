import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import HandDrawnAvatar, { type AvatarHair, type AvatarProp } from '../ui/HandDrawnAvatar';

interface Member {
  role: string;
  hair: AvatarHair;
  glasses?: boolean;
  prop: AvatarProp;
  /** deslocamento vertical (vh) para a trilha ficar orgânica, não em fileira */
  dy: number;
  /** "profundidade": >1 = mais perto (maior, se move mais rápido) */
  depth: number;
  floatDuration: number;
}

// Só papéis, sem nomes. Para incluir mais gente basta adicionar uma linha.
const MEMBERS: Member[] = [
  { role: 'Vídeos falados', hair: 'short', glasses: true, prop: 'mic', dy: -8, depth: 1.15, floatDuration: 6.5 },
  { role: 'Posts estáticos', hair: 'long', prop: 'pencil', dy: 14, depth: 0.85, floatDuration: 7.4 },
  { role: 'Cortes de palestras', hair: 'cap', prop: 'headphones', dy: -14, depth: 1, floatDuration: 8 },
  { role: 'Edição de vídeo', hair: 'bun', glasses: true, prop: 'play', dy: 10, depth: 1.2, floatDuration: 6.9 },
  { role: 'Site e tecnologia', hair: 'short', glasses: true, prop: 'laptop', dy: -10, depth: 0.9, floatDuration: 7.8 },
  { role: 'Acolhimento no WhatsApp', hair: 'long', prop: 'chat', dy: 12, depth: 1.1, floatDuration: 7.1 },
];

function AvatarItem({
  m,
  progress,
  index,
  isDesktop,
}: {
  m: Member;
  progress: MotionValue<number>;
  index: number;
  isDesktop: boolean;
}) {
  // Parallax extra apenas no desktop para evitar recomposição contínua no mobile
  const px = useTransform(progress, [0, 1], [(m.depth - 1) * 220, (1 - m.depth) * 220]);
  const size = m.depth > 1.1 ? 'w-44 sm:w-72' : m.depth < 0.95 ? 'w-32 sm:w-52' : 'w-36 sm:w-60';
  const marginTop = isDesktop ? `${m.dy}vh` : `${m.dy * 0.35}vh`;

  return (
    <motion.div
      style={{ x: isDesktop ? px : 0, marginTop }}
      className="shrink-0 px-4 sm:px-12 flex flex-col items-center"
    >
      <motion.div
        animate={isDesktop ? { y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] } : undefined}
        transition={
          isDesktop
            ? { duration: m.floatDuration, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }
            : undefined
        }
        className="flex flex-col items-center"
      >
        <HandDrawnAvatar
          hair={m.hair}
          glasses={m.glasses}
          prop={m.prop}
          className={`${size} md:drop-shadow-[0_10px_24px_rgba(2,132,199,0.18)] dark:md:drop-shadow-[0_10px_28px_rgba(56,189,248,0.22)]`}
        />
        <span className="mt-3 sm:mt-4 font-serif italic text-sm sm:text-xl text-slate-700 dark:text-slate-200 text-center max-w-[12rem] sm:max-w-[14rem]">
          {m.role}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function TeamTrack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const lineProgress = useTransform(scrollYProgress, [0.02, 0.95], [0, 1]);

  // Distância horizontal real a percorrer = largura do trilho - largura da tela.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      setDist(Math.max(0, el.scrollWidth - window.innerWidth));
      setIsDesktop(window.innerWidth >= 768);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  if (reduce) {
    return (
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Gente de verdade, <span className="font-serif italic font-normal text-primary dark:text-sky-300">sem rosto e sem nome.</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {MEMBERS.map((m) => (
            <div key={m.role} className="flex flex-col items-center">
              <HandDrawnAvatar hair={m.hair} glasses={m.glasses} prop={m.prop} className="w-32" />
              <span className="mt-3 font-serif italic text-slate-700 dark:text-slate-200">{m.role}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="equipe"
      style={{ height: dist ? `calc(100vh + ${dist}px)` : '400vh' }}
      className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-sky-50/70 to-slate-50 dark:from-slate-950 dark:via-[#07172f] dark:to-slate-950" />

        <motion.div ref={trackRef} style={{ x }} className="relative flex items-center w-max transform-gpu will-change-transform">
          {/* Linha orgânica apenas no desktop (no mobile causa re-rasterização contínua com SVG dash) */}
          <svg
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-[40vh] pointer-events-none text-sky-400/50 dark:text-sky-300/30"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M0 50 C80 10, 140 90, 220 50 S360 10, 440 55 S580 95, 660 48 S800 8, 880 52 S960 80, 1000 50"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="1 9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: lineProgress }}
            />
          </svg>

          {/* Abertura */}
          <div className="shrink-0 w-[84vw] sm:w-[52vw] px-5 sm:px-16 relative">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-4">
              Quem faz isso acontecer
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] text-balance">
              Gente de verdade,{' '}
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">sem rosto e sem nome.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md">
              Por segurança, ficamos no anonimato. O que importa é a mensagem.
            </p>
          </div>

          {MEMBERS.map((m, i) => (
            <AvatarItem key={m.role} m={m} index={i} progress={scrollYProgress} isDesktop={isDesktop} />
          ))}

          {/* Encerramento */}
          <div className="shrink-0 w-[84vw] sm:w-[46vw] px-5 sm:px-16 relative">
            <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              {SOCIAL_STATS.volunteersCount} voluntários,{' '}
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">uma só missão.</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
