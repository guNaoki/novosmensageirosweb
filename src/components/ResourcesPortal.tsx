import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ExternalLink,
  Search,
  X,
  BookOpen,
  Film,
  Video,
  BookMarked,
  Heart,
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Button from './ui/Button';

interface ResourcesPortalProps {
  onChangeRoute: (route: string) => void;
}

export interface ResourceItem {
  title: string;
  category: 'books' | 'movies' | 'lectures';
  description: string;
  link: string;
  badge: string;
  platforms?: string[];
  imageUrl: string;
}

const RESOURCES_DATA: ResourceItem[] = [
  {
    title: "O Evangelho Segundo o Espiritismo",
    category: 'books',
    description: "A explicação das máximas morais de Jesus Cristo sob a ótica da Doutrina Espírita e sua aplicação consoladora na vida.",
    link: "https://www.luzespirita.org.br/leitura/pdf/l3.pdf",
    badge: "Livro PDF",
    imageUrl: "/recursos/livros/evangelho.webp"
  },
  {
    title: "O Livro dos Espíritos",
    category: 'books',
    description: "A obra filosófica fundamental do Espiritismo, escrita por Allan Kardec. Perguntas e respostas sobre as leis divinas e o destino humano.",
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
    description: "Como lidar com desequilíbrios emocionais e espirituais com calma, autoconhecimento e fé no amparo superior?",
    link: "https://www.youtube.com/watch?v=Gt_NkiM6Arc&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=4",
    badge: "Palestra",
    imageUrl: "/recursos/palestras/maysereais.webp"
  },
  {
    title: "Chico Xavier (Filme)",
    category: 'movies',
    description: "A emocionante biografia de um dos maiores corações do Brasil, retratando sua dedicação incansável e amor fraterno.",
    link: "https://www.youtube.com/watch?v=k3VsW_DmwMk",
    badge: "Filme",
    platforms: ["Amazon Prime", "YouTube"],
    imageUrl: "/recursos/filmes/chico.webp"
  },
  {
    title: "Nosso Lar (Livro)",
    category: 'books',
    description: "Pelo espírito André Luiz, psicografado por Chico Xavier. A clássica descrição detalhada da vida e das tarefas no mundo espiritual.",
    link: "https://www.oconsolador.com.br/linkfixo/bibliotecavirtual/chicoxavier/nossolar.pdf",
    badge: "Livro PDF",
    imageUrl: "/recursos/livros/nossolarlivro.webp"
  },
  {
    title: "Violetas na Janela",
    category: 'books',
    description: "Relato comovente e acolhedor de Patrícia sobre sua desencarnação e a descoberta reconfortante da continuidade da vida.",
    link: "http://www.feluzecaridade.net/download/Violetas_na_Janela.pdf",
    badge: "Livro PDF",
    imageUrl: "/recursos/livros/violetas.webp"
  },
  {
    title: "Tudo é Pensamento | Mayse Braga",
    category: 'lectures',
    description: "Você já parou para pensar no poder dos seus pensamentos? Descubra nesta palestra espírita consoladora como cultivar vibrações de paz.",
    link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
    badge: "Palestra",
    imageUrl: "/recursos/palestras/maysepensamento.webp"
  },
  {
    title: "O Livro dos Médiuns",
    category: 'books',
    description: "O guia prático e experimental para o estudo das manifestações espirituais e a prática consciente da mediunidade.",
    link: "https://gelcip.com/wp-content/uploads/2018/11/o-livro-dos-mediuns-JHP.pdf",
    badge: "Livro PDF",
    imageUrl: "/recursos/livros/lviromediuns.webp"
  },
  {
    title: "Predestinado: Arigó e o Espírito do Dr. Fritz",
    category: 'movies',
    description: "O retrato impressionante de Zé Arigó e suas cirurgias e curas espirituais guiadas pelo Dr. Fritz no interior de Minas Gerais.",
    link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
    badge: "Filme",
    platforms: ["Netflix", "YouTube"],
    imageUrl: "/recursos/filmes/predestinado.webp"
  },
  {
    title: "As Mães de Chico Xavier",
    category: 'movies',
    description: "Três mães veem suas histórias se cruzarem ao buscarem o conforto de Chico Xavier diante de perdas dilacerantes.",
    link: "https://www.youtube.com/watch?v=kHR9A8TXIF4",
    badge: "Filme",
    platforms: ["Globoplay", "YouTube"],
    imageUrl: "/recursos/filmes/maesdechico.webp"
  },
  {
    title: "Divaldo: O Mensageiro da Paz",
    category: 'movies',
    description: "A trajetória de vida e missão de amor e oratória do médium Divaldo Franco em favor da infância desamparada e do Evangelho.",
    link: "https://www.youtube.com/watch?v=kHR9A8TXIF4",
    badge: "Filme",
    platforms: ["Star+", "YouTube"],
    imageUrl: "/recursos/filmes/divaldo.webp"
  },
  {
    title: "Chamados à Vida | Mayse Braga",
    category: 'lectures',
    description: "Uma mensagem tocante de renovação interior, superação de angústias e redescoberta do sentido sagrado de viver.",
    link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
    badge: "Palestra",
    imageUrl: "/recursos/palestras/maysechamados.webp"
  }
];

