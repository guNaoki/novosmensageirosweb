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
      year: "O Começo",
      title: "Uma semente de luz",
      description: "Os Novos Mensageiros nasceram de um desejo muito simples: usar a internet para levar mensagens de paz, reflexão e consolo da Doutrina Espírita para quem enfrenta a correria e o cansaço do dia a dia.",
      icon: Compass,
      color: "bg-primary/10 text-primary dark:bg-sky-500/20 dark:text-sky-400"
    },
    {
      year: "O Despertar",
      title: "Um grito no silêncio",
      description: "Conforme nossos vídeos alcançavam mais pessoas, as caixas de comentários revelaram uma dor profunda. Centenas de pessoas tiravam a máscara do sorriso para desabafar sobre angústia, solidão e a vontade de desistir da própria vida.",
      icon: Heart,
      color: "bg-red-50 text-alert-red dark:bg-red-950/60 dark:text-red-400"
    },
    {
      year: "A Mobilização",
      title: "Estendendo as mãos",
      description: "Diante de tanto sofrimento, não havia como cruzar os braços. Nos unimos voluntariamente para não deixar ninguém sem resposta: passamos a enviar mensagens de carinho no direct e a abrir um espaço seguro de escuta pelo WhatsApp.",
      icon: Users,
      color: "bg-primary-light text-primary-dark dark:bg-sky-950 dark:text-sky-300"
    },
    {
      year: "A Nossa Missão",
      title: "Uma ponte de esperança",
      description: "O carinho que começou com poucas mensagens já amparou centenas de corações. Mas sabemos que a dor nas redes ainda é imensa. Por isso, estamos abrindo as portas para voluntários, psicólogos e casas espíritas caminharem ao nosso lado.",
      icon: Star,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden text-left transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Full-bleed background image with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
            alt="History pathway background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-65 mix-blend-multiply dark:mix-blend-screen scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-sky-50/50 to-slate-50 dark:from-slate-950/60 dark:via-slate-950/90 dark:to-slate-950"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-dark opacity-35"></div>
        </div>

        {/* Subtle background illumination */}
        <div className="absolute top-10 right-1/4 w-[350px] h-[350px] bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left relative z-10">

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white"
              >
                A história por trás da <br />
                <span className="text-primary dark:text-sky-300 italic relative inline-block hover:scale-[1.02] hover:-skew-x-[6deg] transition-all duration-300 cursor-default select-none">
                  Rede de Resgate
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal"
              >
                Tudo começou com o desejo de espalhar palavras de paz. No caminho, descobrimos que por trás de cada tela há quem precise de muito mais do que posts: precisa de alguém que estenda a mão.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
              >
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
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
                  className="w-full sm:w-auto"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-primary/20 rounded-2xl blur-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md group aspect-video lg:aspect-square max-w-[450px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" 
                  alt="Typewriter letters history" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B30]/90 via-[#0A1B30]/30 to-transparent flex flex-col justify-end p-6 text-left">
                  <span className="font-serif text-xs font-bold tracking-wider text-sky-300 uppercase">Nosso Início</span>
                  <p className="text-white text-sm font-semibold leading-relaxed mt-1">
                    "Uma palavra amiga na hora certa pode transformar uma vida inteira."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O Manifesto / A Revelação */}
      <section className="py-14 sm:py-20 md:py-24 bg-white dark:bg-slate-900 relative overflow-hidden bg-grid-pattern border-b border-slate-200/70 dark:border-slate-800 transition-colors duration-300">
        {/* Subtle background glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-light/20 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-7 sm:p-10 md:p-12 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6 text-left sm:text-center relative">
            <span className="font-serif text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest block">
              Nosso Manifesto
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Por trás das telas, pessoas que só precisavam ser ouvidas.
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                As redes sociais parecem cheias de vidas perfeitas, mas os comentários contam uma realidade muito diferente. Quando começamos a postar reflexões de consolo, percebemos que muita gente finalmente encontrava ali um lugar seguro para baixar a guarda e falar da dor que guardava no peito.
              </p>
              <p>
                Foi aí que entendemos que nossa missão não podia parar nos vídeos. Não adiantava apenas falar de esperança: era preciso estar lá de verdade, com paciência e amor, para acolher e lembrar a cada irmão que ele não está sozinho no mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline / A Jornada Histórica */}
      <section 
        id="linha-tempo"
        className="py-14 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/70 dark:border-slate-800 relative overflow-hidden bg-grid-pattern transition-colors duration-300"
      >
        {/* Static Hands Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/imagens-pagina/maos-unidas.webp"
            alt="Mãos unidas em união e acolhimento"
            className="w-full h-full object-cover object-center opacity-80 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/75 to-slate-50 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-slate-950"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Como essa corrente de amor foi crescendo
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Cada passo dado, desde as primeiras postagens até a formação de uma rede viva de acolhimento.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Background static line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[3px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
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
              className="space-y-10 sm:space-y-12 relative"
            >
              {timelineItems.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline bullet */}
                    <div className="absolute left-6 md:left-1/2 z-20 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-slate-50 dark:border-[#080E21] bg-primary dark:bg-sky-500 flex items-center justify-center text-white shadow-sm">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Left spacer / right block */}
                    <div className="flex-1 w-full pl-12 md:pl-0">
                      <div className={`bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-2.5 ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <span className="font-serif text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">{item.description}</p>
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
      <section className="bg-primary-dark text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#004d8f_0%,transparent_50%)] opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Faça parte dessa história de amor</h2>
          <p className="text-primary-light/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
            Cada mensagem que respondemos pode ser o respiro de esperança que alguém tanto esperava. Se você sente no coração a vontade de acolher, seja doando sua escuta fraterna, como profissional de psicologia ou através da sua Casa Espírita, venha caminhar com a gente.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Quero Ajudar no Resgate
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
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
