import { useState } from 'react';
import { Heart, ChevronDown, Menu, X, Compass, HelpCircle, Star, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function Navbar({ currentRoute, onChangeRoute, darkMode, onToggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'espiritismo' | 'projeto' | null>(null);

  // Helper to change route and scroll to a specific element after page load
  const handleNavigate = (route: string, elementId?: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
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

  const toggleDropdown = (menu: 'espiritismo' | 'projeto') => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 dark:bg-[#030816]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/70 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] transition-all duration-300">
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

          {/* Center: Modern Desktop Navigation Pills */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md shadow-xs">
            
            {/* Link 1: Início */}
            <button
              onClick={() => handleNavigate('/')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Início
            </button>

            {/* Link 2: Espiritismo Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('espiritismo')}
                onMouseEnter={() => setActiveDropdown('espiritismo')}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'espiritismo'
                    ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                Espiritismo
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'espiritismo' ? 'rotate-180 text-primary dark:text-sky-400' : ''}`} />
              </button>
              
              {/* Dropdown Card */}
              {activeDropdown === 'espiritismo' && (
                <div 
                  className="absolute left-0 mt-2.5 w-64 rounded-2xl bg-white/95 dark:bg-[#081326]/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl p-2 animate-fadeIn z-50 text-left"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavigate('/', 'principios')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-300 cursor-pointer text-xs font-bold"
                  >
                    <HelpCircle className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    5 Princípios Básicos
                  </button>
                  <button
                    onClick={() => handleNavigate('/recursos', 'encontrar-centro')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-300 cursor-pointer text-xs font-bold"
                  >
                    <Compass className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Achar um Centro (FEB / Maps)
                  </button>
                  <button
                    onClick={() => handleNavigate('/recursos', 'biblioteca-digital')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-300 cursor-pointer text-xs font-bold"
                  >
                    <Star className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Livros, Vídeos & Filmes
                  </button>
                  <button
                    onClick={() => handleNavigate('/', 'amor-ideal')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-300 cursor-pointer text-xs font-bold"
                  >
                    <Heart className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Amor Ideal & Mei Mei
                  </button>
                </div>
              )}
            </div>

            {/* Link 3: Recursos (Novo Hub) */}
            <button
              onClick={() => handleNavigate('/recursos')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/recursos' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Recursos
            </button>

            {/* Link 4: Nossa História */}
            <button
              onClick={() => handleNavigate('/historia')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/historia' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Nossa História
            </button>

            {/* Link 5: Projeto Resgate */}
            <button
              onClick={() => handleNavigate('/resgate')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                currentRoute === '/resgate' 
                  ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-300 font-bold shadow-xs' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#030914]/95 backdrop-blur-xl shadow-xl animate-fadeIn p-4 space-y-4">
          <div className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavigate('/')}
              className={`w-full text-left py-2 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Início (Acolhimento)
            </button>
            <button
              onClick={() => handleNavigate('/recursos')}
              className={`w-full text-left py-2 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/recursos' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Recursos & Apoio
            </button>
            <button
              onClick={() => handleNavigate('/historia')}
              className={`w-full text-left py-2 px-3 rounded-xl font-semibold text-xs transition-colors ${
                currentRoute === '/historia' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Nossa História
            </button>
            
            <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>
            
            <div className="px-3 py-1 text-slate-400 dark:text-slate-500 font-extrabold text-[10px] uppercase tracking-wider">Espiritismo</div>
            <button
              onClick={() => handleNavigate('/', 'principios')}
              className="w-full text-left py-2 px-5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
            >
              5 Princípios Básicos
            </button>
            <button
              onClick={() => handleNavigate('/recursos', 'encontrar-centro')}
              className="w-full text-left py-2 px-5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
            >
              Achar um Centro (FEB / Maps)
            </button>
            <button
              onClick={() => handleNavigate('/recursos', 'biblioteca-digital')}
              className="w-full text-left py-2 px-5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
            >
              Materiais & Livros em PDF
            </button>
            <button
              onClick={() => handleNavigate('/', 'amor-ideal')}
              className="w-full text-left py-2 px-5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
            >
              Amor Ideal & Mei Mei
            </button>

            <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>

            <div className="px-3 py-1 text-slate-400 dark:text-slate-500 font-extrabold text-[10px] uppercase tracking-wider">O Projeto</div>
            <button
              onClick={() => handleNavigate('/resgate')}
              className={`w-full text-left py-2 px-5 rounded-xl font-medium text-xs transition-colors ${
                currentRoute === '/resgate' ? 'bg-primary/10 text-primary dark:text-sky-300 font-bold' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Projeto Resgate
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
            <button
              onClick={() => handleNavigate('/resgate', 'inscricao')}
              className="w-full py-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white shadow-xs transition-all active:scale-95"
            >
              Quero Ser Voluntário
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
