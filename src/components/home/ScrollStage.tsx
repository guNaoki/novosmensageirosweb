import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import { STAGE_VIDEOS, type StageVideo } from '../../data/stageVideos';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PoeiraEstelarVector } from './shared';

// Posições no perímetro (laterais, cantos e bordas), deixando o centro 100% livre para os textos.
const SLOTS = [
  { left: 16, top: 28, rot: -6, w: 'w-[28vw] sm:w-[13.5vw]' },
  { left: 84, top: 26, rot: 5, w: 'w-[28vw] sm:w-[13.5vw]' },
  { left: 12, top: 68, rot: 4, w: 'w-[26vw] sm:w-[12.5vw]' },
  { left: 88, top: 66, rot: -5, w: 'w-[26vw] sm:w-[12.5vw]' },
  { left: 28, top: 16, rot: -2, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 72, top: 18, rot: 3, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 26, top: 80, rot: 3, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 74, top: 80, rot: -3, w: 'w-[24vw] sm:w-[11.5vw]' },
];

interface StageCardProps {
  video: StageVideo;
  slot: (typeof SLOTS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

/** Card que surge por trás, vai para a frente em float state contínuo e sem símbolo do Instagram. */
function StageCard({ video, slot, index, total, progress }: StageCardProps) {
  const start = 0.12 + (index / total) * 0.18;
  const land = start + 0.16;
  const dx = (50 - slot.left) * 0.7;
  const dy = (50 - slot.top) * 0.7;

  const x = useTransform(progress, [start, land, 0.74, 0.90], [`${dx}vw`, '0vw', '0vw', `${(slot.left - 50) * 0.7}vw`]);
  const y = useTransform(progress, [start, land, 0.74, 0.90], [`${dy}vh`, '0vh', '0vh', `${(slot.top - 50) * 0.7}vh`]);
  const scale = useTransform(progress, [start, land, 0.74, 0.90], [0.35, 1, 1, 1.2]);
  const opacity = useTransform(progress, [start, start + 0.08, 0.78, 0.92], [0, 1, 1, 0]);

  // Float state: flutuação orgânica contínua
  const floatDuration = 4.8 + (index % 3) * 1.2;

  return (
    <motion.div
      style={{ left: `${slot.left}%`, top: `${slot.top}%`, x, y, scale, opacity }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${slot.w} aspect-[9/16] will-change-transform z-0`}
    >
      <motion.div
        animate={{
          y: [-7, 7, -7],
          rotate: [slot.rot - 1.2, slot.rot + 1.2, slot.rot - 1.2],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.35,
        }}
        className="w-full h-full"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/20 dark:shadow-black/50 border border-white/60 dark:border-sky-400/20 bg-slate-200 dark:bg-slate-800">
          <img src={video.src} alt={video.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const TICKER_ITEMS = [
  { icon: <InstagramIcon className="w-5 h-5" />, text: `+${SOCIAL_STATS.instagramFollowers} seguidores` },
  { icon: <TikTokIcon className="w-5 h-5" />, text: `${SOCIAL_STATS.tiktokViews} visualizações` },
  { icon: <YouTubeIcon className="w-5 h-5" />, text: 'YouTube Shorts' },
  { icon: null, text: `${SOCIAL_STATS.peopleHelped} pessoas ajudadas` },
  { icon: null, text: `${SOCIAL_STATS.volunteersCount} voluntários` },
  { icon: null, text: 'Gratuito e sigiloso' },
];

/** Faixa que se desloca conforme o scroll (não é autoplay). */
function TickerRow({ progress, reverse }: { progress: MotionValue<number>; reverse?: boolean }) {
  const x = useTransform(progress, [0, 1], reverse ? ['-45%', '0%'] : ['0%', '-45%']);
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <motion.div style={{ x }} className="flex gap-10 whitespace-nowrap w-max will-change-transform">
      {items.map((it, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-3 font-serif italic text-2xl sm:text-3xl text-slate-400/80 dark:text-sky-200/40"
        >
          {it.icon}
          {it.text}
          <span className="text-sky-400/60 not-italic">✦</span>
        </span>
      ))}
    </motion.div>
  );
}

export default function ScrollStage() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const videos = STAGE_VIDEOS.slice(0, SLOTS.length);

  // 1. Mensagem inicial: foco rápido (0.00 -> 0.04) e 100% NÍTIDA por muito tempo (0.04 -> 0.45)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.04, 0.45, 0.52], [0.5, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.04, 0.45, 0.52], [0.96, 1, 1, 1.04]);
  const titleY = useTransform(scrollYProgress, [0.45, 0.52], [0, -20]);
  const titleFilter = useTransform(scrollYProgress, (v) => {
    if (v < 0.04) {
      const b = ((0.04 - v) / 0.04) * 6;
      return `blur(${b.toFixed(1)}px)`;
    }
    if (v > 0.48) {
      const b = ((v - 0.48) / 0.04) * 6;
      return `blur(${b.toFixed(1)}px)`;
    }
    return 'none';
  });

  // 2. Frase final: foco rápido (0.54 -> 0.57) e 100% NÍTIDA por muito tempo (0.57 -> 0.93)
  const closingOpacity = useTransform(scrollYProgress, [0.54, 0.57, 0.93, 0.99], [0, 1, 1, 0.3]);
  const closingScale = useTransform(scrollYProgress, [0.54, 0.57], [0.96, 1]);
  const closingY = useTransform(scrollYProgress, [0.54, 0.57], [16, 0]);
  const closingFilter = useTransform(scrollYProgress, (v) => {
    if (v < 0.54) return 'none';
    if (v < 0.57) {
      const b = ((0.57 - v) / 0.03) * 6;
      return `blur(${b.toFixed(1)}px)`;
    }
    return 'none';
  });

  if (reduce) {
    return (
      <section className="py-20 px-4 bg-slate-50 dark:bg-[#040d1f] text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Mensagens que chegam a quem <span className="font-serif italic font-normal text-primary dark:text-sky-300">precisa.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {videos.map((v) => (
            <img key={v.id} src={v.src} alt={v.alt} loading="lazy" className="w-32 sm:w-40 aspect-[9/16] object-cover rounded-2xl shadow-lg" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="mensagens" className="relative h-[240vh] bg-slate-50 dark:bg-[#040d1f] transition-colors duration-500">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/90 via-sky-50/60 to-slate-50 dark:from-[#040d1f] dark:via-[#07172f] dark:to-[#040d1f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[820px] max-h-[820px] rounded-full bg-sky-300/20 dark:bg-sky-500/10 blur-[110px] pointer-events-none" />
        <PoeiraEstelarVector />

        {/* Mensagem inicial: revela instantaneamente e permanece 100% nítida */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale, y: titleY, filter: titleFilter }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-20 select-text"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance max-w-4xl select-text">
            Mensagens que chegam a quem{' '}
            <span className="font-serif italic font-normal text-primary dark:text-sky-300">precisa.</span>
          </h2>
        </motion.div>

        {/* Cards voando em float state contínuo pelas laterais (sem cobrir o texto) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {videos.map((v, i) => (
            <StageCard key={v.id} video={v} slot={SLOTS[i]} index={i} total={videos.length} progress={scrollYProgress} />
          ))}
        </div>

        {/* Frase final: revela rapidamente e permanece 100% nítida por muito tempo */}
        <motion.div
          style={{ opacity: closingOpacity, y: closingY, scale: closingScale, filter: closingFilter }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-20 select-text space-y-3"
        >
          <span className="text-sky-500 dark:text-sky-300 text-2xl select-none">✦</span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-slate-800 dark:text-white max-w-3xl leading-snug select-text">
            Uma palavra de paz para acolher o seu coração.
          </h3>
        </motion.div>

        {/* Ticker reativo ao scroll */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 space-y-2 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <TickerRow progress={scrollYProgress} />
          <TickerRow progress={scrollYProgress} reverse />
        </div>
      </div>
    </section>
  );
}

