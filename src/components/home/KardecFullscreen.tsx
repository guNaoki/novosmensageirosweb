import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { WordReveal } from './shared';

interface LineWord {
  text: string;
  drift: number;
  highlight?: boolean;
}

// Cada linha ocupa a largura da tela; `drift` sutil faz a palavra convergir suavemente ao centro.
const LINES: LineWord[][] = [
  [
    { text: 'Fora', drift: -45 },
    { text: 'da', drift: 45 },
  ],
  [{ text: 'caridade', drift: -60, highlight: true }],
  [
    { text: 'não', drift: 50 },
    { text: 'há', drift: -50 },
  ],
  [{ text: 'salvação.', drift: 60, highlight: true }],
];

const TOTAL = LINES.flat().length;

/** "Fora da caridade não há salvação." em tela cheia, com o mesmo blur palavra-a-palavra da Home atual. */
export default function KardecFullscreen() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });

  const range = (i: number): [number, number] => {
    const start = 0.08 + (i / TOTAL) * 0.60;
    return [start, start + 0.16];
  };

  const blockScale = useTransform(progress, [0, 1], [0.94, 1.06]);
  const glowScale = useTransform(progress, [0, 1], [0.7, 1.5]);
  const glowOpacity = useTransform(progress, [0, 0.7], [0.25, 0.9]);
  const citeOpacity = useTransform(progress, [0.78, 0.92], [0, 1]);
  const lineScale = useTransform(progress, [0.78, 0.92], [0, 1]);

  let idx = 0;

  return (
    <section
      ref={ref}
      id="frase-kardec"
      className="relative h-[220vh] bg-slate-50 dark:bg-[#040d1f] transition-colors duration-500 border-y border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] rounded-full bg-sky-300/25 dark:bg-sky-500/15 blur-[120px] pointer-events-none"
        />

        <motion.blockquote
          style={{ scale: blockScale }}
          className="relative w-full px-3 sm:px-8 text-center font-serif italic font-semibold tracking-tight leading-[0.95] text-[min(17vw,21vh)]"
        >
          {LINES.map((line, li) => (
            <span key={li} className="flex items-center justify-center gap-x-[0.22em] whitespace-nowrap">
              {line.map((w) => {
                const i = idx++;
                return (
                  <WordReveal
                    key={w.text}
                    word={w.text}
                    highlight={w.highlight}
                    progress={progress}
                    range={range(i)}
                    drift={w.drift}
                    blur={14}
                  />
                );
              })}
            </span>
          ))}
        </motion.blockquote>

        <motion.div
          style={{ opacity: citeOpacity }}
          className="absolute bottom-[7vh] left-0 right-0 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400"
        >
          <motion.span style={{ scaleX: lineScale }} className="h-px w-10 sm:w-16 bg-slate-300 dark:bg-slate-700 origin-right" />
          <cite className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase not-italic text-slate-700 dark:text-slate-300">
            Allan Kardec
          </cite>
          <motion.span style={{ scaleX: lineScale }} className="h-px w-10 sm:w-16 bg-slate-300 dark:bg-slate-700 origin-left" />
        </motion.div>
      </div>
    </section>
  );
}
