import { motion } from 'framer-motion';
import { ArrowRight, Compass as CompassIcon } from 'lucide-react';
import { SOCIAL_STATS } from '../../data/stats';
import Button from '../ui/Button';
import {
  LightRadianceVector,
  PoeiraEstelarVector,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from './shared';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const getCleanNumber = (val: string) => val.split(' - ')[0].trim();

interface HomeHeroProps {
  onChangeRoute: (route: string) => void;
}

/** Hero idêntico ao da Home atual (SpiritismPortal). Carregado de forma eager: é o LCP. */
export default function HomeHero({ onChangeRoute }: HomeHeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24 text-slate-900 dark:text-white overflow-hidden bg-gradient-to-b from-sky-100/90 via-blue-50/70 to-slate-100/90 dark:from-[#06152e]/95 dark:via-[#081b3a]/80 dark:to-[#040d1f] transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/imagens-pagina/ceunuvem1.webp"
          alt="Fundo celestial sereno"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-38 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-slate-100/80 dark:from-[#06152e]/70 dark:via-transparent dark:to-[#040d1f]"></div>
      </div>

      <LightRadianceVector />
      <PoeiraEstelarVector />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 sm:space-y-8">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto text-balance"
          >
            Novos Mensageiros: <br />
            <span className="font-serif italic font-normal text-primary dark:text-sky-300">Luz e Acolhimento</span> nas
            redes digitais.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Levamos os ensinamentos da Doutrina Espírita de forma leve, profunda e acolhedora. Um farol de escuta e
            amparo para quem busca respostas e paz para a alma.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="whatsapp"
              size="md"
              as="a"
              href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20receber%20acolhimento%20e%20conversa%20fraterna."
              target="_blank"
              iconLeft={<WhatsAppIcon className="w-4 h-4 fill-white" />}
            >
              Falar no WhatsApp (Acolhimento)
            </Button>

            <Button
              variant="secondary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                onChangeRoute('/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Conhecer o Projeto de Resgate
            </Button>

            <Button
              variant="outline"
              size="md"
              iconLeft={<CompassIcon className="w-4 h-4 text-sky-500" />}
              onClick={() => {
                onChangeRoute('/recursos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Casas Espíritas &amp; Livros Gratuitos
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8 max-w-3xl mx-auto w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <a
                href="https://www.instagram.com/novosmensageiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-pink-500 dark:hover:text-pink-400 transition-colors group cursor-pointer"
                title="Instagram @novosmensageiros"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span>
                  <strong className="font-bold text-pink-600 dark:text-pink-400">
                    +{SOCIAL_STATS.instagramFollowers}
                  </strong>{' '}
                  seguidores
                </span>
              </a>

              <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none">•</span>

              <a
                href="https://www.tiktok.com/@novosmensageiros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group cursor-pointer"
                title="TikTok @novosmensageiros"
              >
                <TikTokIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {getCleanNumber(SOCIAL_STATS.tiktokViews)}
                  </strong>{' '}
                  visualizações
                </span>
              </a>

              <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none">•</span>

              <a
                href="https://www.youtube.com/@NovosMensageiros/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors group cursor-pointer"
                title="YouTube Shorts Novos Mensageiros"
              >
                <YouTubeIcon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>
                  <strong className="font-bold text-slate-900 dark:text-white">Canal Oficial</strong>
                </span>
              </a>
            </div>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 text-center">
              Uma ponte viva de escuta fraterna gratuita, sigilosa e sem julgamentos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
