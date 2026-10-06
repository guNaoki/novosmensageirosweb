import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { SOCIAL_STATS } from '../../data/stats';
import { STAGE_VIDEOS, type StageVideo } from '../../data/stageVideos';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PoeiraEstelarVector } from './shared';

// Posições (em % do palco) onde cada card "pousa".
// Dispostos estritamente no perímetro (laterais, topo e base), mantendo o centro 100% limpo para os textos.
const SLOTS = [
  { left: 15, top: 28, rot: -6, w: 'w-[28vw] sm:w-[13.5vw]' },
  { left: 85, top: 26, rot: 5, w: 'w-[28vw] sm:w-[13.5vw]' },
  { left: 12, top: 68, rot: 4, w: 'w-[26vw] sm:w-[12.5vw]' },
  { left: 88, top: 66, rot: -5, w: 'w-[26vw] sm:w-[12.5vw]' },
  { left: 28, top: 16, rot: -2, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 72, top: 18, rot: 3, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 26, top: 80, rot: 3, w: 'w-[24vw] sm:w-[11.5vw]' },
  { left: 74, top: 80, rot: -3, w: 'w-[24vw] sm:w-[11.5vw]' },
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

/** Card que entra após o título ter sido lido com clareza, pousa no perímetro e depois flutua suavemente. */
function StageCard({ video, slot, index, total, progress }: StageCardProps) {
  // Os cards só iniciam entrada a partir de 0.26, garantindo tempo limpo de leitura para o título
  const start = 0.26 + (index / total) * 0.2;
  const land = start + 0.14;
  const dx = (50 - slot.left) * 0.55;
  const dy = (50 - slot.top) * 0.55;

  const x = useTransform(progress, [start, land, 0.74, 0.88], [`${dx}vw`, '0vw', '0vw', `${(slot.left - 50) * 0.8}vw`]);
  const y = useTransform(progress, [start, land, 0.74, 0.88], [`${dy}vh`, '0vh', '0vh', `${(slot.top - 50) * 0.8}vh`]);
  const scale = useTransform(progress, [start, land, 0.74, 0.88], [0.35, 1, 1, 1.25]);
  const rotate = useTransform(progress, [start, land, 0.74, 0.88], [slot.rot * 2, slot.rot, slot.rot, slot.rot * 0.5]);
  const opacity = useTransform(progress, [start, start + 0.05, 0.74, 0.86], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ left: `${slot.left}%`, top: `${slot.top}%`, x, y, scale, rotate, opacity }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${slot.w} aspect-[9/16] will-change-transform`}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/20 dark:shadow-black/50 border border-white/60 dark:border-sky-400/20 bg-slate-200 dark:bg-slate-800">
        <img src={video.src} alt={video.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/90 dark:bg-slate-900/80 backdrop-blur text-slate-800 dark:text-sky-200 flex items-center justify-center shadow-xs">
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

  // Coreografia do Título: 100% limpo e visível na entrada até 0.20, saindo suavemente antes da invasão dos cards
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.20, 0.28], [0.8, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.28], [1, 1.05]);
  const titleY = useTransform(scrollYProgress, [0.18, 0.28], [0, -30]);
  const titleBlur = useTransform(scrollYProgress, [0.20, 0.28], ['blur(0px)', 'blur(8px)']);

  // Coreografia da Frase Final: surge no centro quando os cards se afastam
  const closingOpacity = useTransform(scrollYProgress, [0.72, 0.84], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.72, 0.84], [24, 0]);
  const closingScale = useTransform(scrollYProgress, [0.72, 0.84], [0.95, 1]);

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

        {/* Título central: limpo, sem cards cobrindo, com respiração suficiente */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale, y: titleY, filter: titleBlur }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300 mb-4">
            Todo dia, em três plataformas
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] text-balance max-w-4xl">
            Mensagens que chegam a quem{' '}
            <span className="font-serif italic font-normal text-primary dark:text-sky-300">precisa.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg font-normal">
            Pílulas de paz, reflexão e consolo na correria do dia a dia.
          </p>
        </motion.div>

        {/* Cards voando para os cantos e laterais (centro permanece livre) */}
        <div className="absolute inset-0">
          {videos.map((v, i) => (
            <StageCard key={v.id} video={v} slot={SLOTS[i]} index={i} total={videos.length} progress={scrollYProgress} />
          ))}
        </div>

        {/* Frase final do palco com destaque central quando os cards abrem espaço */}
        <motion.div
          style={{ opacity: closingOpacity, y: closingY, scale: closingScale }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10 space-y-3"
        >
          <span className="text-sky-500 dark:text-sky-300 text-2xl">✦</span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-slate-800 dark:text-white max-w-3xl leading-snug">
            Cada vídeo é uma mão estendida.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 uppercase tracking-widest font-semibold">
            Um farol de esperança na linha do tempo
          </p>
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

