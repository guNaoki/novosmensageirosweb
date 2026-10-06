import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import { STAGE_VIDEOS, type StageVideo } from '../../data/stageVideos';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PoeiraEstelarVector } from './shared';

// Posições (em % do palco) onde cada card "pousa". Ordem = ordem de entrada.
const SLOTS = [
  { left: 20, top: 30, rot: -7, w: 'w-[30vw] sm:w-[15vw]' },
  { left: 80, top: 28, rot: 6, w: 'w-[30vw] sm:w-[15vw]' },
  { left: 12, top: 68, rot: 5, w: 'w-[26vw] sm:w-[13vw]' },
  { left: 88, top: 66, rot: -6, w: 'w-[26vw] sm:w-[13vw]' },
  { left: 50, top: 14, rot: 2, w: 'w-[24vw] sm:w-[12vw]' },
  { left: 35, top: 78, rot: -3, w: 'w-[24vw] sm:w-[12vw]' },
  { left: 66, top: 80, rot: 4, w: 'w-[24vw] sm:w-[12vw]' },
  { left: 50, top: 50, rot: 0, w: 'w-[22vw] sm:w-[11vw]' },
];

const PLATFORM_ICON = {
  instagram: <InstagramIcon className="w-3.5 h-3.5" />,
  tiktok: <TikTokIcon className="w-3.5 h-3.5" />,
  youtube: <YouTubeIcon className="w-3.5 h-3.5" />,
};

interface StageCardProps {
  video: StageVideo;
  slot: (typeof SLOTS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

/** Card que "voa" do fundo (pequeno, no centro) até o slot e depois passa pela câmera. */
function StageCard({ video, slot, index, total, progress }: StageCardProps) {
  const start = 0.06 + (index / total) * 0.3;
  const land = start + 0.22;
  const dx = (50 - slot.left) * 0.9;
  const dy = (50 - slot.top) * 0.9;

  const x = useTransform(progress, [start, land, 1], [`${dx}vw`, '0vw', `${(slot.left - 50) * 0.55}vw`]);
  const y = useTransform(progress, [start, land, 1], [`${dy}vh`, '0vh', `${(slot.top - 50) * 0.55}vh`]);
  const scale = useTransform(progress, [start, land, 1], [0.3, 1, 1.6]);
  const rotate = useTransform(progress, [start, land, 1], [slot.rot * 3, slot.rot, slot.rot * 0.4]);
  const opacity = useTransform(progress, [start, start + 0.08, 0.82, 0.98], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ left: `${slot.left}%`, top: `${slot.top}%`, x, y, scale, rotate, opacity }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${slot.w} aspect-[9/16] will-change-transform`}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/20 dark:shadow-black/50 border border-white/60 dark:border-sky-400/20 bg-slate-200 dark:bg-slate-800">
        <img src={video.src} alt={video.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/90 dark:bg-slate-900/80 backdrop-blur text-slate-800 dark:text-sky-200 flex items-center justify-center">
          {PLATFORM_ICON[video.platform]}
        </span>
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

  const videos = STAGE_VIDEOS.slice(0, SLOTS.length);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.38, 0.5], [0, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1.12]);
  const titleBlur = useTransform(scrollYProgress, [0.38, 0.5], ['blur(0px)', 'blur(10px)']);

  const closingOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.7, 0.85], [24, 0]);

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
    <section ref={ref} id="mensagens" className="relative h-[320vh] bg-slate-50 dark:bg-[#040d1f] transition-colors duration-500">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/90 via-sky-50/60 to-slate-50 dark:from-[#040d1f] dark:via-[#07172f] dark:to-[#040d1f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[820px] max-h-[820px] rounded-full bg-sky-300/20 dark:bg-sky-500/10 blur-[110px] pointer-events-none" />
        <PoeiraEstelarVector />

        {/* Título central: some em direção à câmera quando os cards assumem */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale, filter: titleBlur }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-4">
            Todo dia, em três plataformas
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] text-balance max-w-4xl">
            Mensagens que chegam a quem{' '}
            <span className="font-serif italic font-normal text-primary dark:text-sky-300">precisa.</span>
          </h2>
        </motion.div>

        {/* Cards voando */}
        <div className="absolute inset-0">
          {videos.map((v, i) => (
            <StageCard key={v.id} video={v} slot={SLOTS[i]} index={i} total={videos.length} progress={scrollYProgress} />
          ))}
        </div>

        {/* Frase final do palco */}
        <motion.p
          style={{ opacity: closingOpacity, y: closingY }}
          className="absolute left-0 right-0 top-[44%] text-center px-6 text-lg sm:text-2xl font-serif italic text-slate-700 dark:text-slate-200 pointer-events-none"
        >
          Cada vídeo é uma mão estendida.
        </motion.p>

        {/* Ticker reativo ao scroll */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 space-y-2 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <TickerRow progress={scrollYProgress} />
          <TickerRow progress={scrollYProgress} reverse />
        </div>
      </div>
    </section>
  );
}
