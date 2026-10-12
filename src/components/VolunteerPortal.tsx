import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  BookOpen, 
  ShieldCheck, 
  MonitorSmartphone, 
  Users, 
  ArrowLeft, 
  ExternalLink, 
  FileCheck2, 
  GraduationCap, 
  Lock, 
  Sparkles,
  Info
} from 'lucide-react';
import Button from './ui/Button';

interface VolunteerPortalProps {
  onChangeRoute: (route: string) => void;
}

export default function VolunteerPortal({ onChangeRoute }: VolunteerPortalProps) {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7z84__Yc8DKzcYCqzZSCyqxS17AbOBP29cVhO2Cca4je6ow/viewform?usp=publish-editor";
  const [platformModalOpen, setPlatformModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const steps = [
    {
      number: "01",
      title: "Inscrição & Triagem",
      description: "Preenchimento do formulário inicial compartilhando sua disponibilidade, motivação e canais de contato."
    },
    {
      number: "02",
      title: "Alinhamento & Entrevista",
      description: "Conversa com nossa coordenação para conhecer de perto o espírito do projeto e alinhar expectativas mútuas."
    },
    {
      number: "03",
      title: "Capacitação & Ética",
      description: "Trilha formativa em acolhimento fraterno, escuta ativa compassiva, identificação de riscos e limites de atuação."
    },
    {
      number: "04",
      title: "Termo de Voluntariado",
      description: "Formalização do compromisso mútuo nos termos da Lei Federal nº 9.608/1998, garantindo segurança e transparência."
    },
    {
      number: "05",
      title: "Plataforma & Mentoria",
      description: "Liberação de credencial na plataforma interna com primeiros atendimentos acompanhados por voluntários seniores."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChangeRoute('/')}
            iconLeft={<ArrowLeft className="w-4 h-4" />}
          >
            Voltar ao Início
          </Button>
        </div>

        {/* Hero Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-sky-500/10 text-primary dark:text-sky-400 text-xs font-semibold mb-4 border border-primary/20 dark:border-sky-500/20">
            <HeartHandshake className="w-4 h-4" />
            Estrutura Institucional & Governança
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-serif">
            Rede de Voluntariado
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Uma estrutura séria, humanizada e tecnologicamente organizada para transformar compaixão em ação concreta de amparo.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              as="a"
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Inscrever-se como Voluntário
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => setPlatformModalOpen(true)}
              iconLeft={<MonitorSmartphone className="w-4 h-4 text-primary dark:text-sky-400" />}
            >
              Acessar Plataforma de Atendimento
            </Button>
          </div>
        </motion.div>

        {/* The 4 Pillars of Seriousness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: Legal Framework */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-primary/10 dark:bg-sky-500/10 text-primary dark:text-sky-400 mb-5">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Marco Legal & Termo de Adesão
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Todas as atividades voluntárias são regidas estritamente pela <strong>Lei Federal nº 9.608/1998 (Lei do Voluntariado)</strong>. Cada membro formaliza um <strong>Termo de Adesão ao Serviço Voluntário</strong>, estabelecendo deveres mútuos, respeito aos acolhidos, sigilo ético absoluto e segurança jurídica.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Transparência legal e conformidade institucional plena</span>
            </div>
          </motion.div>

          {/* Card 2: Training & Mentorship */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Capacitação Contínua & Mentoria
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Nenhum voluntário é colocado para atender desamparado. Oferecemos trilhas de capacitação sobre <strong>escuta ativa empática</strong>, identificação de ideação suicida, comunicação não-violenta e protocolos de encaminhamento para serviços de emergência (CVV e SAMU).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Supervisão acolhedora e encontros periódicos de reciclagem</span>
            </div>
          </motion.div>

          {/* Card 3: Internal Platform */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-5">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Plataforma Própria de Atendimentos
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Desenvolvida por voluntários da área de tecnologia, nossa plataforma garante fila de acolhimento organizada, distribuição equilibrada de conversas e total <strong>anonimização dos dados do assistido</strong>, evitando sobrecarga emocional individual dos voluntários.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-500 flex-shrink-0" />
              <span>Tecnologia humanizada a serviço do acolhimento</span>
            </div>
          </motion.div>

          {/* Card 4: Support for the Caregiver */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Cuidado com Quem Cuida
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Reconhecemos o peso das dores acolhidas diariamente. Por isso, a equipe possui reuniões fraternas periódicas de suporte emocional, oração, descompressão e partilha mútua. Você nunca estará sozinho na missão.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span>Rede fraterna e acolhimento interno para voluntários</span>
            </div>
          </motion.div>

        </div>

        {/* Step-by-Step Flow */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white dark:bg-slate-900/60 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 mb-16 shadow-xs"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Como funciona o ingresso no voluntariado
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Etapas claras e responsáveis para garantir o amparo de quem chega com dor e o respaldo de quem atende com amor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col relative group">
                <div className="text-3xl font-black text-primary/20 dark:text-sky-500/20 font-serif mb-2 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                  {step.number}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Final */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
              Quer fazer parte dessa corrente de luz?
            </h2>
            <p className="text-white/85 text-sm sm:text-base mb-8 leading-relaxed">
              Precisamos de corações dispostos a escutar, acolher e semear esperança nas redes sociais. Sua disponibilidade, mesmo que poucas horas por semana, salva vidas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
                iconRight={<ExternalLink className="w-5 h-5" />}
              >
                Preencher Formulário de Voluntário
              </Button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Platform Access Modal */}
      {platformModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-sky-500/10 text-primary dark:text-sky-400">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Plataforma de Atendimento
                </h3>
                <span className="text-xs text-slate-500">Acesso Restrito a Voluntários Cadastrados</span>
              </div>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mb-6 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-primary dark:text-sky-400 mt-0.5 flex-shrink-0" />
                <p>
                  Esta plataforma é de uso exclusivo dos voluntários ativos que já concluíram o ciclo de capacitação e possuem login institucional atribuído pela coordenação.
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Se você já é um voluntário credenciado, solicite o link direto e sua credencial de acesso ao seu líder de equipe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2.5">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPlatformModalOpen(false)}
              >
                Fechar
              </Button>
              <Button
                as="a"
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                Quero me Inscrever
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
