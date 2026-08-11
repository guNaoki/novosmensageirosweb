import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageSquare, 
  ArrowRight, 
  Users, 
  Shield, 
  Check, 
  AlertCircle, 
  MapPin
} from 'lucide-react';

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
    <div className="bg-slate-50 overflow-x-hidden">
      
      {/* 2. Hero Section (O Propósito) */}
      <section id="proposito" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-950 text-white overflow-hidden">
        {/* Full-bleed background image with clear dark overlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=1600&auto=format&fit=crop" 
            alt="Supportive hands background" 
            className="w-full h-full object-cover opacity-50 mix-blend-screen scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-35"></div>
        </div>

        {/* Ambient Gradient Glows (using custom floatGlow classes) */}
        <div className="ambient-glow top-20 left-10 w-96 h-96 bg-primary/40 pointer-events-none"></div>
        <div className="ambient-glow bottom-20 right-10 w-[450px] h-[450px] bg-sky-500/25 pointer-events-none" style={{ animationDelay: '-4s' }}></div>

        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
              >
                Projeto de Resgate: Uma <span className="text-sky-400 relative inline-block hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                  mão estendida
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-sky-500/30 -z-10 rounded-full"></span>
                </span> no momento de maior dor.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-100 leading-relaxed max-w-2xl font-medium"
              >
                O <strong className="font-extrabold text-white">Projeto de Resgate</strong> é a frente de ação direta dos Novos Mensageiros. Conversamos com pessoas que estão com <em className="italic font-semibold text-sky-300">depressão</em>. Realizamos o atendimento dessas pessoas, triagem por nível de risco, diálogo fraterno e encaminhamento para profissionais especialistas.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a 
                  href="#inscricao" 
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-extrabold px-7 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/45 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group text-base"
                >
                  Quero Ajudar a Salvar Vidas
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={() => {
                    onChangeRoute('#/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-4 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-base"
                >
                  Voltar ao Portal Principal
                </button>
              </motion.div>
            </div>

            {/* Rescue Operational Metrics & Dedicated TikTok Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative animate-fadeIn"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-primary/30 rounded-3xl blur-3xl -z-10"></div>
              
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden group text-left">
                <div className="relative h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6146693/pexels-photo-6146693.jpeg" 
                    alt="Supportive Hands" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20"></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-xs font-black text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Operação Ativa de Socorro
                    </span>
                  </div>
                </div>
                
                <div className="p-5 space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                      <div className="text-2xl font-black text-primary-dark dark:text-white font-sans">+100</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">Vidas amparadas no acolhimento direto</div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                      <div className="text-2xl font-black text-sky-500 dark:text-sky-400 font-sans">24/7</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">Mapeamento em posts virais</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex items-center gap-3">
                    <div className="bg-red-100 dark:bg-red-950/60 w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-alert-red" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-800 dark:text-white">Triagem por Nível de Risco</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">Avaliação técnica e encaminhamento clínico/espiritual.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. A Dor / O Contexto (O Iceberg) */}
      <section id="dor" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/30 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-500"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark dark:text-white tracking-tight">
              Os comentários em nossos posts são apenas a ponta do iceberg.
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
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
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="bg-red-100 dark:bg-red-950/60 text-alert-red w-12 h-12 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-alert-red" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark dark:text-white">A Realidade Oculta</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Por trás de cada visualização ou curtida, muitas vezes há um grito silencioso por socorro. Quando um post viraliza, surgem centenas de desabafos de pessoas em sofrimento profundo no meio de mensagens comuns.
                </p>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-6">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Desafio Atual</span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-1 block">Mais de 100 pessoas identificadas precisando de atenção fraterna direta nas últimas semanas.</span>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              className="bg-primary-dark text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-primary-hover/50"
            >
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10">
                <Heart className="w-64 h-64 fill-white text-white" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/15 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Por que precisamos de você?</h3>
                <p className="text-sm text-slate-100 leading-relaxed font-medium">
                  Hoje somos uma equipe de apenas <strong className="text-sky-300">8 voluntários</strong> ativos fazendo o trabalho de monitoramento, resposta inicial e direcionamento. A demanda é gigantesca e, se não crescermos agora, muitas vidas que pediram socorro ficarão sem resposta ou apoio.
                </p>
              </div>
              <div className="border-t border-white/20 pt-6 mt-6 relative z-10">
                <span className="text-xs font-bold text-sky-300 block uppercase tracking-wider">A Meta do Resgate</span>
                <span className="text-sm font-extrabold text-white mt-1 block">Garantir que 100% dos comentários com ideação dolorosa recebam um acolhimento imediato, sigiloso e humano.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. A Jornada do Acolhimento (Passo a Passo) */}
      <section id="jornada" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/50 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-sky-100/40 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-1000"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark dark:text-white tracking-tight">
              A Jornada de Resgate e Acolhimento
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base font-medium">
              Nossa rede atua de forma proativa e contínua para encontrar a dor onde ela estiver nas redes sociais e direcioná-la para a luz do amparo.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* Step 1 */}
            <motion.div variants={cardVariants} className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left hover-lift">
              <div className="text-5xl font-black text-primary/20 dark:text-sky-400/20 tracking-widest">01</div>
              <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-11 h-11 rounded-xl flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-primary dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-extrabold text-primary-dark dark:text-white">Busca Ativa (TikTok)</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Utilizamos uma **conta dedicada no TikTok** (@acolhimentomensageiros) para mapear comentários de desespero e ideação suicida em posts virais, abordando as pessoas ativamente e em sigilo.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={cardVariants} className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left hover-lift">
              <div className="text-5xl font-black text-primary/20 dark:text-sky-400/20 tracking-widest">02</div>
              <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-11 h-11 rounded-xl flex items-center justify-center font-bold">
                <Shield className="w-5 h-5 text-primary dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-extrabold text-primary-dark dark:text-white">Análise de Nível de Risco</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Analisamos a gravidade e o risco de cada relato. Iniciamos o diálogo fraterno e acolhedor para estabilizar o momento crítico e entender a necessidade real.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={cardVariants} className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left hover-lift">
              <div className="text-5xl font-black text-primary/20 dark:text-sky-400/20 tracking-widest">03</div>
              <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-11 h-11 rounded-xl flex items-center justify-center font-bold">
                <Shield className="w-5 h-5 text-primary dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-extrabold text-primary-dark dark:text-white">Apoio Clínico</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Casos que demonstram sofrimento psiquiátrico grave são imediatamente encaminhados ao nosso grupo de psicólogos clínicos voluntários parceiros.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={cardVariants} className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left hover-lift">
              <div className="text-5xl font-black text-primary/20 dark:text-sky-400/20 tracking-widest">04</div>
              <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-11 h-11 rounded-xl flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-primary dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-extrabold text-primary-dark dark:text-white">Acolhimento Físico</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Conectamos a pessoa de forma afetuosa com Casas Espíritas físicas em sua região geográfica para passes, tratamento de fluidos e estudos presenciais.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Rede de Apoio (Como nos dividimos) */}
      <section id="apoio" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-light/40 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark dark:text-white tracking-tight">
              A Nossa Rede de Amparo e Resgate
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base font-medium">
              Cada perfil tem um papel essencial no resgate de vidas. Veja como você ou sua organização podem colaborar.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
          >
            {/* Column 1 - Casas Espíritas */}
            <motion.div variants={cardVariants} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover-lift shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-12 h-12 rounded-2xl flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6 text-primary dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark dark:text-white">Casas Espíritas</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Oferecem atendimento fraterno presencial, suporte de passes magnéticos, fluidoterapia e reintegração da pessoa a uma comunidade de acolhimento físico na localidade onde reside.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Acolhimento presencial na região</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Encaminhamento a reuniões</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Suporte espiritual dedicado</li>
              </ul>
            </motion.div>

            {/* Column 2 - Psicólogos */}
            <motion.div variants={cardVariants} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover-lift shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-12 h-12 rounded-2xl flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6 text-primary dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark dark:text-white">Psicólogos e Profissionais</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Oferecem escuta profissional orientadora, triagem psicológica preliminar de suporte clínico e direcionam as pessoas para serviços públicos de saúde mental quando necessário.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Atendimento voluntário online</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Orientação de casos graves</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Supervisão técnica da equipe</li>
              </ul>
            </motion.div>

            {/* Column 3 - Voluntários Gerais */}
            <motion.div variants={cardVariants} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover-lift shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-400 w-12 h-12 rounded-2xl flex items-center justify-center font-bold">
                  <Users className="w-6 h-6 text-primary dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-extrabold text-primary-dark dark:text-white">Voluntários (Mensageiros Digitais)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Pessoas comuns dedicadas a ler os comentários, enviar as primeiras mensagens acolhedoras via direct, encaminhar para atendimento de WhatsApp e pesquisar links úteis.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Mapeamento ativo de redes</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Envio de mensagens de resgate</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary dark:text-sky-400 mr-2 shrink-0" /> Suporte operacional online</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Allan Kardec Quote section */}
      <section className="bg-primary-dark text-white py-16 md:py-20 relative overflow-hidden border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="bg-white/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-sky-300">
            <Heart className="w-6 h-6 fill-sky-300 text-sky-300" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-extrabold italic tracking-tight leading-relaxed max-w-3xl mx-auto text-white">
            "Fora da caridade não há salvação."
          </blockquote>
          <cite className="block text-sm uppercase tracking-widest font-extrabold text-sky-300 not-italic">
            — Allan Kardec
          </cite>
        </div>
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
      </section>

      {/* 6. Nossa Trajetória e Linha do Tempo */}
      <section id="historia" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden bg-grid-pattern border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark dark:text-white tracking-tight">
              A história por trás da Rede de Resgate
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base font-medium">
              Como um canal de divulgação espírita nas redes sociais deparou-se com a urgência de acolher e salvar vidas no silêncio dos comentários digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-black text-primary dark:text-sky-400 uppercase bg-primary/10 dark:bg-sky-950 px-3 py-1 rounded-full">
                01. O Despertar
              </span>
              <h3 className="text-base font-extrabold text-primary-dark dark:text-white">Sementes Digitais</h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                O projeto Novos Mensageiros foi criado com o propósito de divulgar o Espiritismo de forma leve e acolhedora nas redes sociais (Instagram e TikTok), levando gotas de esperança para o cotidiano.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-black text-alert-red uppercase bg-red-100 dark:bg-red-950/60 px-3 py-1 rounded-full">
                02. O Sinal de Alerta
              </span>
              <h3 className="text-base font-extrabold text-primary-dark dark:text-white">A Ponta do Iceberg</h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                Ao publicarmos conteúdos voltados para a depressão e o vazio da alma, os posts viralizaram. Nos comentários, identificamos um grito silencioso: centenas de desabafos de pessoas em sofrimento profundo.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-black text-primary dark:text-sky-400 uppercase bg-primary/10 dark:bg-sky-950 px-3 py-1 rounded-full">
                03. A Mobilização
              </span>
              <h3 className="text-base font-extrabold text-primary-dark dark:text-white">Os Primeiros Guardiões</h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                Uma pequena equipe de voluntários se reuniu emergencialmente para monitorar os comentários, enviando mensagens de resgate no direct e abrindo canais de escuta fraterna via WhatsApp.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                04. O Futuro
              </span>
              <h3 className="text-base font-extrabold text-primary-dark dark:text-white">Expandindo os Horizontes</h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                Com mais de 100 pessoas acolhidas e milhões de visualizações, estruturamos essa plataforma para recrutar novos voluntários, parceiros clínicos e Casas Espíritas para ampliar esse farol de luz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Final & Inscrição (WhatsApp Button Direct) */}
      <section id="inscricao" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-5 w-80 h-80 bg-primary-light/65 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 text-center space-y-6 relative overflow-hidden">
            <div className="w-16 h-16 bg-whatsapp/15 text-whatsapp rounded-2xl flex items-center justify-center mx-auto mb-2">
              <MessageSquare className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black text-primary-dark dark:text-white">Seja um Voluntário</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed max-w-md mx-auto font-medium">
                Para facilitar seu atendimento e integrar você rapidamente na nossa equipe de acolhimento, o processo de voluntariado é feito diretamente pelo nosso WhatsApp.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20me%20voluntariar%20no%20Projeto%20Novos%20Mensageiros."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl shadow-whatsapp/30 hover:shadow-2xl hover:shadow-whatsapp/40 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 text-base transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <MessageSquare className="w-6 h-6 fill-white" />
                Conversar no WhatsApp para Ser Voluntário
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span>Canal oficial de atendimento de voluntários</span>
              <a 
                href="https://www.tiktok.com/@acolhimentomensageiros?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-sky-400 hover:underline font-extrabold"
              >
                Visitar TikTok do Resgate (@acolhimentomensageiros)
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
