import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  FileText, 
  UserCheck, 
  HeartHandshake, 
  ArrowLeft,
  Mail,
  AlertCircle
} from 'lucide-react';
import Button from './ui/Button';

interface PrivacyPortalProps {
  onChangeRoute: (route: string) => void;
}

export default function PrivacyPortal({ onChangeRoute }: PrivacyPortalProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const sections = [
    {
      icon: EyeOff,
      title: "1. Sigilo Absoluto e Confidencialidade no Acolhimento",
      content: [
        "A essência dos Novos Mensageiros é o acolhimento fraterno, consolo espiritual e apoio emocional. Reconhecemos a extrema sensibilidade das dores, desabafos e sentimentos compartilhados pelas pessoas atendidas.",
        "Todas as conversas mantidas com nossos voluntários (seja via WhatsApp, redes sociais ou plataforma própria) são estritamente confidenciais. Nenhum relato pessoal, história de vida ou mensagem de desabafo é gravado para fins comerciais, divulgado ou exposto publicamente sem consentimento expresso e anonimização total."
      ]
    },
    {
      icon: FileText,
      title: "2. Coleta Mínima de Dados e Finalidade",
      content: [
        "Adotamos o princípio da necessidade e minimização de dados: coletamos apenas o estritamente indispensável para viabilizar o contato e a organização das atividades.",
        "Para Acolhidos: Podemos coletar apenas nome (ou apelido de preferência) e canal de contato (número de WhatsApp ou perfil social) unicamente para retornar o amparo solicitado.",
        "Para Voluntários: Coletamos nome completo, e-mail, telefone, disponibilidade de horários e breve histórico de afinidade com o trabalho voluntário, com a finalidade exclusiva de seleção, capacitação, contato operacional e formalização do Termo de Adesão ao Voluntariado."
      ]
    },
    {
      icon: ShieldCheck,
      title: "3. Conformidade com a LGPD (Lei nº 13.709/2018)",
      content: [
        "Os Novos Mensageiros atuam em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). Os tratamentos de dados fundamentam-se no legítimo interesse para promoção de assistência social e acolhimento humano, bem como no consentimento livre e informado fornecido pelo titular.",
        "Você, na qualidade de titular de dados pessoais, tem o direito garantido por lei de: confirmar a existência de tratamento, acessar seus dados cadastrados, solicitar a correção de dados incompletos ou inexatos, e requerer a exclusão definitiva dos seus dados dos nossos registros a qualquer momento."
      ]
    },
    {
      icon: Lock,
      title: "4. Segurança e Armazenamento da Informação",
      content: [
        "Implementamos medidas técnicas e administrativas aptas a proteger seus dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração ou vazamento.",
        "Utilizamos conexões seguras e criptografadas (HTTPS/SSL), restringindo o acesso a cadastros exclusivamente aos voluntários responsáveis pela coordenação e triagem devidamente capacitados sob compromisso de sigilo."
      ]
    },
    {
      icon: HeartHandshake,
      title: "5. Não Compartilhamento e Ausência de Fins Lucrativos",
      content: [
        "Os Novos Mensageiros são uma iniciativa voluntária, fraterna e sem qualquer finalidade lucrativa.",
        "Jamais vendemos, alugamos, cedemos ou comercializamos bases de dados, contatos ou informações pessoais com terceiros para fins de marketing, publicidade direcionada ou exploração econômica."
      ]
    },
    {
      icon: UserCheck,
      title: "6. Uso de Cookies e Métricas Anônimas",
      content: [
        "Nosso site utiliza métricas técnicas de navegação anônimas (como páginas mais visitadas e taxa de permanência) exclusivamente para entender o alcance de nossas mensagens de amparo e melhorar a experiência de quem busca ajuda.",
        "Nenhum dado comportamental é cruzado para identificação pessoal de indivíduos ou criação de perfis comerciais invasivos."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-sky-500/10 text-primary dark:text-sky-400 text-xs font-semibold mb-4 border border-primary/20 dark:border-sky-500/20">
            <ShieldCheck className="w-4 h-4" />
            Conformidade & Ética Digital
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-serif">
            Política de Privacidade
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transparência sobre como tratamos informações, garantimos sigilo absoluto no acolhimento fraterno e protegemos seus dados segundo a LGPD.
          </p>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Última atualização: Outubro de 2026 • Em conformidade com a Lei nº 13.709/2018 (LGPD)
          </div>
        </motion.div>

        {/* Fast Summary Callout */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-primary/5 dark:bg-primary-dark/20 border border-primary/20 dark:border-primary/30 rounded-2xl p-6 mb-12 flex items-start gap-4"
        >
          <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 flex-shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="text-sm space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-white">Nosso Compromisso em 3 Princípios Fundamentais:</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>1. Confidencialidade:</strong> Suas mensagens e desabafos nunca são compartilhados ou monetizados.
              <br />
              <strong>2. Gratuidade:</strong> Todo o amparo prestado é voluntário e sem custos.
              <br />
              <strong>3. Autonomia:</strong> Você tem total controle sobre suas informações e pode solicitar exclusão a qualquer instante.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.article 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-1 sm:pl-2">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Contact / DPO Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 text-center"
        >
          <div className="inline-flex p-3 rounded-full bg-primary/10 dark:bg-sky-500/10 text-primary dark:text-sky-400 mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Dúvidas sobre Privacidade ou Solicitação de Exclusão?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6">
            Caso deseje exercer seus direitos de titular da LGPD, atualizar seus dados cadastrais ou solicitar a exclusão de contatos, fale diretamente com nossa coordenação.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onChangeRoute('/resgate')}
            >
              Falar com a Coordenação
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onChangeRoute('/')}
            >
              Ir para a Página Inicial
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
