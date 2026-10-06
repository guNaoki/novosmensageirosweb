import { ArrowRight, ExternalLink, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { WhatsAppIcon } from './shared';

interface HomeClosingProps {
  onChangeRoute: (route: string) => void;
}

/** Fechamento idêntico ao da Home atual: Fale Conosco, convite ao Resgate e parceiros. */
export default function HomeClosing({ onChangeRoute }: HomeClosingProps) {
  return (
    <>
      <section
        id="fale-conosco"
        className="py-14 sm:py-20 scroll-mt-20 sm:scroll-mt-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-2 border border-emerald-500/20">
                <WhatsAppIcon className="w-6 h-6 fill-emerald-600 dark:fill-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Fale Conosco no WhatsApp
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Precisa de uma conversa fraterna, apoio emocional ou esclarecimento sobre a Doutrina Espírita? Nossa
                equipe de voluntários está disponível para te ouvir com carinho, respeito e discrição.
              </p>
            </div>

            <div className="pt-2 max-w-md mx-auto">
              <Button
                variant="whatsapp"
                size="lg"
                as="a"
                href="https://wa.me/43991711228?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20equipe%20dos%20Novos%20Mensageiros."
                target="_blank"
                className="w-full text-sm sm:text-base py-3.5"
                iconLeft={<WhatsAppIcon className="w-4 h-4 fill-white" />}
              >
                Conversar no WhatsApp (Atendimento Fraterno)
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
              {['100% Gratuito', 'Sigilo e Discrição', 'Acolhimento Sem Julgamentos'].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden border-t border-slate-800">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 opacity-5 pointer-events-none">
          <Heart className="w-96 h-96 fill-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Quer fazer a diferença conosco voluntariamente?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed font-normal">
            Se você deseja doar um pouco do seu tempo nas redes sociais para mapear dores e salvar vidas, seja como
            voluntário digital, Psicólogo parceiro ou Casa Espírita, conheça o nosso{' '}
            <strong className="font-extrabold text-white">Projeto de Resgate</strong>.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              onClick={() => {
                onChangeRoute('/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Conhecer o Projeto de Resgate
            </Button>
          </div>
        </div>
      </section>

      <section
        id="amor-ideal"
        className="py-14 sm:py-20 scroll-mt-20 sm:scroll-mt-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Amor Ideal e Centro Espírita Mei Mei
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
              Iniciativas parceiras dedicadas à fraternidade, acolhimento espiritual e disseminação de amor ativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                logo: '/amorideal.webp',
                alt: 'Projeto Amor Ideal',
                title: 'Projeto Amor Ideal',
                text: 'Uma obra dedicada ao amparo fraterno, fortalecimento de laços de afeto e promoção da caridade ativa na sociedade.',
                href: 'https://www.amorideal.org.br/',
                cta: 'Conhecer o Projeto Amor Ideal',
              },
              {
                logo: '/meimei.webp',
                alt: 'Centro Espírita Mei Mei',
                title: 'Centro Espírita Mei Mei',
                text: 'Instituição dedicada ao estudo espírita, palestras consoladoras, passe e trabalhos assistenciais inspirados no espírito Mei Mei.',
                href: 'https://www.centroespiritameimei.com.br/',
                cta: 'Visitar Centro Espírita Mei Mei',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-[#FAFBFD] dark:bg-[#0B132B]/85 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-14 flex items-center">
                    <div className="bg-white dark:bg-[#080E21] p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs inline-flex items-center justify-center">
                      <img
                        src={p.logo}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-9 w-auto object-contain max-w-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {p.text}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-primary dark:text-sky-400 hover:text-primary-hover group/link"
                  >
                    {p.cta}
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
