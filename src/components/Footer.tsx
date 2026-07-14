import { Heart } from 'lucide-react';

interface FooterProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
}

export default function Footer({ currentRoute, onChangeRoute }: FooterProps) {
  // Custom Instagram brand icon since brand icons are deprecated in lucide-react v1+
  const Instagram = ({ className = "w-4 h-4" }: { className?: string }) => (
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

  return (
    <footer className="bg-primary-dark text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8 mb-8">
          
          {/* Logo and Switch Portal */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="bg-primary/20 p-2 rounded-lg text-primary-light">
                <Heart className="w-5 h-5 fill-primary-light" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Novos<span className="text-primary-light">Mensageiros</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              Mapeando a dor nas redes digitais e aproximando corações ao amparo de amor e luz.
            </p>
          </div>

          {/* Quick links & toggle */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <button 
              onClick={() => {
                onChangeRoute('#/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-white transition-colors cursor-pointer ${currentRoute === '#/' ? 'text-white underline decoration-primary underline-offset-4' : ''}`}
            >
              Consolo & Espiritismo
            </button>
            <button 
              onClick={() => {
                onChangeRoute('#/resgate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-white transition-colors cursor-pointer ${currentRoute === '#/resgate' ? 'text-white underline decoration-primary underline-offset-4' : ''}`}
            >
              Portal de Voluntários
            </button>
            <a 
              href="https://instagram.com/novosmensageiros" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center transition-colors"
            >
              <Instagram className="w-4 h-4 mr-1.5" />
              @novosmensageiros
            </a>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-center sm:text-left">
          <span>
            &copy; {new Date().getFullYear()} Novos Mensageiros. Todos os direitos reservados.
          </span>
          <span className="text-slate-500">
            Desenvolvido com carinho para esclarecer a mente e consolar o coração.
          </span>
        </div>
      </div>
    </footer>
  );
}
