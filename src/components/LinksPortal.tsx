import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Globe, 
  BookOpen, 
  ExternalLink, 
  CheckCircle2, 
  ArrowLeft, 
  Sun, 
  Moon,
  Sparkles
} from 'lucide-react';

interface LinksPortalProps {
  onChangeRoute: (route: string) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function LinksPortal({ onChangeRoute, darkMode, onToggleDarkMode }: LinksPortalProps) {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7z84__Yc8DKzcYCqzZSCyqxS17AbOBP29cVhO2Cca4je6ow/viewform?usp=publish-editor";

  // Brand SVGs
  const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );

  const YouTubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-between px-4 py-6 sm:py-10 transition-colors duration-300 selection:bg-primary selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-sky-400/10 dark:bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 dark:bg-blue-400/5 blur-3xl pointer-events-none rounded-full" />

      {/* Main Content Card Container */}
      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col">
        
        {/* Top Minimal Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onChangeRoute('/')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-primary/30 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao site</span>
          </button>

          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs transition-all cursor-pointer"
              title={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              aria-label={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}
        </div>

        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center mb-7"
        >
          {/* Logo with outer glow ring */}
          <div className="relative mb-3">
            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-primary rounded-full blur-xs opacity-60 dark:opacity-80 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-white dark:bg-slate-900 p-2.5 shadow-lg border-2 border-white dark:border-slate-800 flex items-center justify-center">
              <img 
                src="/logo-mensageiros.webp" 
                alt="Novos Mensageiros" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Title & Verified Badge */}
          <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Novos Mensageiros
            </h1>
            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/20" />
          </div>

          <p className="text-xs font-semibold text-primary dark:text-sky-400 tracking-wide mb-2">
            @novosmensageiros
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
            Mapeando a dor nas redes digitais e aproximando corações ao amparo de amor e luz.
          </p>
        </motion.div>

        {/* Links Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-3.5"
        >
          {/* 1. HERO CTA: FORMULÁRIO EM EVIDÊNCIA */}
          <motion.div variants={itemVariants}>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-4 rounded-2xl bg-gradient-to-r from-primary via-[#005fa8] to-sky-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white tracking-wider uppercase border border-white/20">
                <Sparkles className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                <span>Em Destaque</span>
              </div>

              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5 pr-14">
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-base font-bold text-white group-hover:text-amber-100 transition-colors flex items-center gap-1.5">
                    Quero ser Voluntário
                  </h2>
                  <p className="text-xs text-white/90 leading-tight mt-0.5 font-normal">
                    Preencha o formulário e faça parte da nossa rede de acolhimento
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 text-white/70 group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          {/* 2. SITE OFICIAL (LOGO EM SEGUIDA) */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => onChangeRoute('/')}
              className="w-full group p-4 rounded-2xl bg-[#FAFBFD] dark:bg-[#0B132B]/85 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-primary/40 dark:hover:border-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-left flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-primary dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-900/50 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950 transition-colors duration-200">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                    Acessar o Site Oficial
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    Consolo, mensagens diárias, acervo e mapa de centros
                  </p>
                </div>
              </div>
              <div className="text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all">
                <span className="text-xs font-semibold">Entrar</span>
              </div>
            </button>
          </motion.div>

          {/* 3. NOSSA HISTÓRIA */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => onChangeRoute('/historia')}
              className="w-full group p-4 rounded-2xl bg-[#FAFBFD] dark:bg-[#0B132B]/85 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-primary/40 dark:hover:border-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-left flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                    Nossa História
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    A trajetória e o propósito dos Novos Mensageiros
                  </p>
                </div>
              </div>
              <div className="text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all">
                <span className="text-xs font-semibold">Ler</span>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Social Networks Row (Small at the bottom) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
            Siga nossas redes
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/novosmensageiros/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-pink-800/60 hover:-translate-y-0.5 transition-all shadow-2xs"
              title="Instagram @novosmensageiros"
              aria-label="Instagram @novosmensageiros"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.tiktok.com/@novosmensageiros"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-800/60 hover:-translate-y-0.5 transition-all shadow-2xs"
              title="TikTok @novosmensageiros"
              aria-label="TikTok @novosmensageiros"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.youtube.com/@NovosMensageiros/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-800/60 hover:-translate-y-0.5 transition-all shadow-2xs"
              title="YouTube Shorts @novosmensageiros"
              aria-label="YouTube Shorts @novosmensageiros"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Brand signature */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-400 dark:text-slate-600">
            Novos Mensageiros • Amor e Caridade
          </p>
        </div>

      </div>
    </div>
  );
}
