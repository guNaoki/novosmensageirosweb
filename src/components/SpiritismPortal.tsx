import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_STATS } from '../data/stats';
import {
  Heart,
  Video,
  BookOpen,
  Film,
  ArrowRight,
  BookMarked,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Star,
  Globe,
  Flame,
  MessageCircle,
  X,
  Compass as CompassIcon,
  ShieldAlert,
  Check,
  RefreshCw
} from 'lucide-react';
import Button from './ui/Button';

interface SpiritismPortalProps {
  onChangeRoute: (route: string) => void;
}

type TabType = 'all' | 'lectures' | 'books' | 'movies';

interface ResourceItem {
  title: string;
  category: TabType;
  description: string;
  link: string;
  badge?: string;
  platforms?: string[];
  imageUrl: string;
}

export default function SpiritismPortal({ onChangeRoute }: SpiritismPortalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // Parallax refs
  const heroRef = useRef<HTMLDivElement>(null);
  const principiosRef = useRef<HTMLDivElement>(null);

  // Parallax transforms for Hero (Movimento ampliado e perceptivel)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroBgY = useTransform(heroProgress, [0, 1], ["0px", "420px"]);
  const heroParticlesY = useTransform(heroProgress, [0, 1], ["0px", "-160px"]);

  // Parallax transforms for 5 Princípios
  const { scrollYProgress: principiosProgress } = useScroll({
    target: principiosRef,
    offset: ["start end", "end start"]
  });
  const principiosBgY = useTransform(principiosProgress, [0, 1], ["-160px", "160px"]);

  // Control showing all resources or limited
  const [showAllResources, setShowAllResources] = useState(false);

  // Active section spy for Desktop Left Sidebar Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'hero',
        'frase-kardec',
        'principios',
        'buscar-ajuda',
        'nossa-historia',
        'materiais',
        'fale-conosco',
        'amor-ideal'
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'frase-kardec', label: 'Caridade' },
    { id: 'principios', label: '5 Princípios' },
    { id: 'buscar-ajuda', label: 'Achar Centro' },
    { id: 'nossa-historia', label: 'História' },
    { id: 'materiais', label: 'Materiais' },
    { id: 'fale-conosco', label: 'Fale Conosco' },
    { id: 'amor-ideal', label: 'Parceiros' }
  ];

  const resources: ResourceItem[] = [
    {
      title: "O Evangelho Segundo o Espiritismo",
      category: 'books',
      description: "A explicação das máximas morais de Jesus Cristo sob a ótica da Doutrina Espírita e sua aplicação na vida.",
      link: "https://www.luzespirita.org.br/leitura/pdf/l3.pdf",
      badge: "Livro PDF",
      imageUrl: "/recursos/livros/evangelho.webp"
    },
    {
      title: "O Livro dos Espíritos",
      category: 'books',
      description: "A obra filosófica fundamental do Espiritismo, escrita por Allan Kardec. Perguntas e respostas sobre as leis divinas.",
      link: "https://www.febnet.org.br/wp-content/uploads/2014/05/Livro-dos-Espiritos.pdf",
      badge: "Livro PDF",
      imageUrl: "/recursos/livros/livroespiritos.webp"
    },
    {
      title: "Nosso Lar (Filme)",
      category: 'movies',
      description: "A superprodução nacional que retrata visualmente a jornada do Dr. André Luiz na colônia espiritual homônima.",
      link: "https://www.youtube.com/watch?v=kHR9A8TXIF4",
      badge: "Filme",
      platforms: ["Disney+", "YouTube"],
      imageUrl: "/recursos/filmes/Nosso lar.webp"
    },
    {
      title: "Desequilíbrios Reais | Mayse Braga",
      category: 'lectures',
      description: "Como lidar com desequilíbrios emocionais e espirituais com calma, autoconhecimento e fé?",
      link: "https://www.youtube.com/watch?v=Gt_NkiM6Arc&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=4",
      badge: "Palestra",
      imageUrl: "/recursos/palestras/maysereais.webp"
    },
    {
      title: "Chico Xavier",
      category: 'movies',
      description: "A emocionante biografia de um dos maiores corações do Brasil, mostrando seu trabalho e amor incondicional.",
      link: "https://www.youtube.com/watch?v=k3VsW_DmwMk",
      badge: "Filme",
      platforms: ["Amazon Prime", "YouTube"],
      imageUrl: "/recursos/filmes/chico.webp"
    },
    {
      title: "Nosso Lar (Livro)",
      category: 'books',
      description: "Pelo espírito André Luiz, psicografado por Chico Xavier. A clássica descrição da vida no mundo espiritual.",
      link: "https://www.oconsolador.com.br/linkfixo/bibliotecavirtual/chicoxavier/nossolar.pdf",
      badge: "Livro PDF",
      imageUrl: "/recursos/livros/nossolarlivro.webp"
    },
    {
      title: "Violetas na Janela",
      category: 'books',
      description: "Relato comovente e acolhedor de Patrícia sobre sua desencarnação e a descoberta da vida após a morte.",
      link: "http://www.feluzecaridade.net/download/Violetas_na_Janela.pdf",
      badge: "Livro PDF",
      imageUrl: "/recursos/livros/violetas.webp"
    },
    {
      title: "Tudo é Pensamento | Mayse Braga",
      category: 'lectures',
      description: "Você já parou para pensar no poder dos seus pensamentos? Descubra nesta palestra espírita consoladora.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Palestra",
      imageUrl: "/recursos/palestras/maysepensamento.webp"
    },
    {
      title: "O Livro dos Médiuns",
      category: 'books',
      description: "O guia prático para as manifestações, comunicação e sintonias com o plano invisível.",
      link: "https://gelcip.com/wp-content/uploads/2018/11/o-livro-dos-mediuns-JHP.pdf",
      badge: "Livro PDF",
      imageUrl: "/recursos/livros/lviromediuns.webp"
    },
    {
      title: "Predestinado: Arigó e o Espírito do Dr. Fritz",
      category: 'movies',
      description: "O retrato impressionante de Zé Arigó e suas cirurgias e curas espirituais guiadas pelo Dr Fritz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme",
      platforms: ["Netflix"],
      imageUrl: "/recursos/filmes/predestinado.webp"
    },
    {
      title: "Chamado | Mayse Braga",
      category: 'lectures',
      description: "Entendendo as vozes interiores e a influência espiritual positiva em nossas vidas.",
      link: "https://www.youtube.com/watch?v=2KVGuKMwdds&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=7",
      badge: "Palestra",
      imageUrl: "/recursos/palestras/maysechamados.webp"
    },
    {
      title: "As Mães de Chico Xavier",
      category: 'movies',
      description: "Três mães com histórias diferentes e dores intensas encontram consolo e respostas na mediunidade de Chico Xavier.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme",
      platforms: ["Netflix"],
      imageUrl: "/recursos/filmes/maesdechico.webp"
    },
    {
      title: "Divaldo - O Mensageiro da Paz",
      category: 'movies',
      description: "A trajetória do médium Divaldo Franco, desde a infância na Bahia até a consagração como embaixador da paz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme",
      platforms: ["Aluguel Digital", "Netflix"],
      imageUrl: "/recursos/filmes/divaldo.webp"
    }
  ];

  // Filter resources based on active tab and search query
  const filteredResources = resources.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = searchTerm.trim() === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const displayedResources = showAllResources ? filteredResources : filteredResources.slice(0, 6);

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  // Custom Instagram brand icon
  const Instagram = ({ className = "w-5 h-5" }: { className?: string }) => (
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

  // Custom TikTok brand icon (official Simple Icons path)
  const TikTok = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  // WhatsApp Icon SVG
  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.41 0-2.8-.36-4.03-1.05l-.29-.16-3 0.79.8-2.92-.19-.3a8.19 8.19 0 0 1-1.26-4.6c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 0.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );

  // 5 Princípios Básicos (Clássicos, Racionais e Sóbrios de Kardec)
  const principiosList = [
    {
      id: "01",
      title: "Existência de Deus",
      subtitle: "Inteligência Suprema",
      icon: Star,
      accentBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description: "Deus é a inteligência suprema e a causa primária de todas as coisas, soberanamente justo e bom."
    },
    {
      id: "02",
      title: "Imortalidade da Alma",
      subtitle: "Continuidade da Vida",
      icon: Flame,
      accentBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      description: "O espírito sobrevive à morte do corpo físico. O mundo espiritual é a origem e o destino da nossa consciência."
    },
    {
      id: "03",
      title: "Pluralidade das Existências",
      subtitle: "Reencarnação",
      icon: RefreshCw,
      accentBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      description: "Os espíritos voltam a nascer em novos corpos físicos para aprender, reparar equívocos e progredir moralmente."
    },
    {
      id: "04",
      title: "Comunicabilidade dos Espíritos",
      subtitle: "Mediunidade",
      icon: MessageCircle,
      accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "É a possibilidade de intercâmbio entre o plano físico e o mundo espiritual por meio da faculdade mediúnica."
    },
    {
      id: "05",
      title: "Pluralidade dos Mundos",
      subtitle: "Habitabilidade Universal",
      icon: Globe,
      accentBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description: "A Terra é apenas uma das incontáveis moradas que abrigam espíritos em diferentes graus de evolução no universo."
    }
  ];

  // Helper to extract clean metric numbers without placeholder labels
  const getCleanNumber = (val: string) => {
    return val.split(' - ')[0].trim();
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden transition-colors duration-300 relative">

      {/* ========================================================= */}
      {/* SUMÁRIO LATERAL DESKTOP MINIMALISTA (Left Quick Nav) */}
      {/* ========================================================= */}
      <aside
        className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-start space-y-2 pointer-events-auto select-none"
        aria-label="Sumário da Página"
      >
        <div className="flex flex-col items-center space-y-3 py-3 px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-2.5 focus:outline-none cursor-pointer text-left"
                title={item.label}
              >
                {/* Minimal dot / active pill */}
                <div
                  className={`transition-all duration-300 rounded-full ${isActive
                      ? 'w-2.5 h-6 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                      : 'w-2 h-2 bg-slate-400/40 dark:bg-slate-600/60 group-hover:bg-sky-400/70 group-hover:scale-125'
                    }`}
                />

                {/* Text Label on hover or active */}
                <span
                  className={`text-[11px] font-bold tracking-tight transition-all duration-200 whitespace-nowrap drop-shadow-sm ${isActive
                      ? 'text-sky-500 dark:text-sky-300 opacity-100 translate-x-0'
                      : 'text-slate-500 dark:text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none'
                    }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>


      {/* ========================================================= */}
      {/* 1. HERO SECTION (Céu Celestial com Paralaxe Funcional)    */}
      {/* ========================================================= */}
      <section
        id="hero"
        ref={heroRef}
        className="relative pt-32 pb-8 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-14 text-slate-900 dark:text-white overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/40 to-slate-50 dark:from-[#06152e]/90 dark:via-[#091e42]/65 dark:to-[#040d1f] transition-colors duration-300"
      >
        {/* Layer 1: Parallax Cloud Background Image */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -top-[40%] left-0 right-0 h-[180%] z-0 pointer-events-none will-change-transform"
        >
          <img
            src="/imagens-pagina/ceunuvem1.webp"
            alt="Nuvens de fundo celestial"
            className="w-full h-full object-cover object-center opacity-30 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-slate-50 dark:from-[#06152e]/85 dark:via-[#091e42]/50 dark:to-[#040d1f]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/80 via-transparent to-sky-50/80 dark:from-[#040d1f]/85 dark:via-transparent dark:to-[#040d1f]/85"></div>
        </motion.div>

        {/* Layer 2: Cosmic Particles & Drifting Stardust */}
        <motion.div
          style={{ y: heroParticlesY }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-30"></div>

          {/* Floating stardust motes */}
          <div className="absolute top-1/6 left-1/12 w-2 h-2 bg-sky-400 dark:bg-sky-300 rounded-full animate-drift-1 blur-[0.5px]"></div>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-sky-300/60 dark:bg-sky-200/60 rounded-full animate-drift-2 blur-[1px]"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300/80 dark:bg-amber-200/80 rounded-full animate-drift-1 blur-[0.5px]"></div>
          <div className="absolute top-2/3 left-1/3 w-3.5 h-3.5 bg-sky-200/70 dark:bg-white/50 rounded-full animate-drift-2 blur-[1px]"></div>
          <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-sky-400 dark:bg-sky-300 rounded-full animate-drift-1"></div>
          <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-blue-300/70 dark:bg-blue-200/70 rounded-full animate-drift-2 blur-[0.5px]"></div>
          <div className="absolute top-1/5 right-1/12 w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full animate-drift-1"></div>
          <div className="absolute top-4/5 left-1/6 w-2 h-2 bg-sky-300/60 dark:bg-white/60 rounded-full animate-drift-2"></div>

          {/* Ambient Glows */}
          <div className="ambient-glow top-12 left-1/4 w-[420px] h-[420px] bg-sky-500/15 dark:bg-sky-500/20 pointer-events-none"></div>
          <div className="ambient-glow bottom-10 right-1/4 w-[480px] h-[480px] bg-primary/15 dark:bg-primary/30 pointer-events-none" style={{ animationDelay: '-4s' }}></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] sm:leading-[1.12]"
              >
                Novos Mensageiros: <br className="hidden sm:inline" />
                <span className="text-sky-600 dark:text-sky-300 relative inline-block drop-shadow-sm">
                  Luz e Espiritismo
                </span> nas redes sociais.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal drop-shadow-xs"
              >
                Levamos ensinamentos da Doutrina Espírita de forma leve, profunda e acessível através de posts, vídeos e mensagens no Instagram, TikTok e YouTube Shorts. Um farol de esperança para quem busca respostas e consolo para a alma.
              </motion.p>

              {/* Clean Action Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                {/* WhatsApp Button */}
                <Button
                  variant="whatsapp"
                  size="md"
                  as="a"
                  href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20receber%20acolhimento%20e%20conversa%20fraterna."
                  target="_blank"
                  iconLeft={<WhatsAppIcon className="w-5 h-5 fill-white mr-1" />}
                >
                  Falar no WhatsApp (Acolhimento)
                </Button>

                {/* Projeto de Resgate CTA */}
                <Button
                  variant="secondary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
                  onClick={() => {
                    onChangeRoute('#/resgate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Conhecer o Projeto de Resgate
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Floating Cards (Dividem a tela 50/50 no celular) */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 relative flex flex-col items-center justify-center"
            >
              {/* Backlight glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-primary/20 to-purple-500/15 dark:from-sky-500/25 dark:via-primary/30 dark:to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

              <div className="w-full max-w-md relative grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-4">

                {/* Card 1: Instagram */}
                <motion.div
                  className="animate-float-1 bg-white/95 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-xl hover:border-pink-500/50 transition-all duration-300 text-left relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl pointer-events-none"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-2.5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md shadow-pink-500/25 flex-shrink-0">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 truncate flex items-center gap-1">
                          @novosmensageiros
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">Instagram</div>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-pink-500/20">
                      Ativa
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1.5">
                    <span className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      +{SOCIAL_STATS.instagramFollowers}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300">
                      seguidores
                    </span>
                  </div>
                  <p className="hidden sm:block text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Reflexões diárias e apoio nos comentários.
                  </p>
                </motion.div>

                {/* Card 2: TikTok */}
                <motion.div
                  className="animate-float-2 bg-white/95 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-xl hover:border-sky-500/50 transition-all duration-300 text-left relative overflow-hidden group ml-0 lg:ml-4"
                >
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-full blur-xl pointer-events-none"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-2.5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#00f2fe] via-[#050505] to-[#fe2c55] flex items-center justify-center text-white shadow-md shadow-cyan-500/25 flex-shrink-0">
                        <TikTok className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 truncate flex items-center gap-1">
                          @novosmensageiros
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">TikTok Oficial</div>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-sky-500/20">
                      Impacto
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1.5">
                    <span className="text-xl sm:text-3xl font-black text-primary dark:text-sky-400 tracking-tight leading-tight">
                      {getCleanNumber(SOCIAL_STATS.tiktokViews)}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300">
                      views
                    </span>
                  </div>
                  <p className="hidden sm:block text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Vídeos curtos e mensagens consoladoras.
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. CITAÇÃO ALLAN KARDEC                                    */}
      {/* ========================================================= */}
      <section
        id="frase-kardec"
        className="py-12 sm:py-16 bg-slate-50 dark:bg-[#040d1f] relative z-10 transition-colors duration-300 text-center overflow-hidden"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Aspas estilizadas flutuantes com movimento orgânico */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl font-serif text-sky-500/40 dark:text-sky-400/40 leading-none select-none mb-1 cursor-default"
            >
              “
            </motion.div>

            {/* Frase com revelação de palavras e tipografia editorial sóbria */}
            <blockquote className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug px-2 flex flex-wrap justify-center gap-x-2.5 gap-y-1 text-slate-800 dark:text-slate-100">
              {[
                { word: "Fora", highlight: false },
                { word: "da", highlight: false },
                { word: "caridade", highlight: true },
                { word: "não", highlight: false },
                { word: "há", highlight: false },
                { word: "salvação.", highlight: false }
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className={item.highlight ? "text-sky-600 dark:text-sky-300 font-extrabold" : "font-bold"}
                >
                  {item.word}
                </motion.span>
              ))}
            </blockquote>

            {/* Autor com linhas finas e acabamento requintado */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
              }}
              className="mt-4 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400"
            >
              <span className="h-px w-8 sm:w-12 bg-slate-200 dark:bg-slate-700/80"></span>
              <cite className="text-xs sm:text-sm font-semibold tracking-wider uppercase not-italic text-slate-600 dark:text-slate-300">
                Allan Kardec
              </cite>
              <span className="h-px w-8 sm:w-12 bg-slate-200 dark:bg-slate-700/80"></span>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient de transição suave para a seção dos Princípios */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:via-[#040d1f]/50 dark:to-slate-950 pointer-events-none"></div>
      </section>


      {/* ========================================================= */}
      {/* 3. OS 5 PILARES (Fundo Nuvem ceunuvem2 + Parallax Limpo)   */}
      {/* ========================================================= */}
      <section
        id="principios"
        ref={principiosRef}
        className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      >
        {/* Parallax Cloud Background */}
        <motion.div
          style={{ y: principiosBgY }}
          className="absolute -top-[40%] left-0 right-0 h-[180%] z-0 pointer-events-none will-change-transform"
        >
          <img
            src="/imagens-pagina/ceunuvem2.webp"
            alt="Nuvens de fundo dos 5 pilares"
            className="w-full h-full object-cover object-center opacity-25 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-slate-50/30 to-slate-50 dark:from-slate-950/85 dark:via-slate-950/60 dark:to-slate-950"></div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="ambient-glow top-20 right-10 w-96 h-96 bg-sky-500/10 pointer-events-none z-0"></div>



        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Header Sóbrio e Humano (Sem badges artificiais) */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary-dark dark:text-white">
              Os 5 Princípios Básicos
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal">
              O Espiritismo une ciência, filosofia e moral para explicar as leis naturais que regem a existência humana e espiritual.
            </p>
          </div>

          {/* Cards Sóbrios e Diretos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {principiosList.map((principio, idx) => {
              const Icon = principio.icon;
              const isLarge = idx === 4;

              return (
                <motion.div
                  key={principio.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 dark:hover:border-sky-500/40 p-7 shadow-md hover:shadow-xl flex flex-col justify-between group transition-all duration-300 ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                        {principio.id}
                      </span>
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${principio.accentBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-sky-300 transition-colors">
                        {principio.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary dark:text-sky-400/80 mt-0.5">
                        {principio.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-800 pt-4">
                      {principio.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* 4. ENCONTRAR UMA CASA ESPÍRITA (Buscar Ajuda Perto) */}
      {/* ========================================================= */}
      <section
        id="buscar-ajuda"
        className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl p-8 md:p-12 text-left relative overflow-hidden space-y-8">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 text-sky-500/5 pointer-events-none">
              <MapPin className="w-64 h-64" />
            </div>

            <div className="space-y-3 max-w-2xl relative z-10">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Como encontrar uma Casa Espírita acolhedora?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                As Casas Espíritas oferecem <strong className="font-bold text-slate-800 dark:text-slate-100">Atendimento Fraterno</strong> (uma conversa privativa, amiga e acolhedora), palestras consoladoras e <strong className="font-bold text-slate-800 dark:text-slate-100">passes magnéticos</strong> para reequilíbrio energético. Todos os serviços são 100% gratuitos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 space-y-3">
                <div className="bg-sky-500/10 text-sky-600 dark:text-sky-400 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Busca no Google Maps</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Pesquise no Google Maps por <strong>"Centro Espírita" + sua cidade ou bairro</strong> para verificar rotas, avaliações e dias de reuniões públicas.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="bg-sky-500/10 text-sky-600 dark:text-sky-400 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Federação Espírita Brasileira (FEB)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    A FEB reúne o cadastro oficial de federações estaduais e centros espíritas filiados em todo o Brasil.
                  </p>
                </div>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    as="a"
                    href="https://www.febnet.org.br/"
                    target="_blank"
                    className="w-full"
                    iconRight={<ExternalLink className="w-4 h-4 ml-1" />}
                  >
                    Acessar Portal Oficial da FEB
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 5. NOSSA HISTÓRIA & PROPÓSITO */}
      {/* ========================================================= */}
      <section
        id="nossa-historia"
        className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
      >
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A história por trás dos Novos Mensageiros
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Como um canal de divulgação da Doutrina Espírita nas redes sociais deparou-se com a urgência de acolher e salvar vidas no silêncio dos comentários digitais.
            </p>
          </div>

          {/* Storytelling Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-8"
          >
            {/* Step 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-lg border border-sky-500/20">
                  <CompassIcon className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">1. Sementes Digitais</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  O projeto nasceu com a missão de semear consolo, esperança e paz através de reflexões diárias da Doutrina Espírita no Instagram e TikTok.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center font-black text-lg border border-red-500/20">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">2. A Ponta do Iceberg</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ao viralizarmos conteúdos sobre o vazio da alma e a depressão, os comentários revelaram um pedido de socorro silencioso de centenas de pessoas em sofrimento profundo.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-lg border border-emerald-500/20">
                  <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500/20" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">3. A Corrente de Resgate</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Criamos uma operação de busca ativa e escuta fraterna para identificar desabafos, dar suporte imediato via WhatsApp e encaminhar para atendimento especializado.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* 6. INSTAGRAM POSTS SHOWCASE (Ocultado temporariamente para testes) */}
      {/* 
      <section
        id="feed-instagram"
        className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800 relative overflow-hidden"
      >
        ...
      </section>
      */}


      {/* ========================================================= */}
      {/* 7. ACERVO DE MATERIAIS RECOMENDADOS */}
      {/* ========================================================= */}
      <section
        id="materiais"
        className="py-20 md:py-28 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
      >
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Materiais Gratuitos Recomendados
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Assista a palestras, leia obras fundamentais em PDF ou veja indicações de filmes inspiradores sobre a vida espiritual.
            </p>
          </div>

          {/* Interactive Live Search Bar */}
          <div className="max-w-md mx-auto mb-8 relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Pesquisar por título ou palavra-chave (ex: Kardec, Nosso Lar)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Sem emojis) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(['all', 'lectures', 'books', 'movies'] as const).map((tab) => {
              const labelMap = {
                all: 'Todos os Recursos',
                lectures: 'Palestras',
                books: 'Livros em PDF',
                movies: 'Filmes e Documentários'
              };
              const Icon = tab === 'lectures' ? Video : tab === 'books' ? BookOpen : tab === 'movies' ? Film : BookMarked;
              const isSelected = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAllResources(false);
                  }}
                  className={`relative inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${isSelected
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                >
                  {tab !== 'all' && <Icon className="w-4 h-4 mr-1.5" />}
                  {labelMap[tab]}
                </button>
              );
            })}
          </div>

          {/* Resources Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            <AnimatePresence mode="popLayout">
              {displayedResources.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.title}
                  className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm flex flex-col justify-between hover-lift overflow-hidden group"
                >
                  <div className="flex flex-col">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100 dark:border-slate-800">
                          {item.category === 'books' && <BookMarked className="w-3.5 h-3.5 text-sky-400" />}
                          {item.category === 'lectures' && <Video className="w-3.5 h-3.5 text-sky-400" />}
                          {item.category === 'movies' && <Film className="w-3.5 h-3.5 text-sky-400" />}
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex flex-col mt-auto">
                    {item.platforms && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.platforms.map((plat, pidx) => (
                          <span key={pidx} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 border border-slate-300/60 dark:border-slate-600/60 px-2 py-0.5 rounded">
                            {plat}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="border-t border-slate-200/60 dark:border-slate-700/60 pt-4 w-full">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-extrabold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                      >
                        {item.category === 'books' ? 'Acessar Livro (PDF)' : item.category === 'movies' ? 'Onde Assistir' : 'Assistir Palestra'}
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Fallback state */}
          {displayedResources.length === 0 && (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
              Nenhum material encontrado para "<span className="font-semibold">{searchTerm}</span>". Tente pesquisar com outros termos.
            </div>
          )}

          {/* "Ver mais" toggle button */}
          {filteredResources.length > 6 && (
            <motion.div layout className="mt-10 text-center">
              <button
                onClick={() => setShowAllResources(!showAllResources)}
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-sm text-xs"
              >
                {showAllResources ? (
                  <>
                    Ver Menos Recursos
                    <ChevronUp className="w-4 h-4 ml-1.5" />
                  </>
                ) : (
                  <>
                    Mostrar Mais Recursos ({filteredResources.length - 6} itens)
                    <ChevronDown className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>
            </motion.div>
          )}

        </div>
      </section>


      {/* ========================================================= */}
      {/* 8. FALE CONOSCO (Atendimento Fraterno & WhatsApp)         */}
      {/* ========================================================= */}
      <section
        id="fale-conosco"
        className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-emerald-500/20">
                <WhatsAppIcon className="w-7 h-7 fill-emerald-600 dark:fill-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Fale Conosco no WhatsApp
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Precisa de uma conversa fraterna, apoio emocional ou esclarecimento sobre a Doutrina Espírita? Nossa equipe de voluntários está disponível para te ouvir com carinho, respeito e discrição.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2 max-w-md mx-auto">
              <Button
                variant="whatsapp"
                size="lg"
                as="a"
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20equipe%20dos%20Novos%20Mensageiros."
                target="_blank"
                className="w-full text-sm sm:text-base py-4 shadow-lg shadow-emerald-500/20"
                iconLeft={<WhatsAppIcon className="w-5 h-5 fill-white mr-1.5" />}
              >
                Conversar no WhatsApp (Atendimento Fraterno)
              </Button>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Conversa confidencial</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Acolhimento sem julgamentos</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 9. RECRUITING CALL TO ACTION (Transição para Resgate) */}
      {/* ========================================================= */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-t border-slate-800">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-5 pointer-events-none">
          <Heart className="w-96 h-96 fill-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Quer fazer a diferença conosco voluntariamente?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Se você deseja doar um pouco do seu tempo nas redes sociais para mapear dores e salvar vidas, seja como voluntário digital, Psicólogo parceiro ou Casa Espírita, conheça o nosso <strong className="font-extrabold text-white">Projeto de Resgate</strong>.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Conhecer o Projeto de Resgate
            </Button>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 10. PROJETOS PARCEIROS (Amor Ideal & Mei Mei) */}
      {/* ========================================================= */}
      <section
        id="amor-ideal"
        className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Amor Ideal e Centro Espírita Mei Mei
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
              Iniciativas parceiras dedicadas à fraternidade, acolhimento espiritual e disseminação de amor ativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-md space-y-6 hover-lift flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-16 flex items-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm inline-flex items-center justify-center">
                    <img
                      src="/amorideal.webp"
                      alt="Projeto Amor Ideal"
                      className="h-10 w-auto object-contain max-w-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Projeto Amor Ideal</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Uma obra dedicada ao amparo fraterno, fortalecimento de laços de afeto e promoção da caridade ativa na sociedade.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800">
                <a
                  href="https://www.amorideal.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-extrabold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                >
                  Conhecer o Projeto Amor Ideal
                  <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-md space-y-6 hover-lift flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-16 flex items-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm inline-flex items-center justify-center">
                    <img
                      src="/meimei.webp"
                      alt="Centro Espírita Mei Mei"
                      className="h-10 w-auto object-contain max-w-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Centro Espírita Mei Mei</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Instituição dedicada ao estudo espírita, palestras consoladoras, passe e trabalhos assistenciais inspirados no espírito Mei Mei.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800">
                <a
                  href="https://www.centroespiritameimei.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-extrabold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                >
                  Visitar Centro Espírita Mei Mei
                  <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
