import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart, Compass, Users, ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

interface HistoryPortalProps {
  onChangeRoute: (route: string) => void;
}

export default function HistoryPortal({ onChangeRoute }: HistoryPortalProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 50%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // Framer Motion variants
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

  const timelineItems = [
    {
      year: "O Despertar",
      title: "Sementes Digitais",
      description: "O projeto Novos Mensageiros foi criado com o propósito simples de divulgar o Espiritismo de forma leve e acolhedora nas redes sociais (Instagram e TikTok), levando gotas de esperança para a correria do cotidiano.",
      icon: Compass,
      color: "bg-primary/10 text-primary dark:bg-sky-500/20 dark:text-sky-400"
    },
    {
      year: "O Sinal de Alerta",
      title: "A Ponta do Iceberg",
      description: "Ao publicarmos conteúdos voltados para a depressão e o vazio da alma, os posts viralizaram. Nos comentários, identificamos um grito silencioso: centenas de desabafos de pessoas em sofrimento profundo e ideação suicida.",
      icon: Heart,
      color: "bg-red-50 text-alert-red dark:bg-red-950/60 dark:text-red-400"
    },
    {
      year: "A Mobilização",
      title: "Os Primeiros Guardiões",
      description: "Uma pequena equipe enxuta de voluntários se reuniu de forma emergencial. Passamos a monitorar os comentários 24 horas por dia, enviando mensagens de resgate no direct e abrindo canais de escuta fraterna via WhatsApp.",
      icon: Users,
      color: "bg-primary-light text-primary-dark dark:bg-sky-950 dark:text-sky-300"
    },
    {
      year: "O Futuro",
      title: "Expandindo os Horizontes",
      description: "Com mais de 100 pessoas acolhidas e milhões de visualizações, a estrutura atual atingiu o limite. Decidimos criar esta plataforma para recrutar novos voluntários, parceiros clínicos e Casas Espíritas para ampliar esse farol de luz.",
      icon: Star,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden text-left transition-colors duration-300">
      
      {/* 1. Hero Section with parallax-style background */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Full-bleed background image with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
            alt="History pathway background" 
            className="w-full h-full object-cover opacity-25 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-sky-50/90 to-slate-50 dark:from-slate-950/60 dark:via-slate-950/90 dark:to-slate-950"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-35"></div>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="ambient-glow top-10 right-1/4 w-[350px] h-[350px] bg-primary/20 dark:bg-primary/30 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left relative z-10">

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white"
              >
                A história por trás da <br />
                <span className="text-primary dark:text-sky-300 italic relative inline-block hover:scale-[1.02] hover:-skew-x-[6deg] transition-all duration-300 cursor-default select-none">
                  Rede de Resgate
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl"
              >
                Como um canal de divulgação espírita nas redes sociais deparou-se com a urgência de acolher e salvar vidas no silêncio dos comentários digitais.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
                  onClick={() => {
                    const el = document.getElementById('linha-tempo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explorar Linha do Tempo
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    onChangeRoute('#/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Voltar ao Início
                </Button>
              </motion.div>
            </div>

            {/* Right Visual Image Frame */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/10 to-primary/20 rounded-3xl blur-3xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group aspect-video lg:aspect-square max-w-[450px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" 
                  alt="Typewriter letters history" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent flex flex-col justify-end p-6 text-left">
                  <span className="text-[10px] font-bold tracking-widest text-primary-light/80 uppercase">Nosso Início</span>
                  <p className="text-white text-sm font-semibold leading-relaxed mt-1">
                    "Gotas de esperança nascidas no ambiente digital para confortar os corações."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O Manifesto / A Revelação */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 relative overflow-hidden bg-grid-pattern border-b border-slate-200/70 dark:border-slate-800 transition-colors duration-300">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-light/45 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-100/30 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-700"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-6 space-y-6">
              <h2 className="text-3xl font-extrabold text-primary-dark dark:text-white tracking-tight leading-tight">
                De um post no TikTok ao resgate de uma alma em aflição.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                As redes sociais são repletas de filtros e aparências, mas as caixas de comentários contam outra história. Percebemos que, ao publicar mensagens consoladoras, centenas de pessoas se sentiam confortáveis para tirar a máscara do sorriso e revelar suas dores mais profundas.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Compreendemos que nossa missão deveria ir muito além do conteúdo. Era preciso criar um canal de escuta ativo e imediato para guiar essas pessoas de volta à esperança e ao equilíbrio emocional.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-xl space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-xl md:text-2xl font-black text-primary dark:text-sky-400">8 - escolher métrica</div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Voluntários ativos na triagem inicial
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-xl md:text-2xl font-black text-primary dark:text-sky-400">400 - escolher métrica</div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Pessoas direcionadas ao acolhimento
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-xl md:text-2xl font-black text-primary dark:text-sky-400">3.7M - escolher métrica</div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    Visualizações nos canais de divulgação
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Timeline / A Jornada Histórica */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/70 dark:border-slate-800 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-5 w-[400px] h-[400px] bg-primary-light/50 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100/30 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-1000"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-primary-dark dark:text-white tracking-tight">
              A evolução do nosso trabalho
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Os passos que demos até estruturar essa corrente de amor e acolhimento digital.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Background static line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[3px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
              {/* Dynamic scroll progress line */}
              <motion.div 
                style={{ scaleY, transformOrigin: 'top' }}
                className="absolute top-0 left-0 w-full h-full bg-primary dark:bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
              />
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12 relative"
            >
              {timelineItems.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline bullet */}
                    <div className="absolute left-8 md:left-1/2 z-20 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-primary dark:bg-sky-500 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Left spacer / right block */}
                    <div className="flex-1 w-full pl-16 md:pl-0">
                      <div className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <span className="text-xs font-black text-primary dark:text-sky-400 uppercase bg-primary-light dark:bg-sky-950 px-2.5 py-1 rounded-full">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="flex-grow hidden md:block"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#004d8f_0%,transparent_50%)] opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Escreva o próximo capítulo conosco</h2>
          <p className="text-primary-light/80 max-w-xl mx-auto text-sm leading-relaxed">
            Nossa equipe enxuta de voluntários precisa crescer para continuarmos respondendo e salvando vidas nas redes sociais. Junte-se a nós como voluntário digital, psicólogo parceiro ou Casa Espírita física.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Seja um Voluntário
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                onChangeRoute('#/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Voltar ao Início
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
