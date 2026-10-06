import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import HandDrawnAvatar, { type AvatarHair, type AvatarProp } from '../ui/HandDrawnAvatar';
import Button from '../ui/Button';

interface Member {
  role: string;
  badge: string;
  description: string;
  hair: AvatarHair;
  glasses?: boolean;
  prop: AvatarProp;
  dy: number;
  depth: number;
  floatDuration: number;
}

// Papéis humanizados com descrição de propósito e acolhimento
const MEMBERS: Member[] = [
  {
    role: 'A Voz dos Vídeos',
    badge: 'Gravação Diária',
    description: 'Grava diariamente mensagens consoladoras para quem acorda sem esperança no peito.',
    hair: 'short',
    glasses: true,
    prop: 'mic',
    dy: -3,
    depth: 1.1,
    floatDuration: 6.5,
  },
  {
    role: 'Plantão Fraterno',
    badge: 'Madrugada',
    description: 'Atende no WhatsApp com escuta atenta, ouvindo angústias sem pressa e sem julgamento.',
    hair: 'long',
    prop: 'chat',
    dy: 4,
    depth: 1.05,
    floatDuration: 7.1,
  },
  {
    role: 'Curadoria Espírita',
    badge: 'Estudo & Obras',
    description: 'Garimpa palestras e textos de Kardec para transformar a filosofia em alívio prático.',
    hair: 'cap',
    prop: 'headphones',
    dy: -4,
    depth: 0.95,
    floatDuration: 8,
  },
  {
    role: 'Edição & Ritmo',
    badge: 'Audiovisual',
    description: 'Dá harmonia, música e sensibilidade aos cortes para que a mensagem toque a alma.',
    hair: 'bun',
    glasses: true,
    prop: 'play',
    dy: 3,
    depth: 1.15,
    floatDuration: 6.9,
  },
  {
    role: 'Arte & Poesia Visual',
    badge: 'Feed & Mensagens',
    description: 'Desenha ilustrações e frases de luz para alimentar a fé de quem rola o feed apressadamente.',
    hair: 'long',
    prop: 'pencil',
    dy: -3,
    depth: 0.9,
    floatDuration: 7.4,
  },
  {
    role: 'Código & Refúgio',
    badge: 'Infraestrutura',
    description: 'Mantém este portal seguro, rápido e com livros gratuitos para qualquer pessoa baixar.',
    hair: 'short',
    glasses: true,
    prop: 'laptop',
    dy: 3,
    depth: 1.0,
    floatDuration: 7.8,
  },
];

interface TeamTrackProps {
  onChangeRoute?: (route: string) => void;
}

function AvatarCardItem({
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
  // Parallax suave apenas em telas maiores para preservar FPS em celulares
  const px = useTransform(progress, [0, 1], [(m.depth - 1) * 120, (1 - m.depth) * 120]);
  const marginTop = isDesktop ? `${m.dy}vh` : `${m.dy * 0.25}vh`;

  return (
    <motion.div
      style={{ x: isDesktop ? px : 0, marginTop }}
      className="shrink-0 px-3 sm:px-5 flex flex-col items-center"
    >
      <motion.div
        animate={isDesktop ? { y: [0, -8, 0] } : undefined}
        transition={
          isDesktop
            ? { duration: m.floatDuration, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }
            : undefined
        }
        className="w-[78vw] max-w-[285px] sm:max-w-[310px] sm:w-[310px] p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-sky-500/20 shadow-xl shadow-sky-950/5 dark:shadow-black/40 hover:border-sky-400/60 transition-all duration-300 flex flex-col items-center text-center group"
      >
        {/* Topo do Card */}
        <div className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-400 mb-4">
          <span className="uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
            0{index + 1} • {m.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ativo
          </span>
        </div>

        {/* Avatar com Halo Lúmico */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-b from-sky-100/80 via-blue-50/40 to-white/40 dark:from-sky-950/70 dark:via-slate-900/60 dark:to-slate-950/40 border border-sky-200/70 dark:border-sky-400/20 flex items-center justify-center p-2 mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner">
          <HandDrawnAvatar
            hair={m.hair}
            glasses={m.glasses}
            prop={m.prop}
            className="w-full h-full text-sky-500 dark:text-sky-300"
          />
        </div>

        {/* Papel do Voluntário */}
        <h4 className="font-serif italic font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
          {m.role}
        </h4>

        {/* Descrição Humana */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal min-h-[3rem]">
          {m.description}
        </p>

        {/* Rodapé do Card */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 w-full text-[11px] text-slate-400 dark:text-slate-400 flex items-center justify-center gap-1 italic">
          <span>✦ Sem vaidade, só amor</span>
        </div>
      </motion.div>
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
          Sem holofotes. <span className="font-serif italic font-normal text-primary dark:text-sky-300">Só caridade.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {MEMBERS.map((m) => (
            <div key={m.role} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center">
              <HandDrawnAvatar hair={m.hair} glasses={m.glasses} prop={m.prop} className="w-24 mb-3" />
              <h4 className="font-serif italic text-lg font-bold text-slate-900 dark:text-white">{m.role}</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 text-center">{m.description}</p>
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

        <motion.div ref={trackRef} style={{ x }} className="relative flex items-center w-max transform-gpu will-change-transform">
          {/* Linha orgânica no desktop */}
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
          <div className="shrink-0 w-[84vw] sm:w-[46vw] px-5 sm:px-16 relative">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-3">
              O amor em ação
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] text-balance">
              Sem holofotes.{' '}
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">Só caridade.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Por trás das redes, dezenas de voluntários doam suas madrugadas, dons e tempo para acolher dores reais. Não exibimos rostos porque o que cura não é o mensageiro — é a mensagem.
            </p>
          </div>

          {MEMBERS.map((m, i) => (
            <AvatarCardItem key={m.role} m={m} index={i} progress={scrollYProgress} isDesktop={isDesktop} />
          ))}

          {/* Encerramento com CTA de Voluntariado */}
          <div className="shrink-0 w-[84vw] sm:w-[44vw] px-5 sm:px-16 relative flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-3">
              Uma só missão
            </p>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
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

