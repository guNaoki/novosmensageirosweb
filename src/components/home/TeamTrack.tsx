import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import HandDrawnAvatar, { type AvatarHair, type AvatarProp } from '../ui/HandDrawnAvatar';
import Button from '../ui/Button';

interface Member {
  role: string;
  hair: AvatarHair;
  glasses?: boolean;
  prop: AvatarProp;
  dy: number;
  depth: number;
  floatDuration: number;
}

// Papéis ultra objetivos: comunicam a função exata no primeiro olhar
const MEMBERS: Member[] = [
  { role: 'Voz dos vídeos', hair: 'short', glasses: true, prop: 'mic', dy: -10, depth: 1.15, floatDuration: 6.5 },
  { role: 'Acolhimento no WhatsApp', hair: 'long', prop: 'chat', dy: 12, depth: 1.1, floatDuration: 7.1 },
  { role: 'Edição dos vídeos', hair: 'bun', glasses: true, prop: 'play', dy: -12, depth: 1.2, floatDuration: 6.9 },
  { role: 'Cortes de palestras', hair: 'cap', prop: 'headphones', dy: 10, depth: 1.0, floatDuration: 8.0 },
  { role: 'Criação dos posts', hair: 'long', prop: 'pencil', dy: -8, depth: 0.9, floatDuration: 7.4 },
  { role: 'Site e tecnologia', hair: 'short', glasses: true, prop: 'laptop', dy: 11, depth: 0.95, floatDuration: 7.8 },
];

interface TeamTrackProps {
  onChangeRoute?: (route: string) => void;
}

/** Balãozinho de fala perto do círculo do avatar */
function AvatarBubble({ role }: { role: string }) {
  return (
    <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-8 z-20 pointer-events-none md:drop-shadow-md">
      <div className="relative bg-white/95 dark:bg-slate-900/95 border border-sky-300 dark:border-sky-400/50 text-slate-800 dark:text-slate-100 font-sans font-semibold text-xs sm:text-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-2xl whitespace-nowrap flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
        <span>{role}</span>
        {/* Rabicho do balãozinho apontando para o círculo do avatar */}
        <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white dark:bg-slate-900 border-b border-r border-sky-300 dark:border-sky-400/50 rotate-45" />
      </div>
    </div>
  );
}

function AvatarItem({
  m,
  progress,
  isDesktop,
}: {
  m: Member;
  progress: MotionValue<number>;
  index: number;
  isDesktop: boolean;
}) {
  const px = useTransform(progress, [0, 1], [(m.depth - 1) * 220, (1 - m.depth) * 220]);
  const size = m.depth > 1.1 ? 'w-36 sm:w-64' : m.depth < 0.95 ? 'w-28 sm:w-48' : 'w-32 sm:w-56';
  const marginTop = isDesktop ? `${m.dy}vh` : `${m.dy * 0.25}vh`;

  return (
    <motion.div
      style={{ x: isDesktop ? px : 0, marginTop }}
      className="shrink-0 px-4 sm:px-14 flex flex-col items-center"
    >
      <div
        style={{ animationDuration: `${m.floatDuration}s` }}
        className={`relative flex flex-col items-center ${isDesktop ? 'animate-float-subtle will-change-transform' : ''}`}
      >
        {/* Balãozinho indicativo */}
        <AvatarBubble role={m.role} />

        {/* Círculo do avatar solto */}
        <HandDrawnAvatar
          hair={m.hair}
          glasses={m.glasses}
          prop={m.prop}
          className={`${size} md:drop-shadow-[0_10px_24px_rgba(2,132,199,0.18)] dark:md:drop-shadow-[0_10px_28px_rgba(56,189,248,0.22)]`}
        />
      </div>
    </motion.div>
  );
}

export default function TeamTrack({ onChangeRoute }: TeamTrackProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const lineProgress = useTransform(scrollYProgress, [0.02, 0.95], [0, 1]);

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
            <div key={m.role} className="flex flex-col items-center relative">
              <AvatarBubble role={m.role} />
              <HandDrawnAvatar hair={m.hair} glasses={m.glasses} prop={m.prop} className="w-32" />
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
      style={{ height: dist ? `calc(100vh + ${dist}px)` : '340vh' }}
      className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-sky-50/70 to-slate-50 dark:from-slate-950 dark:via-[#07172f] dark:to-slate-950" />

        <motion.div ref={trackRef} style={{ x }} className="relative flex items-center w-max will-change-transform">
          {/* Linha pontilhada no desktop */}
          <svg
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-[40vh] pointer-events-none text-sky-400/40 dark:text-sky-300/25"
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
          <div className="shrink-0 w-[84vw] sm:w-[48vw] px-5 sm:px-16 relative">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-3">
              Quem faz acontecer
            </p>
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
              Gente de verdade,{' '}
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">sem rosto e sem nome.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Por segurança e discrição, ficamos no anonimato. O que importa é a mensagem de esperança chegar a quem precisa.
            </p>
          </div>

          {MEMBERS.map((m, i) => (
            <AvatarItem key={m.role} m={m} index={i} progress={scrollYProgress} isDesktop={isDesktop} />
          ))}

          {/* Encerramento com CTA de Voluntariado */}
          <div className="shrink-0 w-[84vw] sm:w-[44vw] px-5 sm:px-16 relative flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-3">
              Uma só missão
            </p>
            <h3 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              +{SOCIAL_STATS.volunteersCount} voluntários,{' '}
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">uma só missão: acolher.</span>
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Um trabalho fraterno, gratuito e sigiloso. Se você sente o chamado de servir no acolhimento digital, venha conosco.
            </p>
            {onChangeRoute && (
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onChangeRoute('/resgate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Conhecer o Projeto de Resgate
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

