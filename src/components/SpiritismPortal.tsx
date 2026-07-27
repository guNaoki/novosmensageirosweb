import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronUp
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
  
  // Hick's Law: Control showing all resources or only a limited number
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
      imageUrl: "/materials/evangelho.jpg"
    },
    {
      title: "O Livro dos Espíritos",
      category: 'books',
      description: "A obra filosófica fundamental do Espiritismo, escrita por Allan Kardec. Perguntas e respostas sobre as leis divinas.",
      link: "https://www.febnet.org.br/wp-content/uploads/2014/05/Livro-dos-Espiritos.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/materials/espiritos.jpg"
    },
    {
      title: "Nosso Lar (Filme)",
      category: 'movies',
      description: "A superprodução nacional que retrata visualmente a jornada do Dr. André Luiz na colônia espiritual homônima.",
      link: "https://www.youtube.com/watch?v=kHR9A8TXIF4",
      badge: "Filme 🎬",
      platforms: ["Disney+", "YouTube"],
      imageUrl: "/materials/nossolar_filme.jpg"
    },
    {
      title: "Como Superar Obstáculos da Alma",
      category: 'lectures',
      description: "Um direcionamento amoroso e prático sobre como enfrentar as dores íntimas, depressão e crises espirituais.",
      link: "https://www.youtube.com/watch?v=Gt_NkiM6Arc&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=4",
      badge: "Vídeo 🎤",
      imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Chico Xavier",
      category: 'movies',
      description: "A emocionante biografia de um dos maiores corações do Brasil, mostrando seu trabalho e amor incondicional.",
      link: "https://www.youtube.com/watch?v=k3VsW_DmwMk",
      badge: "Filme 🎬",
      platforms: ["Amazon Prime", "YouTube"],
      imageUrl: "/materials/chicoxavier_filme.jpg"
    },
    {
      title: "Nosso Lar (Livro)",
      category: 'books',
      description: "Pelo espírito André Luiz, psicografado por Chico Xavier. A clássica descrição da vida no mundo espiritual.",
      link: "https://www.oconsolador.com.br/linkfixo/bibliotecavirtual/chicoxavier/nossolar.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/materials/nossolar_livro.jpg"
    },
    {
      title: "Violetas na Janela",
      category: 'books',
      description: "Relato comovente e acolhedor de Patrícia sobre sua desencarnação e a descoberta da vida após a morte.",
      link: "http://www.feluzecaridade.net/download/Violetas_na_Janela.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/materials/violetas.jpg"
    },
    {
      title: "Influência dos Espíritos em Nossas Vidas",
      category: 'lectures',
      description: "Palestra espírita abordando como o plano espiritual influencia diretamente nosso cotidiano e pensamentos.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Vídeo 🎤",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "O Livro dos Médiuns",
      category: 'books',
      description: "O guia prático para as manifestações, comunicação e sintonias com o plano invisível.",
      link: "https://gelcip.com/wp-content/uploads/2018/11/o-livro-dos-mediuns-JHP.pdf",
      badge: "Livro PDF 📚",
      imageUrl: "/materials/mediuns.jpg"
    },
    {
      title: "Predestinado: Arigó e o Espírito do Dr. Fritz",
      category: 'movies',
      description: "O retrato impressionante de Zé Arigó e suas cirurgias e curas espirituais guiadas pelo Dr Fritz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Netflix"],
      imageUrl: "/materials/predestinado_filme.jpg"
    },
    {
      title: "Despertar Espiritual e Influências Invisíveis",
      category: 'lectures',
      description: "Entenda os mecanismos das influências sutis e como sintonizar com correntes de paz e equilíbrio.",
      link: "https://www.youtube.com/watch?v=2KVGuKMwdds&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=7",
      badge: "Vídeo 🎤",
      imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "As Mães de Chico Xavier",
      category: 'movies',
      description: "Três mães com histórias diferentes e dores intensas encontram consolo e respostas na mediunidade de Chico Xavier.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Netflix"],
      imageUrl: "/materials/maeschico_filme.jpg"
    },
    {
      title: "Divaldo - O Mensageiro da Paz",
      category: 'movies',
      description: "A trajetória do médium Divaldo Franco, desde a infância na Bahia até a consagração como embaixador da paz.",
      link: "https://www.youtube.com/watch?v=R4G9DWwIn9E&list=PLI-OgasY7T5seUPtpX50sm9Olw7J3IKy4&index=2",
      badge: "Filme 🎬",
      platforms: ["Aluguel Digital", "Netflix"],
      imageUrl: "/materials/divaldo_filme.jpg"
    }
  ];

  // Apply Hick's Law: Filtered resources based on tab
  const filteredResources = resources.filter(item => activeTab === 'all' || item.category === activeTab);
  
  // Apply Hick's Law: Limit displayed resources initially (e.g., to 3 items)
  const displayedResources = showAllResources ? filteredResources : filteredResources.slice(0, 3);

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
    <div className="bg-slate-50 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 text-white overflow-hidden bg-slate-950">
        {/* Full-bleed background image with clear visibility and dark overlay gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1920&auto=format&fit=crop" 
            alt="Novos Mensageiros Background" 
            className="w-full h-full object-cover opacity-55 scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="ambient-glow top-20 left-1/4 w-96 h-96 bg-primary/30 pointer-events-none"></div>
        <div className="ambient-glow bottom-20 right-1/4 w-[450px] h-[450px] bg-sky-500/20 pointer-events-none" style={{ animationDelay: '-4s' }}></div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 flex flex-col items-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl"
            >
              Novos Mensageiros: <span className="text-sky-400 relative inline-block hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                Encontre paz e respostas
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-sky-500/30 -z-10 rounded-full"></span>
              </span> para as inquietações da alma.
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium"
            >
              Seja bem-vindo ao portal Novos Mensageiros. Se você sente um vazio interno, está enfrentando perdas dolorosas ou busca compreender o sentido da vida, a Doutrina Espírita oferece explicações baseadas no amor, na evolução contínua e na imortalidade da nossa essência. Não há julgamentos aqui, apenas acolhimento.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center"
            >
              <a 
                href="https://wa.me/43991711228" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-hover text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-whatsapp/25 hover:shadow-2xl hover:shadow-whatsapp/35 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group text-base"
              >
                <MessageSquare className="w-5 h-5 mr-2.5 fill-white" />
                Conversar no WhatsApp (Acolhimento)
              </a>
              <a 
                href="#entender" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 active:scale-95 text-base"
              >
                Conhecer os Princípios
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O que é o Espiritismo Section */}
      <section id="entender" className="py-20 md:py-24 bg-white border-y border-slate-200/50 relative bg-grid-pattern overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary-light/60 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-700"></div>
        <div className="max-w-5xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Entendendo a Vida de Forma Lógica</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              Os 4 Pilares da Doutrina Espírita simplificados
            </h2>
            <p className="text-slate-600 leading-relaxed">
              O Espiritismo une ciência, filosofia e moral para explicar de onde viemos, o que estamos fazendo aqui e para onde vamos.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
          >
            {/* Pillar 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-bold text-primary-dark">Imortalidade da Alma</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  A morte biológica é apenas a perda da vestimenta física. Nós continuamos vivos como espíritos no plano espiritual, mantendo nossa identidade, laços de afeto e memórias. Os laços de amor nunca morrem.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-bold text-primary-dark">Reencarnação e Evolução</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Voltamos à vida corporal múltiplas vezes. A reencarnação não é um castigo, mas uma escola de bênçãos onde aprendemos com os erros do passado, adquirimos sabedoria e expandimos nossa capacidade de amar.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-lg font-bold text-primary-dark">Lei de Ação e Reação</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Somos 100% livres para escolher nossas atitudes, mas vinculados às consequências delas. Colhemos o bem que plantamos. Isso nos dá total controle e responsabilidade pela nossa própria evolução e futuro.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm">4</div>
                <h3 className="text-lg font-bold text-primary-dark">A Caridade como Roteiro</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Fazer o bem de forma ativa a nós mesmos e ao próximo é a essência do ensinamento de Jesus. A caridade material e moral (como o perdão, a tolerância e o consolo) é a chave definitiva da evolução.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Interactive Quote Section (Consolo Diário) */}
      <AnimatePresence mode="wait">
        {quoteIndex !== null && (
          <motion.section 
            id="consolo-diario"
            key="consolo-diario-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="py-12 bg-primary-dark text-white relative overflow-hidden"
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
                <span className="text-xs text-primary-light bg-primary/30 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  Mensagem Para o Seu Coração
                </span>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium italic tracking-tight leading-relaxed max-w-3xl mx-auto">
                  "{quotes[quoteIndex].text}"
                </blockquote>
                <cite className="block text-sm uppercase tracking-widest font-bold text-primary-light/80 not-italic">
                  — {quotes[quoteIndex].author}
                </cite>
              </motion.div>
              
              <button
                onClick={handleGenerateQuote}
                className="mt-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-lg border border-white/10 transition-all duration-200 cursor-pointer"
              >
                Receber Outra Mensagem
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. Find a Spiritist Center (FEB Link & Guide) */}
      <section id="buscar-ajuda" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/35 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-primary-light/60 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl p-8 md:p-12 text-left relative overflow-hidden space-y-8">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 text-primary/5 pointer-events-none">
              <MapPin className="w-64 h-64" />
            </div>

            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="text-primary font-bold text-sm tracking-wider uppercase">Procure Amparo Perto de Você</span>
              <h2 className="text-3xl font-extrabold text-primary-dark tracking-tight">
                Como encontrar uma Casa Espírita acolhedora?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As Casas Espíritas oferecem **Atendimento Fraterno** (uma conversa acolhedora e privativa), palestras de esclarecimento e **passes magnéticos** de equilíbrio. Todos os atendimentos são inteiramente gratuitos.
              </p>
            </div>

            {/* FEB Link & Direct Search Guide Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Card 1: Google Maps Guide */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-primary-dark">Busca no Google Maps</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Abra o Google Maps e pesquise por <strong>"Centro Espírita" + nome da sua cidade ou bairro</strong> para ver localizações, rotas e horários de funcionamento.
                </p>
              </div>

              {/* Card 2: FEB National Directory */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark">Federação Espírita Brasileira (FEB)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    A FEB reúne o cadastro oficial de federações estaduais e casas espíritas filiadas em todo o território nacional.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.febnet.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold text-xs px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full"
                  >
                    Acessar Portal Oficial da FEB
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Need immediate WhatsApp guide */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">Não achou ou prefere que a gente te ajude?</span>
              <a
                href="https://wa.me/43991711228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-whatsapp hover:text-whatsapp-hover flex items-center gap-1 group"
              >
                Mande uma mensagem e nós pesquisamos um centro pertinho para você
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Projeto Amor Ideal & Mei Mei Section */}
      <section id="amor-ideal" className="py-20 md:py-24 bg-white border-b border-slate-200/50 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-14">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Projetos Parceiros de Amparo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              Amor Ideal e Centro Espírita Mei Mei
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Iniciativas dedicadas à fraternidade, acolhimento espiritual e disseminação de amor e caridade para transformar vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1: Amor Ideal */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-5 hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6 fill-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark">Projeto Amor Ideal</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Uma obra dedicada ao amparo fraterno, fortalecimento de laços de afeto e promoção da caridade ativa na sociedade.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <a 
                  href="https://www.amorideal.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-extrabold text-primary hover:text-primary-hover group"
                >
                  Conhecer o Projeto Amor Ideal
                  <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Centro Espírita Mei Mei */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-5 hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark">Centro Espírita Mei Mei</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Instituição dedicada ao estudo espírita, palestras consoladoras, passe e trabalhos assistenciais inspirados no espírito Mei Mei.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60">
                <a 
                  href="https://www.centroespiritameimei.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-extrabold text-primary hover:text-primary-hover group"
                >
                  Visitar Centro Espírita Mei Mei
                  <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recommended Resources Section (Materiais Consoladores) */}
      <section id="materiais" className="py-20 md:py-24 bg-primary-light/10 border-y border-primary-light/20 relative bg-grid-pattern overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-500"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Luz, Conforto e Informação</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              Materiais Gratuitos Recomendados
            </h2>
            <p className="text-slate-600">
              Assista a palestras, leia obras fundamentais em PDF ou veja indicações de filmes inspiradores sobre a vida além da matéria.
            </p>
          </div>

          {/* Interactive resource category tabs */}
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
                    setShowAllResources(false); // Reset Hick's Law show all limit on tab change
                  }}
                  className={`relative inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer overflow-hidden ${
                    isSelected 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedResources.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover-lift text-left overflow-hidden group"
                >
                  <div className="flex flex-col">
                    {/* Cover/Placeholder Image with Zoom Effect */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[11px] font-bold text-primary-dark bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100">
                          {item.category === 'books' && <BookMarked className="w-3.5 h-3.5 text-primary" />}
                          {item.category === 'lectures' && <Video className="w-3.5 h-3.5 text-primary" />}
                          {item.category === 'movies' && <Film className="w-3.5 h-3.5 text-primary" />}
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <h4 className="text-lg font-bold text-primary-dark leading-snug group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-0 flex flex-col mt-auto">
                    {item.platforms && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.platforms.map((plat, pidx) => (
                          <span key={pidx} className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                            {plat}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="border-t border-slate-100 pt-4 w-full">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover group/link"
                      >
                        {item.category === 'books' ? 'Acessar Livro (PDF)' : item.category === 'movies' ? 'Onde Assistir' : 'Assistir Palestra'}
                        <ExternalLink className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Hick's Law: "Ver mais" toggle button to prevent choice overload */}
          {filteredResources.length > 3 && (
            <motion.div layout className="mt-12 text-center">
              <button
                onClick={() => setShowAllResources(!showAllResources)}
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-sm text-sm"
              >
                {showAllResources ? (
                  <>
                    Ver Menos Recursos
                    <ChevronUp className="w-4 h-4 ml-1.5" />
                  </>
                ) : (
                  <>
                    Mostrar Mais Recursos ({filteredResources.length - 3} itens)
                    <ChevronDown className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* 6. Recruiting Call to Action (Transição para Resgate) */}
      <section className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-5">
          <Heart className="w-96 h-96 fill-white" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Quer fazer a diferença conosco voluntariamente?</h2>
          <p className="text-primary-light/90 max-w-2xl mx-auto text-sm leading-relaxed">
            Se você já conhece a doutrina, representa uma Casa Espírita, atua profissionalmente como Psicólogo ou simplesmente deseja doar um pouco do seu tempo nas redes sociais para mapear dores e salvar vidas, conheça o nosso **Projeto de Resgate**.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-extrabold px-6 py-3 rounded-xl shadow-lg border border-primary-light/10 transition-all duration-300 cursor-pointer"
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
