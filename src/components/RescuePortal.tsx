import { motion } from 'framer-motion';
import { 
  Heart, 
  ArrowRight, 
  Users, 
  Shield, 
  AlertCircle 
} from 'lucide-react';
import Button from './ui/Button';

// =========================================================
// BESPOKE CARE TRACK SVGs (Trilha Contínua do Acolhimento)
// =========================================================

const CareTrackVector = () => (
  <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] z-0 pointer-events-none">
    <svg className="w-full h-8 overflow-visible" viewBox="0 0 900 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12 H900" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-sky-300/80 dark:text-sky-700/60" />
      <circle cx="0" cy="12" r="5" fill="#0284c7" />
      <circle cx="300" cy="12" r="5" fill="#0284c7" />
      <circle cx="600" cy="12" r="5" fill="#e11d48" />
      <circle cx="900" cy="12" r="5" fill="#059669" />
    </svg>
  </div>
);

const SearchHearVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-sky-600 dark:text-sky-400">
    <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2" className="opacity-80" />
    <path d="M32 32l9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 22c1.5-2.5 4.5-2.5 6 0s4.5 2.5 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="22" cy="22" r="3.5" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const TriagemVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-sky-600 dark:text-sky-400">
    <path d="M24 6l16 6v12c0 10.5-7 18-16 21-9-3-16-10.5-16-21V12l16-6z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M17 24l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ApoioClinicoVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-rose-500 dark:text-rose-400">
    <path d="M24 40s-14-8.5-14-19a9.5 9.5 0 0119-4.5 9.5 9.5 0 0119 4.5c0 10.5-14 19-14 19z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M24 21v10M19 26h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const AcolhimentoFisicoVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-emerald-600 dark:text-emerald-400">
    <path d="M8 38V21l16-12 16 12v17a2 2 0 01-2 2H10a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M18 40v-10a6 6 0 0112 0v10" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="18" r="3" fill="currentColor" />
  </svg>
);

const CasaEspiritaVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-sky-600 dark:text-sky-400">
    <path d="M24 6L6 20v22h36V20L24 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    <path d="M20 42V26a4 4 0 018 0v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="17" r="3" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
    <path d="M24 9v3M16 12l2 2M32 12l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ApoioPsicologicoVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-rose-500 dark:text-rose-400">
    <path d="M24 8c-8 0-14.5 6.5-14.5 14.5 0 5.5 3 10.5 7.5 13v4.5h14V35.5c4.5-2.5 7.5-7.5 7.5-13C38.5 14.5 32 8 24 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    <path d="M19 22c0-2.8 2.2-5 5-5s5 2.2 5 5-5 7-5 7-5-4.2-5-7z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
    <path d="M20 40h8M22 44h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const VoluntariosDigitaisVector = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-emerald-600 dark:text-emerald-400">
    <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="32" r="4" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
    <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 30l5-11M32 30l-5-11M16 33h16" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" className="opacity-70" />
    <path d="M6 44c0-4 4-6 8-6M34 38c4 0 8 2 8 6M15 44c0-5.5 4-8.5 9-8.5s9 3 9 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const FarolResgateVector = () => (
  <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] sm:max-w-[320px] mx-auto select-none">
    <defs>
      <radialGradient id="beaconGlow" cx="160" cy="120" r="110" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" stopOpacity="0.3" />
        <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.08" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ambient Glow Aura */}
    <circle cx="160" cy="130" r="110" fill="url(#beaconGlow)" />

    {/* Concentric Signal Arcs (Radar/Waves of Hope) */}
    <circle cx="160" cy="120" r="84" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-sky-400/40 dark:text-sky-400/30" />
    <circle cx="160" cy="120" r="54" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 5" className="text-sky-500/50 dark:text-sky-300/40" />

    {/* Light Beams from Center */}
    <path d="M160 120 L80 40 M160 120 L240 40 M160 120 L60 120 M160 120 L260 120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-sky-300/40 dark:text-sky-400/30" />

    {/* Central Lighthouse / Beacon Pillar */}
    <path d="M148 190 L153 105 L167 105 L172 190 Z" fill="currentColor" className="text-slate-200/90 dark:text-slate-800" stroke="currentColor" strokeWidth="1.5" />
    <path d="M144 190 H176" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-sky-600 dark:text-sky-400" />

    {/* Lantern Room (Luz Central) */}
    <rect x="151" y="90" width="18" height="15" rx="3" fill="#38BDF8" className="animate-pulse" />
    <circle cx="160" cy="97" r="6" fill="#FFFFFF" />
    <path d="M146 90 L160 76 L174 90 Z" fill="currentColor" className="text-sky-600 dark:text-sky-400" />

    {/* Protective Outstretched Caring Hands Framing Base */}
    <path d="M115 190 C125 170 142 165 155 172" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sky-500 dark:text-sky-400" />
    <path d="M205 190 C195 170 178 165 165 172" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sky-500 dark:text-sky-400" />

    {/* Floating Sparks of Hope */}
    <circle cx="118" cy="85" r="3" fill="#38BDF8" className="animate-pulse" />
    <circle cx="212" cy="95" r="2.5" fill="#F43F5E" className="animate-pulse" />
    <circle cx="160" cy="48" r="3.5" fill="#FBBF24" className="animate-pulse" />
  </svg>
);

