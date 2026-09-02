import { useState } from 'react';
import { Heart, ChevronDown, Menu, X, Compass, HelpCircle, Star, Sun, Moon } from 'lucide-react';
import Button from './ui/Button';

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
    
    onChangeRoute(route);
    
    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
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
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800 transition-colors duration-300 shadow-xs">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button 
              onClick={() => handleNavigate('#/')}
              className="flex items-center space-x-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
            >
              <img 
                src="/logo-mensageiros.webp" 
                alt="Novos Mensageiros" 
                className="h-10 w-auto object-contain transform hover:scale-105 transition-transform duration-200" 
              />
              <span className="font-extrabold text-xl tracking-tight text-primary-dark dark:text-white select-none text-left">
                Novos<span className="text-primary dark:text-sky-400">Mensageiros</span>
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center font-semibold text-sm text-slate-700 dark:text-slate-200">
            {/* Link 1: Início */}
            <button
              onClick={() => handleNavigate('#/')}
              className={`hover:text-primary dark:hover:text-sky-400 transition-colors cursor-pointer py-2 ${
                currentRoute === '#/' ? 'text-primary dark:text-sky-400 border-b-2 border-primary dark:border-sky-400 font-bold' : ''
              }`}
            >
              Início
            </button>

            {/* Link 2: Nossa História */}
            <button
              onClick={() => handleNavigate('#/historia')}
              className={`hover:text-primary dark:hover:text-sky-400 transition-colors cursor-pointer py-2 ${
                currentRoute === '#/historia' ? 'text-primary dark:text-sky-400 border-b-2 border-primary dark:border-sky-400 font-bold' : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              Nossa História
            </button>

            {/* Link 3: Espiritismo Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('espiritismo')}
                onMouseEnter={() => setActiveDropdown('espiritismo')}
                className={`flex items-center gap-1 hover:text-primary dark:hover:text-sky-400 transition-colors cursor-pointer py-2 ${
                  activeDropdown === 'espiritismo' ? 'text-primary dark:text-sky-400 font-bold' : ''
                }`}
              >
                Aprender Espiritismo
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'espiritismo' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Card */}
              {activeDropdown === 'espiritismo' && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2.5 animate-fadeIn z-50 text-left"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavigate('#/', 'principios')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs font-bold"
                  >
                    <HelpCircle className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    5 Princípios Básicos
                  </button>
                  <button
                    onClick={() => handleNavigate('#/', 'materiais')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs font-bold"
                  >
                    <Star className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Livros, Vídeos & Filmes
                  </button>
                  <button
                    onClick={() => handleNavigate('#/', 'buscar-ajuda')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs font-bold"
                  >
                    <Compass className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Achar um Centro (FEB)
                  </button>
                  <button
                    onClick={() => handleNavigate('#/', 'amor-ideal')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs font-bold"
                  >
                    <Heart className="w-4 h-4 text-primary dark:text-sky-400 shrink-0" />
                    Amor Ideal & Mei Mei
                  </button>
                </div>
              )}
            </div>

            {/* Link 4: O Projeto (Single unified route) */}
            <button
              onClick={() => handleNavigate('#/resgate')}
              className={`hover:text-primary dark:hover:text-sky-400 transition-colors cursor-pointer py-2 ${
                currentRoute === '#/resgate' ? 'text-primary dark:text-sky-400 border-b-2 border-primary dark:border-sky-400 font-bold' : ''
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
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                title={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
                aria-label={darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700 hover:text-primary transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>
            )}

            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavigate('#/resgate', 'inscricao')}
              className="whitespace-nowrap"
            >
              Quero Ser Voluntário
            </Button>
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
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl animate-fadeIn p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavigate('#/')}
              className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-sm transition-colors"
            >
              Início (Acolhimento)
            </button>
            <button
              onClick={() => handleNavigate('#/', 'nossa-historia')}
              className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-sm transition-colors"
            >
              Nossa História
            </button>
            
            <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>
            
            <div className="px-4 py-1 text-slate-400 dark:text-slate-500 font-extrabold text-[10px] uppercase tracking-wider">Espiritismo</div>
            <button
              onClick={() => handleNavigate('#/', 'principios')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs transition-colors"
            >
              5 Princípios Básicos
            </button>
            <button
              onClick={() => handleNavigate('#/', 'buscar-ajuda')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs transition-colors"
            >
              Achar um Centro (FEB)
            </button>
            <button
              onClick={() => handleNavigate('#/', 'materiais')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs transition-colors"
            >
              Materiais de Apoio
            </button>
            <button
              onClick={() => handleNavigate('#/', 'amor-ideal')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs transition-colors"
            >
              Amor Ideal & Mei Mei
            </button>

            <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>

            <div className="px-4 py-1 text-slate-400 dark:text-slate-500 font-extrabold text-[10px] uppercase tracking-wider">O Projeto</div>
            <button
              onClick={() => handleNavigate('#/resgate')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 cursor-pointer text-xs transition-colors"
            >
              Projeto Resgate
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavigate('#/resgate', 'inscricao')}
              className="w-full py-3.5"
            >
              Quero Ser Voluntário
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
