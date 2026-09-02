interface FooterProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
}

export default function Footer({ currentRoute, onChangeRoute }: FooterProps) {
  // Custom Instagram brand icon
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

  // Custom TikTok brand icon
  const TikTok = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.92a6.34 6.34 0 0 0-5.06 6.16 6.34 6.34 0 1 0 11.4-3.83V8.12a8.27 8.27 0 0 0 4.77 1.52V6.19a4.85 4.85 0 0 1-1-.5z"/>
    </svg>
  );

  // Custom YouTube brand icon
  const YouTube = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  return (
    <footer className="bg-primary-dark text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8 mb-8">
          
          {/* Logo and Switch Portal */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-mensageiros.webp" 
                alt="Novos Mensageiros" 
                className="h-9 w-auto object-contain" 
              />
              <span className="font-extrabold text-lg text-white">
                Novos<span className="text-primary-light">Mensageiros</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              Mapeando a dor nas redes digitais e aproximando corações ao amparo de amor e luz.
            </p>
          </div>

          {/* Quick links & Social channels */}
          <div className="flex flex-col items-center md:items-end gap-4">
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
                Projeto Resgate
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
              <a 
                href="https://www.instagram.com/novosmensageiros/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                title="Instagram Novos Mensageiros"
              >
                <Instagram className="w-4 h-4 mr-1.5 text-pink-400" />
                @novosmensageiros
              </a>

              <a 
                href="https://www.tiktok.com/@novosmensageiros" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                title="TikTok Novos Mensageiros"
              >
                <TikTok className="w-4 h-4 mr-1.5 text-sky-400" />
                TikTok
              </a>

              <a 
                href="https://www.youtube.com/@NovosMensageiros" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                title="YouTube Novos Mensageiros"
              >
                <YouTube className="w-4 h-4 mr-1.5 text-red-500" />
                YouTube
              </a>

              {/* TikTok Resgate: ONLY visible on #/resgate route */}
              {currentRoute === '#/resgate' && (
                <a 
                  href="https://www.tiktok.com/@acolhimentomensageiros?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white flex items-center bg-primary/20 hover:bg-primary/30 text-sky-300 px-3 py-1.5 rounded-lg border border-primary/40 transition-colors font-bold"
                  title="TikTok Acolhimento e Resgate"
                >
                  <TikTok className="w-4 h-4 mr-1.5 text-sky-300" />
                  TikTok Resgate (@acolhimentomensageiros)
                </a>
              )}
            </div>
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
