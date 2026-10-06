import { lazy, Suspense, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import HomeHero from './home/HomeHero';

// Hero é eager (LCP). O resto vira chunk separado e só baixa depois que a primeira dobra está pintada.
const loadScrollStage = () => import('./home/ScrollStage');
const loadTeamTrack = () => import('./home/TeamTrack');
const loadKardec = () => import('./home/KardecFullscreen');
const loadClosing = () => import('./home/HomeClosing');

const ScrollStage = lazy(loadScrollStage);
const TeamTrack = lazy(loadTeamTrack);
const KardecFullscreen = lazy(loadKardec);
const HomeClosing = lazy(loadClosing);

interface HomePreviewPortalProps {
  onChangeRoute: (route: string) => void;
}

/** Reserva a altura aproximada da seção para o scroll não "pular" quando o chunk chega. */
const Placeholder = ({ vh }: { vh: number }) => (
  <div aria-hidden style={{ height: `${vh}vh` }} className="bg-slate-50 dark:bg-[#040d1f]" />
);

export default function HomePreviewPortal({ onChangeRoute }: HomePreviewPortalProps) {
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Pré-carrega em ordem de prioridade quando o navegador está ocioso: Ato 2 primeiro.
    const idle: (cb: () => void) => void =
      'requestIdleCallback' in window
        ? (cb) => window.requestIdleCallback(cb, { timeout: 2500 })
        : (cb) => window.setTimeout(cb, 1200);

    idle(() => {
      loadScrollStage().then(() => idle(() => loadTeamTrack().then(() => idle(() => {
        loadKardec();
        loadClosing();
      }))));
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
        <HomeHero onChangeRoute={onChangeRoute} />

        <Suspense fallback={<Placeholder vh={240} />}>
          <ScrollStage />
        </Suspense>

        <Suspense fallback={<Placeholder vh={340} />}>
          <TeamTrack onChangeRoute={onChangeRoute} />
        </Suspense>

        <Suspense fallback={<Placeholder vh={220} />}>
          <KardecFullscreen />
        </Suspense>

        <Suspense fallback={<Placeholder vh={100} />}>
          <HomeClosing onChangeRoute={onChangeRoute} />
        </Suspense>
      </div>
    </MotionConfig>
  );
}
