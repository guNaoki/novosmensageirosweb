import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpiritismPortal from './components/SpiritismPortal';
import RescuePortal from './components/RescuePortal';
import HistoryPortal from './components/HistoryPortal';

function App() {
  const [route, setRoute] = useState(() => {
    // Get initial route from hash
    const initialHash = window.location.hash;
    if (initialHash === '#/resgate') return '#/resgate';
    if (initialHash === '#/historia') return '#/historia';
    return '#/';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash.startsWith('#/resgate')) {
        setRoute('#/resgate');
      } else if (currentHash.startsWith('#/historia')) {
        setRoute('#/historia');
      } else {
        setRoute('#/');
      }
      // Scroll to top on route change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleRouteChange = (newRoute: string) => {
    window.location.hash = newRoute;
    setRoute(newRoute);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Dynamic Navbar */}
      <Navbar 
        currentRoute={route} 
        onChangeRoute={handleRouteChange}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Portals Content with smooth page transition animations */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {route === '#/resgate' && (
            <motion.div
              key="rescue-portal"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <RescuePortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}

          {route === '#/historia' && (
            <motion.div
              key="history-portal"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <HistoryPortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}

          {route === '#/' && (
            <motion.div
              key="spiritism-portal"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <SpiritismPortal onChangeRoute={handleRouteChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Shared Footer */}
      <Footer currentRoute={route} onChangeRoute={handleRouteChange} />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
