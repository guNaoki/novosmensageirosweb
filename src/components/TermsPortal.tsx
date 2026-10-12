import { motion } from 'framer-motion';
import { 
  FileCheck, 
  AlertTriangle, 
  Heart, 
  Scale, 
  Sparkles, 
  ShieldAlert, 
  ArrowLeft,
  PhoneCall
} from 'lucide-react';
import Button from './ui/Button';

interface TermsPortalProps {
  onChangeRoute: (route: string) => void;
}

export default function TermsPortal({ onChangeRoute }: TermsPortalProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const termsList = [
    {
      icon: Scale,
      title: "1. Finalidade Institucional e Caráter Voluntário",
      content: [
        "O portal e as redes dos Novos Mensageiros constituem uma iniciativa de voluntariado e assistência fraterna sem fins lucrativos. Nosso propósito é a difusão de conteúdos de reflexão, paz, esperança e apoio emocional, orientados pelos valores universais de caridade e amor ao próximo à luz da Doutrina Espírita.",
        "Ao navegar no site, utilizar nossos canais ou interagir com nossos voluntários, você concorda com as diretrizes e princípios estabelecidos nestes Termos de Uso."
      ]
    },
    {
      icon: Heart,
      title: "2. Gratuidade Irrestrita de Todos os Serviços",
      content: [
        "Todo acolhimento, escuta atenta, materiais de apoio, livros digitais recomendados e mensagens fornecidas pelos Novos Mensageiros são 100% gratuitos.",
        "Nenhum membro, voluntário ou representante está autorizado a cobrar qualquer quantia, taxa de inscrição ou contrapartida financeira sob qualquer pretexto. Da mesma forma, nenhum atendimento depende de doações materiais para ser realizado."
      ]
    },
    {
      icon: AlertTriangle,
      title: "3. Delimitação Legal: Não Substituição de Atendimento Médico ou Psicológico",
      content: [
        "O acolhimento fraterno oferecido pelos Novos Mensageiros é de natureza solidária, espiritual e humana. Ele NÃO se confunde com consultas médicas, atendimentos psicológicos clínicos, psiquiátricos ou procedimentos terapêuticos regulamentados por conselhos profissionais de saúde.",
        "Nossos voluntários atuam como ouvintes compassivos e orientadores fraternos. Caso você esteja enfrentando diagnósticos de saúde física ou mental, recomendamos enfaticamente a continuidade de seus tratamentos com profissionais habilitados."
      ]
    },
    {
      icon: ShieldAlert,
      title: "4. Conduta Ética, Segurança e Respeito Mútuo",
      content: [
        "Exigimos que todas as interações com nossa equipe sejam pautadas pelo respeito mútuo, cordialidade e honestidade.",
        "Não são tolerados comportamentos que configurem assédio, ameaça, discriminação, linguagem abusiva ou tentativa de uso indevido da boa-fé dos voluntários. O descumprimento resultará no encerramento imediato do atendimento e no bloqueio de acesso aos canais."
      ]
    },
    {
      icon: Sparkles,
      title: "5. Direitos de Conteúdo e Propriedade Intelectual",
      content: [
        "Os textos, artes visuais, vídeos e marcas dos Novos Mensageiros foram produzidos para consolar e esclarecer corações. É incentivado o compartilhamento fraterno de trechos em redes sociais, desde que atribuída a devida autoria e fonte.",
        "É estritamente vedada a utilização dos nossos conteúdos, logos ou identidade para fins comerciais, vendas casadas ou monetização indevida por terceiros."
      ]
    },
    {
      icon: FileCheck,
      title: "6. Modificações e Vigência",
      content: [
        "Estes termos podem ser atualizados periodicamente para refletir a evolução de nossas atividades ou adequações legislativas. Recomendamos a consulta regular a esta página.",
        "Quaisquer controvérsias decorrentes destes Termos serão resolvidas sob a égide da legislação da República Federativa do Brasil."
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
            <Scale className="w-4 h-4" />
            Governança Institucional
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-serif">
            Termos de Uso
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Diretrizes gerais, princípios de responsabilidade compartilhada e o compromisso ético dos Novos Mensageiros.
          </p>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Vigência: Outubro de 2026 • Iniciativa Humanitária Voluntária
          </div>
        </motion.div>

        {/* Urgent Health Disclaimer Card */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-6 sm:p-7 mb-12 flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 flex-shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div className="text-sm space-y-2">
            <h3 className="text-base font-bold text-amber-900 dark:text-amber-300">
              Aviso Importante em Situações de Crise e Emergência
            </h3>
            <p className="text-amber-800 dark:text-amber-200/90 leading-relaxed">
              O acolhimento fraterno e a escuta solidária oferecidos pelos Novos Mensageiros são ações de apoio moral e espiritual. <strong>Eles não substituem serviços médicos ou psiquiátricos de emergência.</strong>
            </p>
            <p className="text-amber-800 dark:text-amber-200/90 leading-relaxed">
              Se você ou alguém ao seu redor está vivenciando sofrimento agudo com risco à própria vida, entre em contato imediatamente com o <strong>CVV (Centro de Valorização da Vida)</strong> pelo telefone <strong>188</strong> (ligação gratuita, sigilosa e 24h por dia) ou acione o <strong>SAMU (192)</strong>.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsList.map((item, idx) => {
            const Icon = item.icon;
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
                    {item.title}
                  </h2>
                </div>
                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-1 sm:pl-2">
                  {item.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Action Call to return */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Deseja saber mais sobre como funciona nosso acolhimento ou atuar como voluntário?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => onChangeRoute('/privacidade')}
            >
              Política de Privacidade
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => onChangeRoute('/voluntariado')}
            >
              Conhecer o Voluntariado
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
