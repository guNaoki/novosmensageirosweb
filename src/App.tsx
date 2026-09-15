import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpiritismPortal from './components/SpiritismPortal';
import RescuePortal from './components/RescuePortal';
import HistoryPortal from './components/HistoryPortal';
import LinksPortal from './components/LinksPortal';
import ResourcesPortal from './components/ResourcesPortal';

function App() {
  const [route, setRoute] = useState(() => {
    // 1. Backwards compatibility: handle hash redirects if coming from legacy links (e.g. #/resgate)
    const initialHash = window.location.hash;
    if (initialHash.startsWith('#/')) {
      const cleanFromHash = initialHash.replace(/^#/, '');
      window.history.replaceState({}, '', cleanFromHash);
      if (cleanFromHash.startsWith('/resgate')) return '/resgate';
      if (cleanFromHash.startsWith('/historia')) return '/historia';
      if (cleanFromHash.startsWith('/recursos')) return '/recursos';
      if (cleanFromHash.startsWith('/links') || cleanFromHash.startsWith('/bio')) return '/links';
      return '/';
    }

    // 2. Standard clean pathnames
    const path = window.location.pathname;
    if (path.startsWith('/resgate')) return '/resgate';
    if (path.startsWith('/historia')) return '/historia';
    if (path.startsWith('/recursos')) return '/recursos';
    if (path.startsWith('/links') || path.startsWith('/bio')) return '/links';
    return '/';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/resgate')) {
        setRoute('/resgate');
      } else if (path.startsWith('/historia')) {
        setRoute('/historia');
      } else if (path.startsWith('/recursos')) {
        setRoute('/recursos');
      } else if (path.startsWith('/links') || path.startsWith('/bio')) {
        setRoute('/links');
      } else {
        setRoute('/');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleRouteChange = (newRoute: string, elementId?: string) => {
    let cleanPath = newRoute.startsWith('#') ? newRoute.replace(/^#/, '') : newRoute;
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }

    if (window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
    }
    setRoute(cleanPath);

    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          const navbarOffset = 80;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isLinksRoute = route === '/links';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Dynamic Navbar (hidden on links/bio page for a distraction-free Linktree experience) */}
      {!isLinksRoute && (
        <Navbar 
          currentRoute={route} 
          onChangeRoute={handleRouteChange}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}

      {/* Main Portals Content with smooth page transition animations */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {route === '/links' && (
            <motion.div
              key="links-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <LinksPortal 
                onChangeRoute={handleRouteChange}
                darkMode={darkMode}
                onToggleDarkMode={toggleDarkMode}
              />
            </motion.div>
          )}

          {route === '/resgate' && (
            <motion.div
              key="rescue-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <RescuePortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}

          {route === '/historia' && (
            <motion.div
              key="history-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HistoryPortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}

          {route === '/recursos' && (
            <motion.div
              key="resources-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ResourcesPortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}

          {route === '/' && (
            <motion.div
              key="spiritism-portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <SpiritismPortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Shared Footer (hidden on links page as it has its own compact footer) */}
      {!isLinksRoute && (
        <Footer currentRoute={route} onChangeRoute={handleRouteChange} />
      )}

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
