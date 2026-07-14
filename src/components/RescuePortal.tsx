import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  MessageSquare, 
  ArrowRight, 
  Users, 
  Shield, 
  Check, 
  AlertCircle, 
  MapPin, 
  Play
} from 'lucide-react';

interface RescuePortalProps {
  onChangeRoute: (route: string) => void;
}

export default function RescuePortal({ onChangeRoute }: RescuePortalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    role: 'voluntario',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  // Custom Instagram brand icon since brand icons are deprecated in lucide-react v1+
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
        {/* Full-bleed background image with dark overlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=1600&auto=format&fit=crop" 
            alt="Supportive hands background" 
            className="w-full h-full object-cover opacity-35 mix-blend-screen scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-35"></div>
        </div>

        {/* Ambient Gradient Glows (using custom floatGlow classes) */}
        <div className="ambient-glow top-20 left-10 w-96 h-96 bg-primary/30 pointer-events-none"></div>
        <div className="ambient-glow bottom-20 right-10 w-[450px] h-[450px] bg-sky-500/20 pointer-events-none" style={{ animationDelay: '-4s' }}></div>

        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                <span>Iniciativa Espírita de Resgate de Vidas</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              >
                Mais do que conteúdos digitais, uma <span className="text-sky-400 relative inline-block hover:scale-[1.02] hover:-skew-x-[6deg] transition-all duration-300 cursor-default select-none">
                  rede de resgate
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-sky-500/20 -z-10 rounded-full"></span>
                </span> de vidas.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-300 leading-relaxed max-w-2xl"
              >
                O projeto Novos Mensageiros nasceu para divulgar o Espiritismo de forma leve. Mas quando nossos posts sobre depressão viralizaram, encontramos mais de 400 pessoas em sofrimento profundo precisando de ajuda imediata em comentários das redes sociais. Não podíamos ficar parados e criamos o **Projeto de Resgate**.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a 
                  href="#inscricao" 
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group"
                >
                  Quero Ajudar a Salvar Vidas
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={() => {
                    onChangeRoute('#/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  Ver Portal de Acolhimento
                </button>
              </motion.div>
            </div>

            {/* Metrics & Support Image Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative animate-fadeIn"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-primary/20 rounded-3xl blur-3xl -z-10"></div>
              
              {/* Support Image Cover Card with Metrics */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group text-left">
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=600&auto=format&fit=crop" 
                    alt="Supportive Hands" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold text-white bg-primary/80 backdrop-blur-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Resgate e Acolhimento
                    </span>
                  </div>
                </div>
                
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all duration-300 hover-lift">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-3">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-extrabold text-primary-dark">+42 mil</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Seguidores no Instagram</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all duration-300 hover-lift">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-3">
                      <Play className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-extrabold text-primary-dark">3.7M</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Visualizações no TikTok</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all duration-300 hover-lift sm:col-span-2">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-50 w-10 h-10 rounded-lg flex items-center justify-center text-alert-red shrink-0 animate-pulse">
                        <Heart className="w-5 h-5 fill-alert-red text-alert-red" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-primary-dark font-sans">+400</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">Desabafos dolorosos de socorro acolhidos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. A Dor / O Contexto (O Iceberg) */}
      <section id="dor" className="py-16 md:py-24 bg-slate-100/40 border-y border-slate-200/50 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-500"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">O Iceberg das Redes Sociais</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              Os comentários em nossos posts são apenas a ponta do iceberg.
            </h2>
            <p className="text-slate-600 leading-relaxed">
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
              className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="bg-red-50 text-alert-red w-10 h-10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-alert-red" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">A Realidade Oculta</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Por trás de cada visualização ou curtida, muitas vezes há um grito silencioso por socorro. Quando um post viraliza, surgem centenas de desabafos de pessoas em sofrimento profundo no meio de mensagens comuns.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-6 mt-6">
                <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Desafio Atual</span>
                <span className="text-sm font-bold text-slate-700 mt-1 block">Mais de 400 pessoas identificadas precisando de atenção fraterna direta nas últimas semanas.</span>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              className="bg-primary-dark text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5">
                <Heart className="w-64 h-64 fill-white text-white" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Por que precisamos de você?</h3>
                <p className="text-sm text-primary-light/90 leading-relaxed">
                  Hoje somos uma equipe de apenas <strong>8 voluntários</strong> ativos fazendo o trabalho de monitoramento, resposta inicial e direcionamento. A demanda é gigantesca e, se não crescermos agora, muitas vidas que pediram socorro ficarão sem resposta ou apoio.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 mt-6 relative z-10">
                <span className="text-xs font-semibold text-primary-light/60 block uppercase tracking-wider">A Meta do Resgate</span>
                <span className="text-sm font-bold text-white mt-1 block">Garantir que 100% dos comentários com ideação dolorosa recebam um acolhimento imediato, sigiloso e humano.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. A Jornada do Acolhimento (Passo a Passo) */}
      <section id="jornada" className="py-16 md:py-24 bg-white relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse delay-1000"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Como o Projeto Funciona</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              A Jornada de Resgate e Acolhimento
            </h2>
            <p className="text-slate-600">
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
            <motion.div variants={cardVariants} className="relative space-y-4 text-left hover-lift p-2">
              <div className="text-5xl font-black text-primary/10 tracking-widest">01</div>
              <div className="bg-primary-light text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">Contato Inicial</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Mapeamos ativamente comentários em posts virais nas redes sociais, buscando sinais de sofrimento profundo, vazio e solidão extrema.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={cardVariants} className="relative space-y-4 text-left hover-lift p-2">
              <div className="text-5xl font-black text-primary/10 tracking-widest">02</div>
              <div className="bg-primary-light text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">Atendimento Fraterno</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Entramos em contato ativo e humanizado. Abrimos uma escuta carinhosa, sem julgamentos, de forma totalmente online e segura no WhatsApp.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={cardVariants} className="relative space-y-4 text-left hover-lift p-2">
              <div className="text-5xl font-black text-primary/10 tracking-widest">03</div>
              <div className="bg-primary-light text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">Apoio Clínico</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Casos que demonstram sofrimento psiquiátrico grave são imediatamente encaminhados ao nosso grupo de psicólogos clínicos voluntários parceiros.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={cardVariants} className="relative space-y-4 text-left hover-lift p-2">
              <div className="text-5xl font-black text-primary/10 tracking-widest">04</div>
              <div className="bg-primary-light text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">Acolhimento Físico</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Conectamos a pessoa de forma afetuosa com Casas Espíritas físicas em sua região geográfica para passes, tratamento de fluidos e estudos presenciais.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Rede de Apoio (Como nos dividimos) */}
      <section id="apoio" className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-200/50 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-light/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Onde você se encaixa</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              A Nossa Rede de Amparo e Resgate
            </h2>
            <p className="text-slate-600">
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
            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/50 hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary-light text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">Casas Espíritas</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Oferecem atendimento fraterno presencial, suporte de passes magnéticos, fluidoterapia e reintegração da pessoa a uma comunidade de acolhimento físico na localidade onde reside.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-600 border-t border-slate-200/80 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Acolhimento presencial na região</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Encaminhamento a reuniões</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Suporte espiritual dedicado</li>
              </ul>
            </motion.div>

            {/* Column 2 - Psicólogos */}
            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/50 hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary-light text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">Psicólogos e Profissionais</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Oferecem escuta profissional orientadora, triagem psicológica preliminar de suporte clínico e direcionam as pessoas para serviços públicos de saúde mental quando necessário.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-600 border-t border-slate-200/80 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Atendimento voluntário online</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Orientação de casos graves</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Supervisão técnica da equipe</li>
              </ul>
            </motion.div>

            {/* Column 3 - Voluntários Gerais */}
            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/50 hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-primary-light text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">Voluntários (Mensageiros Digitais)</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Pessoas comuns dedicadas a ler os comentários, enviar as primeiras mensagens acolhedoras via direct, encaminhar para atendimento de WhatsApp e pesquisar links úteis.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-600 border-t border-slate-200/80 pt-6 mt-6">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Mapeamento ativo de redes</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Envio de mensagens de resgate</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Suporte operacional online</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Allan Kardec Quote section */}
      <section className="bg-primary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-primary-light">
            <Heart className="w-6 h-6 fill-primary-light text-primary-light" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-extrabold italic tracking-tight leading-relaxed max-w-3xl mx-auto">
            "Fora da caridade não há salvação."
          </blockquote>
          <cite className="block text-sm uppercase tracking-widest font-bold text-primary-light/80 not-italic">
            — Allan Kardec
          </cite>
        </div>
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
      </section>

      {/* 7. CTA Final & Inscrição (Form) */}
      <section id="inscricao" className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200/30 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-5 w-80 h-80 bg-primary-light/65 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div 
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary-dark">Cadastro Concluído!</h3>
                  <p className="text-slate-600 leading-relaxed text-sm max-w-sm mx-auto">
                    Que bom que você decidiu se juntar a nós! Nossa equipe entrará em contato via WhatsApp nos próximos dias para te acolher e explicar as tarefas e dinâmicas iniciais.
                  </p>
                  <div className="pt-6">
                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', whatsapp: '', role: 'voluntario', message: '' });
                      }}
                      className="text-sm font-bold text-primary hover:underline cursor-pointer"
                    >
                      Preencher nova inscrição
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center space-y-3 mb-8">
                    <span className="text-xs font-extrabold text-primary bg-primary-light/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      Faça Parte do Resgate
                    </span>
                    <h3 className="text-2xl font-extrabold text-primary-dark">Seja um Voluntário</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Preencha o formulário abaixo e ajude-nos a acolher centenas de pessoas que desabafam silenciosamente nas redes sociais.
                    </p>
                  </div>

                  <AnimatePresence>
                    {formError && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-50 border border-red-200 text-alert-red px-4 py-3 rounded-lg mb-6 flex items-center text-sm font-medium overflow-hidden"
                      >
                        <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                        {formError}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                      <label htmlFor="name" className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Quíron da Silva"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                        Seu E-mail *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu.email@exemplo.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                        Seu WhatsApp (com DDD) *
                      </label>
                      <input 
                        type="tel" 
                        id="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(XX) 9XXXX-XXXX"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                        Como deseja ajudar?
                      </label>
                      <select 
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all font-medium"
                      >
                        <option value="voluntario">Voluntário Digital (Pesquisa / Envio de mensagens)</option>
                        <option value="psicologo">Psicólogo (Acolhimento clínico voluntário)</option>
                        <option value="casa_espirita">Representante de Casa Espírita (Apoio presencial)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                        Fale um pouco sobre você (Opcional)
                      </label>
                      <textarea 
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Diga se possui alguma experiência prévia ou como conheceu o projeto."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      Enviar Minha Inscrição
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