export default function ResourcesPortal({ onChangeRoute }: ResourcesPortalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'books' | 'movies' | 'lectures'>('all');
  const [showAllResources, setShowAllResources] = useState(false);

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // Filtered resources
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeTab]);

  const displayedResources = showAllResources
    ? filteredResources
    : filteredResources.slice(0, 6);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden text-left transition-colors duration-300 min-h-screen">

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Editorial & Acolhedora)                    */}
      {/* ========================================================= */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-gradient-to-b from-sky-100/60 via-blue-50/20 to-slate-50 dark:from-[#06152e]/90 dark:via-[#081b3a]/60 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-b border-slate-200/60 dark:border-slate-800/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/imagens-pagina/ceunuvem1.webp"
            alt="Céu celestial sereno"
            className="w-full h-full object-cover opacity-20 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen"
          />
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-300 text-xs font-semibold"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Apoio Prático, Casas Espíritas & Estudo Gratuito</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white"
            >
              Recursos de Luz & <br />
              <span className="font-serif italic font-normal text-primary dark:text-sky-300">
                Biblioteca Digital
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
            >
              Tudo o que você precisa para encontrar apoio presencial em um Centro Espírita ou aprofundar sua alma através de obras fundamentais em PDF, filmes e palestras consoladoras. Tudo 100% gratuito e desinteressado.
            </motion.p>

            {/* Quick section jumps */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollToSection('encontrar-centro')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:border-sky-500/40 shadow-xs transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>Encontrar Casa Espírita</span>
              </button>

              <button
                onClick={() => scrollToSection('biblioteca-digital')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:border-sky-500/40 shadow-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Livros, Filmes & Palestras</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ENCONTRAR UMA CASA ESPÍRITA (Acolhimento Presencial)     */}
      {/* ========================================================= */}
      <section
        id="encontrar-centro"
        className="py-16 sm:py-24 scroll-mt-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Acolhimento Presencial e Fraterno</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Como encontrar uma Casa Espírita acolhedora?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              As Casas Espíritas são portos de paz abertos a todas as pessoas, independentemente de religião ou crença anterior.
            </p>
          </div>

          {/* Explanation Banner: O que esperar */}
          <div className="mb-10 bg-white/80 dark:bg-[#0B132B]/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-500" />
              O que você encontra em uma Casa Espírita?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-slate-600 dark:text-slate-300 pt-2">
              <div className="space-y-1.5 border-l-2 border-sky-500/50 pl-3">
                <strong className="text-slate-900 dark:text-white block font-semibold">1. Atendimento Fraterno</strong>
                <p className="text-xs leading-relaxed font-normal">Uma conversa individual, confidencial e fraterna com voluntários preparados para ouvir sem julgar.</p>
              </div>
              <div className="space-y-1.5 border-l-2 border-indigo-500/50 pl-3">
                <strong className="text-slate-900 dark:text-white block font-semibold">2. Palestras Consoladoras</strong>
                <p className="text-xs leading-relaxed font-normal">Explicações claras sobre as leis da vida, a dor e a esperança moral, abertas ao público geral.</p>
              </div>
              <div className="space-y-1.5 border-l-2 border-emerald-500/50 pl-3">
                <strong className="text-slate-900 dark:text-white block font-semibold">3. Passes Magnéticos</strong>
                <p className="text-xs leading-relaxed font-normal">Transmissão de energias espirituais benéficas de paz e alívio para o reequilíbrio físico e psíquico.</p>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Nenhum serviço ou atendimento espírita é cobrado. A regra kardequiana é estrita: <em>“Dai de graça o que de graça recebestes.”</em></span>
            </div>
          </div>

          {/* Action Cards: Google Maps & FEB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option 1: Google Maps */}
            <div className="bg-white dark:bg-[#0B132B]/90 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                  01 • Busca Direta por Proximidade
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Google Maps na sua região</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Abra o mapa para localizar os centros espíritas mais próximos do seu bairro, horários de reuniões públicas, dias de passe e avaliações de frequentadores.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  as="a"
                  href="https://www.google.com/maps/search/centro+espirita"
                  target="_blank"
                  className="w-full justify-center"
                  iconRight={<ExternalLink className="w-4 h-4 ml-1" />}
                >
                  Buscar Centro no Google Maps
                </Button>
              </div>
            </div>

            {/* Option 2: FEB */}
            <div className="bg-white dark:bg-[#0B132B]/90 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                  02 • Diretório Institucional Oficial
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Federação Espírita Brasileira</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  A FEB reúne o cadastro oficial de todas as federações estaduais do Brasil e de casas espíritas federadas e regulares em todo o território nacional.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href="https://www.febnet.org.br/"
                  target="_blank"
                  className="w-full justify-center"
                  iconRight={<ExternalLink className="w-4 h-4 ml-1" />}
                >
                  Acessar Diretório Oficial da FEB
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BIBLIOTECA DIGITAL ESPÍRITA (Livros, Filmes, Palestras) */}
      {/* ========================================================= */}
      <section
        id="biblioteca-digital"
        className="py-16 sm:py-24 scroll-mt-20 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Biblioteca Digital de Obras & Estudos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Materiais Gratuitos Recomendados
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Obras fundamentais em PDF, filmes e palestras para iluminar a mente e consolar o coração.
            </p>
          </div>

          {/* Live Search Bar */}
          <div className="max-w-md mx-auto mb-6 relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Pesquisar por título, autor ou assunto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                  title="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(['all', 'books', 'movies', 'lectures'] as const).map((tab) => {
              const labelMap = {
                all: 'Todos os Recursos',
                books: 'Livros em PDF',
                movies: 'Filmes e Séries',
                lectures: 'Palestras'
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
                  className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-primary dark:bg-sky-500 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-sky-500/30'
                  }`}
                >
                  {tab !== 'all' && <Icon className="w-3.5 h-3.5 mr-1.5" />}
                  {labelMap[tab]}
                </button>
              );
            })}
          </div>

          {/* Resources Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            <AnimatePresence mode="popLayout">
              {displayedResources.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={item.title}
                  className="bg-white dark:bg-[#0B132B]/85 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Image Banner */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2.5 left-3 z-10">
                        <span className="font-sans text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full tracking-wider uppercase border border-white/15">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-5 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      as="a"
                      href={item.link}
                      target="_blank"
                      className="w-full justify-center text-xs"
                      iconRight={<ExternalLink className="w-3.5 h-3.5 ml-1" />}
                    >
                      {item.category === 'books' ? 'Baixar Livro PDF' : 'Assistir Conteúdo'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Nenhum recurso encontrado para a pesquisa <strong>"{searchTerm}"</strong>.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="text-primary dark:text-sky-400 text-xs font-semibold underline cursor-pointer"
              >
                Limpar filtros e ver todos os materiais
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredResources.length > 6 && !showAllResources && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="md"
                onClick={() => setShowAllResources(true)}
              >
                Ver Todos os Materiais ({filteredResources.length})
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CONVITE AO ACOLHIMENTO E PROJETO RESGATE                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-sky-400 uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-red-500" />
            <span>Escuta e Amparo Fraterno</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sentindo o coração pesado ou precisando de conversa?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
            Se além de estudar você estiver buscando alguém para desabafar, a equipe voluntária dos Novos Mensageiros está à disposição no WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="whatsapp"
              size="md"
              as="a"
              href="https://wa.me/43991711228?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20Recursos%20e%20gostaria%20de%20uma%20conversa%20fraterna."
              target="_blank"
            >
              Falar no WhatsApp (Acolhimento)
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                onChangeRoute('/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Conhecer o Projeto de Resgate
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
