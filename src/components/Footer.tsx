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
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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
