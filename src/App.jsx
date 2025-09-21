import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faGlobe, faChevronDown, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('ar');
  const [showPlatforms, setShowPlatforms] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const socialLinks = [
    {
      url: 'https://wa.me/201220864180',
      icon: faWhatsapp,
      color: 'text-green-600',
      hover: 'hover:text-green-400'
    },
    {
      url: 'https://whatsapp.com/channel/0029ValNLOS7IUYNlsgu9X3w',
      icon: faShareNodes,
      color: 'text-green-600',
      hover: 'hover:text-green-400'
    },
    {
      url: 'https://www.instagram.com/m7d_dev/profilecard/',
      icon: faInstagram,
      color: 'text-pink-600',
      hover: 'hover:text-pink-400'
    },
    {
      url: 'https://www.facebook.com/share/1694rLomWR/',
      icon: faFacebook,
      color: 'text-blue-600',
      hover: 'hover:text-blue-400'
    },
    {
      url: 'https://youtube.com/@tanjiro-creator-bots?si=T_t9pKXiJ1htp1p9',
      icon: faYoutube,
      color: 'text-red-600',
      hover: 'hover:text-red-400'
    },
    {
      url: 'https://vm.tiktok.com/ZS6LnomLB/',
      icon: faTiktok,
      color: 'text-black dark:text-gray-300',
      hover: 'hover:text-gray-800 dark:hover:text-white'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    show: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.07 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      {/* Header with language and dark mode toggles */}
      <header className="absolute top-4 right-4 flex gap-4 items-center">
        {/* Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          aria-label="Toggle language"
          className="p-3 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 shadow-md"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-xl" />
        </motion.button>
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-3 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 shadow-md"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </motion.button>
      </header>

      {/* Main content container */}
      <main className="flex flex-col items-center text-center p-6 md:p-8 w-full max-w-sm sm:max-w-md">
        {/* Toggle button to show/hide platforms */}
        <motion.button
          onClick={() => setShowPlatforms(!showPlatforms)}
          className="flex items-center justify-center p-4 rounded-full bg-gray-200 dark:bg-gray-800 shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <motion.div
            initial={false}
            animate={{ rotate: showPlatforms ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
          </motion.div>
        </motion.button>

        {/* Platforms container (collapsible) */}
        <AnimatePresence>
          {showPlatforms && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 overflow-hidden w-full"
            >
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 bg-gray-200 dark:bg-gray-800 ${link.hover}`}
                  >
                    <FontAwesomeIcon icon={link.icon} className={`text-4xl ${link.color}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;

