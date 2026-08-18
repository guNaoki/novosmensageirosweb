import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_STATS } from '../data/stats';
import { 
  Heart, 
  MessageSquare, 
  Video, 
  BookOpen, 
  Film, 
  ArrowRight, 
  BookMarked, 
  MapPin, 
  Sparkles,
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
  ShieldAlert
} from 'lucide-react';

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
  
  // Control showing all resources or limited
  const [showAllResources, setShowAllResources] = useState(false);
  
  // Daily Quote state
  const [quoteIndex, setQuoteIndex] = useState<number | null>(null);

  const quotes = [
    { text: "Tudo passa. Essa dor também passará, e no amanhã colherás a luz das tuas lutas de hoje.", author: "Chico Xavier" },
    { text: "A caridade é o roteiro seguro para a paz do espírito.", author: "Allan Kardec" },
    { text: "Lembra-te de que o desânimo é barreira que te impede a visão das saídas de emergência.", author: "Emmanuel" },
    { text: "Não te aflijas pelo que parece perdido. Deus renova todas as coisas a cada amanhecer.", author: "Chico Xavier" },
    { text: "Nascer, morrer, renascer ainda e progredir sem cessar, tal é a lei.", author: "Allan Kardec" },
    { text: "A paciência na dor é a chave para abrir a porta da redenção interior.", author: "Joanna de Ângelis" },
    { text: "Guarda a esperança no coração. Nenhuma lágrima sincera é esquecida pelo Criador.", author: "André Luiz" }
  ];

  const handleGenerateQuote = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * quotes.length);
    } while (nextIndex === quoteIndex);
    setQuoteIndex(nextIndex);
  };

  const resources: ResourceItem[] = [
    {
      title: "O Evangelho Segundo o Espiritismo",
      category: 'books',
      description: "A explicação das máximas morais de Jesus Cristo sob a ótica da Doutrina Espírita e sua aplicação na vida.",
      link: "https://www.luzespirita.org.br/leitura/pdf/l3.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/recursos/livros/evangelho.png"
    },
    {
      title: "O Livro dos Espíritos",
      category: 'books',
      description: "A obra filosófica fundamental do Espiritismo, escrita por Allan Kardec. Perguntas e respostas sobre as leis divinas.",
      link: "https://www.febnet.org.br/wp-content/uploads/2014/05/Livro-dos-Espiritos.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/recursos/livros/livroespiritos.png"
    },
    {
      title: "Nosso Lar (Filme)",
      category: 'movies',
      description: "A superprodução nacional que retrata visualmente a jornada do Dr. André Luiz na colônia espiritual homônima.",
      link: "https://www.youtube.com/watch?v=kHR9A8TXIF4",
      badge: "Filme 🎬",
      platforms: ["Disney+", "YouTube"],
      imageUrl: "/recursos/filmes/Nosso lar.png"
    },
    {
      title: "Desequilíbrios Reais | Mayse Braga",
      category: 'lectures',
      description: "Como lidar com desequilíbrios emocionais e espirituais?",
      link: "https://www.youtube.com/watch?v=Gt_NkiM6Arc&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=4",
      badge: "Vídeo 🎤",
      imageUrl: "/recursos/palestras/maysereais.png"
    },
    {
      title: "Chico Xavier",
      category: 'movies',
      description: "A emocionante biografia de um dos maiores corações do Brasil, mostrando seu trabalho e amor incondicional.",
      link: "https://www.youtube.com/watch?v=k3VsW_DmwMk",
      badge: "Filme 🎬",
      platforms: ["Amazon Prime", "YouTube"],
      imageUrl: "/recursos/filmes/chico.png"
    },
    {
      title: "Nosso Lar (Livro)",
      category: 'books',
      description: "Pelo espírito André Luiz, psicografado por Chico Xavier. A clássica descrição da vida no mundo espiritual.",
      link: "https://www.oconsolador.com.br/linkfixo/bibliotecavirtual/chicoxavier/nossolar.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/recursos/livros/nossolarlivro.png"
    },
    {
      title: "Violetas na Janela",
      category: 'books',
      description: "Relato comovente e acolhedor de Patrícia sobre sua desencarnação e a descoberta da vida após a morte.",
      link: "http://www.feluzecaridade.net/download/Violetas_na_Janela.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/recursos/livros/violetas.png"
    },
    {
      title: "Tudo é Pensamento | Mayse Braga",
      category: 'lectures',
      description: "Você já parou para pensar no poder dos seus pensamentos? Descubra nesta palestra espírita.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Vídeo 🎤",
      imageUrl: "/recursos/palestras/maysepensamento.png"
    },
    {
      title: "O Livro dos Médiuns",
      category: 'books',
      description: "O guia prático para as manifestações, comunicação e sintonias com o plano invisível.",
      link: "https://gelcip.com/wp-content/uploads/2018/11/o-livro-dos-mediuns-JHP.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/recursos/livros/lviromediuns.png"
    },
    {
      title: "Predestinado: Arigó e o Espírito do Dr. Fritz",
      category: 'movies',
      description: "O retrato impressionante de Zé Arigó e suas cirurgias e curas espirituais guiadas pelo Dr Fritz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Netflix"],
      imageUrl: "/recursos/filmes/predestinado.png"
    },
    {
      title: "Chamado | Mayse Braga",
      category: 'lectures',
      description: "Entendendo as vozes interiores e a influência espiritual em nossas vidas.",
      link: "https://www.youtube.com/watch?v=2KVGuKMwdds&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=7",
      badge: "Vídeo 🎤",
      imageUrl: "/recursos/palestras/maysechamados.png"
    },
    {
      title: "As Mães de Chico Xavier",
      category: 'movies',
      description: "Três mães com histórias diferentes e dores intensas encontram consolo e respostas na mediunidade de Chico Xavier.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Netflix"],
      imageUrl: "/recursos/filmes/maesdechico.png"
    },
    {
      title: "Divaldo - O Mensageiro da Paz",
      category: 'movies',
      description: "A trajetória do médium Divaldo Franco, desde a infância na Bahia até a consagração como embaixador da paz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Aluguel Digital", "Netflix"],
      imageUrl: "/recursos/filmes/divaldo.png"
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

  // Custom TikTok brand icon
  const TikTok = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.92a6.34 6.34 0 0 0-5.06 6.16 6.34 6.34 1 0 11.4-3.83V8.12a8.27 8.27 0 0 0 4.77 1.52V6.19a4.85 4.85 0 0 1-1-.5z"/>
    </svg>
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden transition-colors duration-300">
      
      {/* 1. Hero Section (Apresentação Principal) */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 text-white overflow-hidden bg-slate-950">
        {/* Full-bleed background image with dark overlay gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1920&auto=format&fit=crop" 
            alt="Novos Mensageiros Background" 
            className="w-full h-full object-cover opacity-50 scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-transparent to-slate-950/85"></div>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="ambient-glow top-20 left-1/4 w-96 h-96 bg-primary/30 pointer-events-none"></div>
        <div className="ambient-glow bottom-20 right-1/4 w-[450px] h-[450px] bg-sky-500/20 pointer-events-none" style={{ animationDelay: '-4s' }}></div>

        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Novos Mensageiros — Portal Oficial</span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
              >
                Luz, Acolhimento e <br className="hidden sm:inline" />
                <span className="text-sky-400 relative inline-block hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                  Espiritismo
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-sky-500/30 -z-10 rounded-full"></span>
                </span> nas redes sociais.
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium"
              >
                Levamos ensinamentos da Doutrina Espírita de forma leve, profunda e acolhedora no Instagram, TikTok e YouTube. Um farol de luz e amparo para o seu coração.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
              >
                <a 
                  href="https://wa.me/43991711228" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-hover text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-xl shadow-whatsapp/25 hover:shadow-whatsapp/35 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-white" />
                  Falar no WhatsApp (Acolhimento)
                </a>

                <button 
                  onClick={() => {
                    const el = document.getElementById('nossa-historia');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 active:scale-95 text-sm cursor-pointer"
                >
                  Conhecer Nossa História
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <button 
                  onClick={() => {
                    const el = document.getElementById('entender');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 font-bold px-5 py-3.5 rounded-2xl transition-all duration-300 backdrop-blur-md text-sm cursor-pointer"
                >
                  Aprender Espiritismo 📘
                </button>
              </motion.div>
            </div>

            {/* Social Media Metrics Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-primary/30 rounded-3xl blur-3xl -z-10"></div>
              
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl p-6 space-y-6 text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-white">Alcance Digital</h3>
                    <p className="text-xs text-slate-400">Canal oficial @novosmensageiros</p>
                  </div>
                  <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    Redes Sociais
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 1 */}
                  <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 hover:border-sky-500/50 transition-colors">
                    <div className="bg-primary/20 w-10 h-10 rounded-xl flex items-center justify-center text-sky-400 mb-3">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-black text-white">+{SOCIAL_STATS.instagramFollowers}</div>
                    <div className="text-xs font-bold text-slate-300 mt-1">Seguidores no Instagram</div>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 hover:border-sky-500/50 transition-colors">
                    <div className="bg-primary/20 w-10 h-10 rounded-xl flex items-center justify-center text-sky-400 mb-3">
                      <TikTok className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-black text-white">3.7M</div>
                    <div className="text-xs font-bold text-slate-300 mt-1">Visualizações no TikTok</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. NOSSA HISTÓRIA & PROPÓSITO (Integrado na Home) */}
      <section id="nossa-historia" className="py-20 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-primary dark:text-sky-400 font-extrabold text-xs tracking-widest uppercase bg-primary/10 dark:bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-primary/20 dark:border-sky-500/20 inline-block">
              📜 Quem Somos & Como Nascemos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16"
          >
            {/* Step 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-lg border border-sky-500/20">
                  <CompassIcon className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">1. Sementes Digitais</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  O projeto nasceu com a missão simples de semear consolo, esperança e paz através de reflexões diárias da Doutrina Espírita no Instagram e TikTok.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm flex flex-col justify-between"
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
              className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm flex flex-col justify-between"
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

          {/* Social Proof Metric Banner */}
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-black text-sky-400">8 Voluntários</div>
              <div className="text-xs text-slate-300 font-medium">Equipe atenta na triagem de mensagens</div>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
              <div className="text-3xl md:text-4xl font-black text-emerald-400">+400 Pessoas</div>
              <div className="text-xs text-slate-300 font-medium">Acolhidas e orientadas no WhatsApp</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-black text-amber-400">3.7 Milhões</div>
              <div className="text-xs text-slate-300 font-medium">De visualizações de luz nas redes</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Consolo Diário (Mensagem Inspiradora Aleatória) */}
      <AnimatePresence mode="wait">
        {quoteIndex !== null && (
          <motion.section 
            id="consolo-diario"
            key="consolo-diario-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800"
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div 
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 py-8"
              >
                <span className="text-xs text-sky-400 bg-sky-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold border border-sky-500/30">
                  🕊️ Mensagem Para o Seu Coração
                </span>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium italic tracking-tight leading-relaxed max-w-3xl mx-auto text-slate-100">
                  "{quotes[quoteIndex].text}"
                </blockquote>
                <cite className="block text-sm uppercase tracking-widest font-bold text-sky-300/80 not-italic">
                  — {quotes[quoteIndex].author}
                </cite>
              </motion.div>
              
              <button
                onClick={handleGenerateQuote}
                className="mt-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-5 py-2.5 rounded-xl border border-white/15 transition-all duration-200 cursor-pointer"
              >
                Receber Outra Mensagem
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. O QUE É O ESPIRITISMO (Os 5 Princípios Básicos em Bento Grid) */}
      <section id="entender" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-800 relative bg-grid-pattern overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-700"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-primary dark:text-sky-400 font-extrabold text-xs tracking-widest uppercase bg-primary/10 dark:bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-primary/20 dark:border-sky-500/20 inline-block">
              📘 Entendendo a Vida de Forma Lógica
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Os 5 Princípios Básicos (Pilares) da Doutrina Espírita
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              O Espiritismo une ciência, filosofia e moral para explicar de onde viemos, o que estamos fazendo aqui e para onde vamos.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {/* Pillar 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  <Star className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">1. Existência de Deus</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Deus é a inteligência suprema e a causa primária de todas as coisas, sendo eterno, soberanamente justo e bom.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  <Flame className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">2. Imortalidade da Alma</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  O espírito sobrevive à morte do corpo físico, sendo o mundo espiritual a nossa origem e o nosso destino real.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  <CompassIcon className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">3. Pluralidade das Existências (Reencarnação)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Os espíritos voltam a nascer em novos corpos físicos várias vezes para aprender, reparar erros e evoluir moralmente.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  <MessageCircle className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">4. Comunicabilidade dos Espíritos (Mediunidade)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  É a possibilidade de intercâmbio entre o mundo físico e o mundo espiritual por meio de pessoas médiuns.
                </p>
              </div>
            </motion.div>

            {/* Pillar 5 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  <Globe className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">5. Pluralidade dos Mundos Habitados</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Existem outros planetas além da Terra no universo que possuem vida e espíritos em diferentes estágios de evolução.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. ACERVO DE MATERIAIS RECOMENDADOS (Com Busca ao Vivo) */}
      <section id="materiais" className="py-20 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <span className="text-primary dark:text-sky-400 font-extrabold text-xs tracking-widest uppercase bg-primary/10 dark:bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-primary/20 dark:border-sky-500/20 inline-block">
              📚 Luz, Conforto e Informação
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
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
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-sky-400 transition-all shadow-inner"
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(['all', 'lectures', 'books', 'movies'] as const).map((tab) => {
              const labelMap = {
                all: 'Todos os Recursos',
                lectures: 'Palestras 🎤',
                books: 'Livros PDF 📚',
                movies: 'Dicas de Filmes 🎬'
              };
              const Icon = tab === 'lectures' ? Video : tab === 'books' ? BookOpen : tab === 'movies' ? Film : Sparkles;
              const isSelected = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAllResources(false);
                  }}
                  className={`relative inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'bg-primary dark:bg-sky-500 text-white shadow-md' 
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
                          {item.category === 'books' && <BookMarked className="w-3.5 h-3.5 text-primary dark:text-sky-400" />}
                          {item.category === 'lectures' && <Video className="w-3.5 h-3.5 text-primary dark:text-sky-400" />}
                          {item.category === 'movies' && <Film className="w-3.5 h-3.5 text-primary dark:text-sky-400" />}
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
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

          {/* Fallback state when search yields no results */}
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

      {/* 6. ENCONTRAR UMA CASA ESPÍRITA */}
      <section id="buscar-ajuda" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xl p-8 md:p-12 text-left relative overflow-hidden space-y-8">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 text-primary/5 dark:text-sky-400/5 pointer-events-none">
              <MapPin className="w-64 h-64" />
            </div>

            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="text-primary dark:text-sky-400 font-extrabold text-xs tracking-wider uppercase">Procure Amparo Perto de Você</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Como encontrar uma Casa Espírita acolhedora?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                As Casas Espíritas oferecem <strong className="font-bold text-slate-800 dark:text-slate-100">Atendimento Fraterno</strong> (conversa privativa e acolhedora), palestras explicativas e <strong className="font-bold text-slate-800 dark:text-slate-100">passes magnéticos</strong> de reequilíbrio. Todos os serviços são 100% gratuitos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 space-y-3">
                <div className="bg-primary/10 text-primary dark:text-sky-400 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Busca no Google Maps</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Pesquise no Google Maps por <strong>"Centro Espírita" + sua cidade ou bairro</strong> para ver rotas e horários de funcionamento.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="bg-primary/10 text-primary dark:text-sky-400 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Federação Espírita Brasileira (FEB)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    A FEB reúne o cadastro oficial de casas espíritas filiadas em todo o Brasil.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.febnet.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold text-xs px-5 py-3 rounded-xl transition-all duration-300 shadow-md w-full"
                  >
                    Acessar Portal Oficial da FEB
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PROJETOS PARCEIROS (Amor Ideal & Mei Mei) */}
      <section id="amor-ideal" className="py-20 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Amor Ideal e Centro Espírita Mei Mei
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
              Iniciativas dedicadas à fraternidade, acolhimento espiritual e disseminação de amor ativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 shadow-md space-y-6 hover-lift flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-16 flex items-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm inline-flex items-center justify-center">
                    <img 
                      src="/amorideal.png" 
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
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-700">
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

            <div className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 shadow-md space-y-6 hover-lift flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="h-16 flex items-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm inline-flex items-center justify-center">
                    <img 
                      src="/meimei.png" 
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
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-700">
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

      {/* 8. RECRUITING CALL TO ACTION (Transição para Resgate) */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-t border-slate-800">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-5">
          <Heart className="w-96 h-96 fill-white" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Quer fazer a diferença conosco voluntariamente?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Se você deseja doar um pouco do seu tempo nas redes sociais para mapear dores e salvar vidas, seja como voluntário digital, Psicólogo parceiro ou Casa Espírita, conheça o nosso <strong className="font-extrabold text-white">Projeto de Resgate</strong>.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-extrabold px-6 py-3 rounded-xl shadow-lg border border-sky-400/20 transition-all duration-300 cursor-pointer"
            >
              Conhecer o Projeto de Resgate
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