interface RescuePortalProps {
  onChangeRoute: (route: string) => void;
}

export default function RescuePortal({ onChangeRoute }: RescuePortalProps) {
  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden transition-colors duration-300">
      
      {/* 2. Hero Section (O Propósito) */}
      <section id="proposito" className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Full-bleed background image with clear overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=1600&auto=format&fit=crop" 
            alt="Mãos acolhedoras" 
            className="w-full h-full object-cover opacity-20 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-sky-50/80 to-slate-50 dark:from-slate-950/75 dark:via-slate-950/90 dark:to-slate-950"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-35"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
          >
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              >
                <span className="block">Rede de Resgate:</span>
                <span className="block sm:whitespace-nowrap">Um porto seguro para quem</span>
                <span className="block">
                  só precisa{" "}
                  <span className="font-serif italic font-normal text-primary dark:text-sky-300">
                    ser acolhido
                  </span>.
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-700 dark:text-slate-100 leading-relaxed max-w-2xl font-normal"
              >
                O <strong className="font-extrabold text-slate-900 dark:text-white">Projeto de Resgate</strong> é a frente de ação direta dos Novos Mensageiros. Conversamos com pessoas que estão com <strong className="font-semibold text-primary dark:text-sky-300">depressão</strong>. Realizamos o atendimento dessas pessoas, triagem por nível de risco, diálogo fraterno e encaminhamento para profissionais especialistas.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="w-5 h-5 ml-1" />}
                  onClick={() => {
                    const el = document.getElementById('inscricao');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Quero Ajudar a Salvar Vidas
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    onChangeRoute('#/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Voltar ao Portal Principal
                </Button>
              </motion.div>
            </div>

            {/* Rescue Operational Floating Composition (Farol & Telemetria Flutuante) */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4"
            >
              {/* Background radiant aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
              
              {/* Central Beacon Illustration */}
              <div className="relative w-full max-w-[340px] flex items-center justify-center py-4">
                <FarolResgateVector />

                {/* Floating Telemetry Badge 1: Vidas Amparadas (Top Right) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 sm:right-2 bg-white/85 dark:bg-[#0B132B]/85 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl border border-white/90 dark:border-slate-800/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs">
                    <Heart className="w-4 h-4 fill-sky-500/30 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-sans text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-none">+100</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Vidas amparadas</div>
                  </div>
                </motion.div>

                {/* Floating Telemetry Badge 2: Monitoramento 24/7 (Bottom Left) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
                  className="absolute bottom-2 -left-2 sm:left-2 bg-white/85 dark:bg-[#0B132B]/85 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl border border-white/90 dark:border-slate-800/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-20"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                  <div>
                    <div className="font-sans text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-none">Busca Ativa 24/7</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Mapeamento contínuo</div>
                  </div>
                </motion.div>

                {/* Floating Telemetry Badge 3: Triagem Segura (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 }}
                  className="absolute -bottom-4 right-4 bg-white/85 dark:bg-[#0B132B]/85 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl border border-white/90 dark:border-slate-800/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] flex items-center gap-2 z-20"
                >
                  <Shield className="w-3.5 h-3.5 text-rose-500" />
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                    Triagem e Sigilo
                  </span>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. A Dor / O Contexto (O Iceberg) */}
      <section id="dor" className="py-14 sm:py-20 md:py-24 bg-white dark:bg-slate-950 border-y border-slate-200/70 dark:border-slate-800 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white tracking-tight">
              Os comentários em nossos posts são apenas a ponta do iceberg.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Vídeos curtos de 30 segundos alcançam milhões, mas no silêncio do campo de comentários, milhares de pessoas desabafam sobre depressão, vazio existencial e ideação suicida.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left"
          >
            <motion.div 
              variants={cardVariants}
              className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-7 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">A Realidade Oculta</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Por trás de cada visualização ou curtida, muitas vezes há um grito silencioso por socorro. Quando um post viraliza, surgem centenas de desabafos de pessoas em sofrimento profundo no meio de mensagens comuns.
                </p>
              </div>
              <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6 mt-6">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Desafio Atual</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-1 block">Mais de 100 pessoas identificadas precisando de atenção fraterna direta nas últimas semanas.</span>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants} 
              className="bg-gradient-to-br from-[#0D2847] to-[#0A1B30] dark:from-[#0B1A2E] dark:to-[#050D18] text-white p-7 sm:p-8 rounded-2xl shadow-sm border border-sky-500/20 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
                <Heart className="w-64 h-64 fill-white text-white" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Por que precisamos de você?</h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Hoje somos uma <strong className="text-sky-300 font-semibold">equipe enxuta</strong> de voluntários ativos fazendo o trabalho de monitoramento, resposta inicial e direcionamento. A demanda é gigantesca e, se não crescermos agora, muitas vidas que pediram socorro ficarão sem resposta ou apoio.
                </p>
              </div>
              <div className="border-t border-white/15 pt-6 mt-6 relative z-10">
                <span className="text-xs font-semibold text-sky-300 block uppercase tracking-wider">A Meta do Resgate</span>
                <span className="text-sm font-bold text-white mt-1 block">Garantir que 100% dos comentários com ideação dolorosa recebam um acolhimento imediato, sigiloso e humano.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. A Jornada do Acolhimento (Trilha Contínua Ilustrada em SVG) */}
      <section id="jornada" className="py-14 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white tracking-tight">
              A Trilha do Acolhimento e Resgate
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Nossa rede atua de forma proativa para encontrar a dor onde ela estiver nas redes sociais e direcioná-la para a luz do amparo fraternal.
            </p>
          </div>

          <div className="relative">
            {/* SVG Connecting Track (Desktop) */}
            <CareTrackVector />

            {/* Mobile connecting dashed spine */}
            <div className="lg:hidden absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 border-l border-dashed border-sky-400/30 pointer-events-none"></div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            >
              {/* Step 1 */}
              <motion.div 
                variants={cardVariants} 
                className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      01
                    </span>
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <SearchHearVector />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                      Busca Ativa
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      Mapeamento Digital
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
                    Mapeamos comentários de desespero e ideação nos vídeos das redes, abordando cada pessoa com carinho, respeito e absoluto sigilo.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                variants={cardVariants} 
                className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      02
                    </span>
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <TriagemVector />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                      Triagem Fraterna
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      Avaliação & Escuta
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
                    Avaliamos a urgência emocional e iniciamos o diálogo acolhedor para estabilizar o sofrimento imediato e identificar a necessidade real.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                variants={cardVariants} 
                className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                      03
                    </span>
                    <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                      <ApoioClinicoVector />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      Apoio Clínico
                    </h3>
                    <p className="text-xs font-semibold text-rose-600 dark:text-rose-400/90 mt-0.5">
                      Suporte com Psicólogos
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
                    Casos de sofrimento psiquiátrico grave recebem acolhimento e orientação de psicólogos voluntários parceiros para suporte qualificado.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                variants={cardVariants} 
                className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      04
                    </span>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <AcolhimentoFisicoVector />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Acolhimento Físico
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400/90 mt-0.5">
                      Ponte com Centros Espíritas
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
                    Conectamos afetuosamente a pessoa com Casas Espíritas na sua cidade para atendimento fraterno presencial, fluidoterapia e comunidade viva.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Rede de Apoio (Como nos dividimos) */}
      <section id="apoio" className="py-14 sm:py-20 md:py-24 bg-slate-50 dark:bg-[#060D1E] border-t border-slate-200/70 dark:border-slate-800/80 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white tracking-tight">
              A Nossa Rede de Amparo e Resgate
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Cada perfil tem um papel essencial no resgate de vidas. Veja como você ou sua organização podem colaborar nessa corrente de luz.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
          >
            {/* Column 1 - Casas Espíritas */}
            <motion.div 
              variants={cardVariants} 
              className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#080E21] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <CasaEspiritaVector />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    Presencial
                  </span>
                </div>

                <div>
                  <span className="font-sans text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                    Acolhimento Local
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-sky-400 transition-colors mt-0.5">
                    Casas Espíritas
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Oferecem atendimento fraterno presencial, suporte de passes magnéticos, fluidoterapia e reintegração da pessoa a uma comunidade viva de acolhimento físico na localidade onde reside.
                </p>
              </div>

              <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-4 mt-6 space-y-2">
                <span className="font-sans text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Frentes de Amparo
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 font-medium">
                    Atendimento Fraterno
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 font-medium">
                    Passes & Fluidos
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 font-medium">
                    Comunidade Viva
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Psicólogos */}
            <motion.div 
              variants={cardVariants} 
              className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#080E21] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <ApoioPsicologicoVector />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                    Especialista
                  </span>
                </div>

                <div>
                  <span className="font-sans text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                    Suporte Técnico
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors mt-0.5">
                    Psicólogos e Clínicos
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Oferecem escuta profissional orientadora, triagem psicológica preliminar de suporte clínico e direcionam as pessoas para serviços públicos de saúde mental quando necessário.
                </p>
              </div>

              <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-4 mt-6 space-y-2">
                <span className="font-sans text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Frentes de Amparo
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 font-medium">
                    Escuta Clínica Online
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 font-medium">
                    Triagem de Gravidade
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/10 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 font-medium">
                    Supervisão Técnica
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Column 3 - Voluntários Digitais */}
            <motion.div 
              variants={cardVariants} 
              className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#080E21] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <VoluntariosDigitaisVector />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Digital
                  </span>
                </div>

                <div>
                  <span className="font-sans text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                    Linha de Frente
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-0.5">
                    Guardiões Digitais
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Pessoas dedicadas a ler os comentários, enviar as primeiras mensagens acolhedoras via direct, encaminhar para atendimento fraterno de WhatsApp e pesquisar links úteis.
                </p>
              </div>

              <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-4 mt-6 space-y-2">
                <span className="font-sans text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Frentes de Amparo
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-medium">
                    Mapeamento em Vídeos
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-medium">
                    Acolhimento no Direct
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-medium">
                    Ponte para o WhatsApp
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Allan Kardec Quote section */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden border-y border-primary-hover/50 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="bg-white/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-sky-200 dark:text-sky-300">
            <Heart className="w-6 h-6 fill-sky-200 dark:fill-sky-300 text-sky-200 dark:text-sky-300" />
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl font-bold italic tracking-tight leading-relaxed max-w-3xl mx-auto text-white">
            "Fora da caridade não há salvação."
          </blockquote>
          <div className="flex items-center justify-center gap-3 text-sky-200 dark:text-sky-300">
            <span className="h-px w-8 bg-sky-200/40 dark:bg-sky-400/40"></span>
            <cite className="text-xs uppercase tracking-widest font-extrabold not-italic">
              Allan Kardec
            </cite>
            <span className="h-px w-8 bg-sky-200/40 dark:bg-sky-400/40"></span>
          </div>
        </div>
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
      </section>

      {/* 6. Nossa Trajetória e Linha do Tempo */}
      <section id="historia" className="py-14 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden bg-grid-pattern border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white tracking-tight">
              A história por trás da Rede de Resgate
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Como um canal de divulgação espírita nas redes sociais deparou-se com a urgência de acolher e salvar vidas no silêncio dos comentários digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-3">
              <div className="font-sans text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                01. O Despertar
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Sementes Digitais</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-normal">
                O projeto Novos Mensageiros foi criado com o propósito de divulgar o Espiritismo de forma leve e acolhedora nas redes sociais (Instagram e TikTok), levando gotas de esperança para o cotidiano.
              </p>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-3">
              <div className="font-sans text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                02. O Sinal de Alerta
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">A Ponta do Iceberg</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-normal">
                Ao publicarmos conteúdos voltados para a depressão e o vazio da alma, os posts viralizaram. Nos comentários, identificamos um grito silencioso: centenas de desabafos de pessoas em sofrimento profundo.
              </p>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-3">
              <div className="font-sans text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                03. A Mobilização
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Os Primeiros Guardiões</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-normal">
                Uma pequena equipe de voluntários se reuniu emergencialmente para monitorar os comentários, enviando mensagens de resgate no direct e abrindo canais de escuta fraterna via WhatsApp.
              </p>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-3">
              <div className="font-sans text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                04. O Futuro
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Expandindo os Horizontes</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-normal">
                Com mais de 100 pessoas acolhidas e milhões de visualizações, estruturamos essa plataforma para recrutar novos voluntários, parceiros clínicos e Casas Espíritas para ampliar esse farol de luz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Final & Inscrição de Voluntários */}
      <section id="inscricao" className="py-14 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 md:p-12 text-center space-y-6 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/20">
              <Heart className="w-6 h-6 fill-emerald-500/20" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Seja um Guardião da Vida
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto font-normal">
                Converse diretamente com a nossa coordenação pelo WhatsApp para tirar dúvidas e integrar a Rede de Resgate.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                as="a"
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20me%20voluntariar%20no%20Projeto%20Resgate."
                target="_blank"
                className="w-full sm:w-auto"
                iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Conversar no WhatsApp para Ser Voluntário
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-normal">
              <span>Acolhimento voluntário e sigiloso</span>
              <a 
                href="https://www.tiktok.com/@acolhimentomensageiros?is_from_webapp=1&sender_device=pc"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary dark:text-sky-400 hover:underline font-semibold"
              >
                TikTok Resgate (@acolhimentomensageiros)
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
