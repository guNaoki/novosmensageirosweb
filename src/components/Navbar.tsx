import { useState } from 'react';
import { Heart, ChevronDown, Menu, X, Compass, HelpCircle, Star, Users, Shield } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onChangeRoute: (route: string) => void;
}

export default function Navbar({ currentRoute, onChangeRoute }: NavbarProps) {
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
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button 
              onClick={() => handleNavigate('#/')}
              className="flex items-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
            >
              <div className="bg-primary/10 p-2 rounded-xl text-primary transform hover:scale-105 transition-transform duration-200">
                <Heart className="w-6 h-6 fill-primary" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-primary-dark select-none text-left">
                Novos<span className="text-primary">Mensageiros</span>
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links (Applying Hick's Law: 3 core categories) */}
          <div className="hidden md:flex space-x-8 items-center font-semibold text-sm text-slate-600">
            {/* Link 1: Início */}
            <button
              onClick={() => handleNavigate('#/')}
              className={`hover:text-primary transition-colors cursor-pointer py-2 ${
                currentRoute === '#/' ? 'text-primary border-b-2 border-primary' : ''
              }`}
            >
              Início
            </button>

            {/* Link 2: Espiritismo Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('espiritismo')}
                onMouseEnter={() => setActiveDropdown('espiritismo')}
                className={`flex items-center gap-1 hover:text-primary transition-colors cursor-pointer py-2 ${
                  activeDropdown === 'espiritismo' ? 'text-primary' : ''
                }`}
              >
                Espiritismo
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'espiritismo' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Card */}
              {activeDropdown === 'espiritismo' && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-2xl bg-white border border-slate-100 shadow-xl p-2.5 animate-fadeIn z-50 text-left"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavigate('#/', 'entender')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition text-slate-700 hover:text-primary cursor-pointer text-xs font-bold"
                  >
                    <HelpCircle className="w-4 h-4 text-primary" />
                    Princípios Básicos
                  </button>
                  <button
                    onClick={() => handleNavigate('#/', 'buscar-ajuda')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition text-slate-700 hover:text-primary cursor-pointer text-xs font-bold"
                  >
                    <Compass className="w-4 h-4 text-primary" />
                    Achar um Centro
                  </button>
                  <button
                    onClick={() => handleNavigate('#/', 'materiais')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition text-slate-700 hover:text-primary cursor-pointer text-xs font-bold"
                  >
                    <Star className="w-4 h-4 text-primary" />
                    Materiais de Apoio
                  </button>
                </div>
              )}
            </div>

            {/* Link 3: O Projeto Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('projeto')}
                onMouseEnter={() => setActiveDropdown('projeto')}
                className={`flex items-center gap-1 hover:text-primary transition-colors cursor-pointer py-2 ${
                  activeDropdown === 'projeto' || currentRoute === '#/historia' || currentRoute === '#/resgate' ? 'text-primary' : ''
                }`}
              >
                O Projeto
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'projeto' ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Card */}
              {activeDropdown === 'projeto' && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-2xl bg-white border border-slate-100 shadow-xl p-2.5 animate-fadeIn z-50 text-left"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavigate('#/historia')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition text-slate-700 hover:text-primary cursor-pointer text-xs font-bold"
                  >
                    <Users className="w-4 h-4 text-primary" />
                    Nossa História
                  </button>
                  <button
                    onClick={() => handleNavigate('#/resgate')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition text-slate-700 hover:text-primary cursor-pointer text-xs font-bold"
                  >
                    <Shield className="w-4 h-4 text-primary" />
                    Campanha de Resgate
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: CTA Button (Standard premium SaaS look like Vercel/Emito Nota) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavigate('#/resgate', 'inscricao')}
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.03] active:scale-95 transition duration-200 whitespace-nowrap cursor-pointer"
            >
              Quero Ser Voluntário
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-500 hover:text-primary hover:bg-slate-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-xl animate-fadeIn p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavigate('#/')}
              className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-sm"
            >
              Início (Acolhimento)
            </button>
            
            <div className="border-t border-slate-50 my-1"></div>
            
            <div className="px-4 py-1 text-slate-400 font-extrabold text-[10px] uppercase tracking-wider">Espiritismo</div>
            <button
              onClick={() => handleNavigate('#/', 'entender')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-xs"
            >
              Princípios Básicos
            </button>
            <button
              onClick={() => handleNavigate('#/', 'buscar-ajuda')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-xs"
            >
              Achar um Centro
            </button>
            <button
              onClick={() => handleNavigate('#/', 'materiais')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-xs"
            >
              Materiais de Apoio
            </button>

            <div className="border-t border-slate-50 my-1"></div>

            <div className="px-4 py-1 text-slate-400 font-extrabold text-[10px] uppercase tracking-wider">O Projeto</div>
            <button
              onClick={() => handleNavigate('#/historia')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-xs"
            >
              Nossa História
            </button>
            <button
              onClick={() => handleNavigate('#/resgate')}
              className="w-full text-left py-2 px-6 rounded-xl hover:bg-slate-50 font-semibold text-slate-600 hover:text-primary cursor-pointer text-xs"
            >
              Campanha de Resgate
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => handleNavigate('#/resgate', 'inscricao')}
              className="w-full bg-primary hover:bg-primary-hover text-white text-center py-3.5 rounded-xl font-bold shadow-md cursor-pointer text-sm"
            >
              Quero Ser Voluntário
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
