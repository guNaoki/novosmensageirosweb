import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import { STAGE_VIDEOS, type StageVideo } from '../../data/stageVideos';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PoeiraEstelarVector } from './shared';
import { useIsMobile } from '../../hooks/useMediaQuery';

// Posições no perímetro: no mobile apenas 4 cards nos cantos extremos deixando o centro livre.
// No desktop, 8 cards espalhados pelas bordas externas.
const SLOTS = [
  // 0: Canto superior esquerdo (mobile bem acima do centro)
  { left: 16, top: 28, leftMobile: 14, topMobile: 18, rot: -5, w: 'w-[22vw] max-w-[85px] sm:w-[13.5vw] sm:max-w-none' },
  // 1: Canto superior direito (mobile bem acima do centro)
  { left: 84, top: 26, leftMobile: 86, topMobile: 18, rot: 5, w: 'w-[22vw] max-w-[85px] sm:w-[13.5vw] sm:max-w-none' },
  // 2: Canto inferior esquerdo (mobile bem abaixo do centro, acima do ticker)
  { left: 12, top: 68, leftMobile: 14, topMobile: 78, rot: 4, w: 'w-[22vw] max-w-[85px] sm:w-[12.5vw] sm:max-w-none' },
  // 3: Canto inferior direito (mobile bem abaixo do centro, acima do ticker)
  { left: 88, top: 66, leftMobile: 86, topMobile: 78, rot: -5, w: 'w-[22vw] max-w-[85px] sm:w-[12.5vw] sm:max-w-none' },
  // 4 a 7: Exclusivos do Desktop (não renderizam no mobile para economizar FPS e evitar excesso visual)
  { left: 28, top: 16, rot: -2, w: 'sm:w-[11.5vw]', desktopOnly: true },
  { left: 72, top: 18, rot: 3, w: 'sm:w-[11.5vw]', desktopOnly: true },
  { left: 26, top: 80, rot: 3, w: 'sm:w-[11.5vw]', desktopOnly: true },
  { left: 74, top: 80, rot: -3, w: 'sm:w-[11.5vw]', desktopOnly: true },
];

interface StageCardProps {
  video: StageVideo;
  slot: (typeof SLOTS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}

/** Card que surge por trás, vai para a frente em float state contínuo acelerado por hardware. */
function StageCard({ video, slot, index, total, progress, isMobile }: StageCardProps) {
  const currentLeft = isMobile && 'leftMobile' in slot && slot.leftMobile !== undefined ? slot.leftMobile : slot.left;
  const currentTop = isMobile && 'topMobile' in slot && slot.topMobile !== undefined ? slot.topMobile : slot.top;

  const start = 0.12 + (index / total) * 0.18;
  const land = start + 0.16;
  const dx = (50 - currentLeft) * 0.7;
  const dy = (50 - currentTop) * 0.7;

  const x = useTransform(progress, [start, land, 0.74, 0.90], [`${dx}vw`, '0vw', '0vw', `${(currentLeft - 50) * 0.7}vw`]);
  const y = useTransform(progress, [start, land, 0.74, 0.90], [`${dy}vh`, '0vh', '0vh', `${(currentTop - 50) * 0.7}vh`]);
  const scale = useTransform(progress, [start, land, 0.74, 0.90], [0.35, 1, 1, 1.2]);
  const opacity = useTransform(progress, [start, start + 0.08, 0.78, 0.92], [0, 1, 1, 0]);

  // Float state: flutuação orgânica contínua acelerada por GPU (CSS keyframes)
  const floatDuration = 4.8 + (index % 3) * 1.2;

  return (
    <motion.div
      style={{ left: `${currentLeft}%`, top: `${currentTop}%`, x, y, scale, opacity }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${slot.w} aspect-[9/16] will-change-transform z-0 ${
        'desktopOnly' in slot && slot.desktopOnly ? 'hidden sm:block' : ''
      }`}
    >
      <div
        style={{
          animationDuration: `${floatDuration}s`,
          animationDelay: `${index * 0.35}s`,
          transform: `rotate(${slot.rot}deg)`,
        }}
        className="w-full h-full animate-float-subtle will-change-transform"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-sky-900/20 dark:shadow-black/50 border border-white/60 dark:border-sky-400/20 bg-slate-200 dark:bg-slate-800">
          <img src={video.src} alt={video.alt} width={225} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      </div>
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
  const isMobile = useIsMobile(640);

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

  // 2. Frase final: foco rápido (0.54 -> 0.58) e permanece 100% NÍTIDA até o fim da seção (não desaparece)
  const closingOpacity = useTransform(scrollYProgress, [0.54, 0.58, 1], [0, 1, 1]);
  const closingScale = useTransform(scrollYProgress, [0.54, 0.58], [0.96, 1]);
  const closingY = useTransform(scrollYProgress, [0.54, 0.58], [16, 0]);
  const closingFilter = useTransform(scrollYProgress, (v) => {
    if (v < 0.54) return 'none';
    if (v < 0.58) {
      const b = ((0.58 - v) / 0.04) * 6;
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-6 pointer-events-none z-20 select-text"
        >
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance max-w-4xl select-text">
            Mensagens que chegam a quem{' '}
            <span className="font-serif italic font-normal text-primary dark:text-sky-300">precisa.</span>
          </h2>
        </motion.div>

        {/* Cards voando em float state contínuo pelas laterais (sem cobrir o texto) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {videos.map((v, i) => {
            const slot = SLOTS[i];
            if (isMobile && 'desktopOnly' in slot && slot.desktopOnly) return null;
            return (
              <StageCard
                key={v.id}
                video={v}
                slot={slot}
                index={i}
                total={isMobile ? 4 : videos.length}
                progress={scrollYProgress}
                isMobile={isMobile}
              />
            );
          })}
        </div>

        {/* Frase final: revela rapidamente e permanece 100% nítida até o fim */}
        <motion.div
          style={{ opacity: closingOpacity, y: closingY, scale: closingScale, filter: closingFilter }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-6 pointer-events-none z-20 select-text space-y-3"
        >
          <span className="text-sky-500 dark:text-sky-300 text-2xl select-none">✦</span>
          <h3 className="text-2xl sm:text-5xl md:text-6xl font-serif italic text-slate-800 dark:text-white max-w-3xl leading-snug select-text">
            Uma palavra de paz para acolher o seu coração.
          </h3>
        </motion.div>

        {/* Ticker reativo ao scroll */}
        <div className="absolute bottom-3 sm:bottom-10 left-0 right-0 space-y-2 overflow-hidden pointer-events-none sm:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <TickerRow progress={scrollYProgress} />
          <div className="hidden sm:block">
            <TickerRow progress={scrollYProgress} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
