import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function Navbar({ currentRoute, onChangeRoute, darkMode, onToggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to change route and scroll to a specific element after page load
  const handleNavigate = (route: string, elementId?: string) => {
    setMobileMenuOpen(false);
    
    if (elementId) {
      if (currentRoute === route) {
        const el = document.getElementById(elementId);
        if (el) {
          const navbarOffset = 80;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      } else {
        sessionStorage.setItem('navScrollTarget', elementId);
        onChangeRoute(route);
      }
    } else {
      onChangeRoute(route);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/35 dark:bg-[#030816]/45 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNavigate('/')}
              className="flex items-center space-x-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 group"
            >
              <img 
                src="/logo-mensageiros.webp" 
                alt="Novos Mensageiros" 
                className="h-8 sm:h-9 w-auto object-contain transform group-hover:scale-105 transition-transform duration-200" 
              />
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white select-none text-left">
                Novos<span className="text-primary dark:text-sky-400">Mensageiros</span>
              </span>
            </button>
          </div>

          {/* Center: Modern Desktop Navigation Pills (Transparente e Clean) */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-md shadow-xs">
            
            {/* Link 1: Início */}
            <button
              onClick={() => handleNavigate('/')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Início
            </button>

            {/* Link 2: Recursos (Novo Hub) */}
            <button
              onClick={() => handleNavigate('/recursos')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/recursos' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Recursos
            </button>

            {/* Link 3: Nossa História */}
            <button
              onClick={() => handleNavigate('/historia')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/historia' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Nossa História
            </button>

            {/* Link 4: Projeto Resgate */}
            <button
              onClick={() => handleNavigate('/resgate')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/resgate' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Projeto Resgate
            </button>
          </div>

          {/* Right: CTA & Dark Mode Toggle Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle Button */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                title={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
                aria-label={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 hover:text-primary transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <button
              onClick={() => handleNavigate('/resgate', 'inscricao')}
              className="px-4 py-2 rounded-full text-xs font-bold bg-primary hover:bg-primary-hover text-white shadow-xs hover:shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Quero Ser Voluntário
            </button>
          </div>

          {/* Mobile Menu Button & Dark Mode */}
          <div className="flex md:hidden items-center space-x-2">
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-200 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Clean e Transparente) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/60 bg-white/80 dark:bg-[#030914]/85 backdrop-blur-xl shadow-xl animate-fadeIn p-4 space-y-3">
          <div className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavigate('/')}
              className={`w-full text-left py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Início (Acolhimento)
            </button>
            <button
              onClick={() => handleNavigate('/recursos')}
              className={`w-full text-left py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/recursos' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Recursos & Apoio
            </button>
            <button
              onClick={() => handleNavigate('/historia')}
              className={`w-full text-left py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/historia' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Nossa História
            </button>
            <button
              onClick={() => handleNavigate('/resgate')}
              className={`w-full text-left py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/resgate' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Projeto Resgate
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
            <button
              onClick={() => handleNavigate('/resgate', 'inscricao')}
              className="w-full py-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              Quero Ser Voluntário
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
