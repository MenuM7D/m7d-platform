import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { LuShare2 } from 'react-icons/lu';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showPlatforms, setShowPlatforms] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, [darkMode]);

  const socialLinks = [
    {
      url: 'https://wa.me/201220864180',
      icon: faWhatsapp,
      color: 'text-green-500',
      hover: 'hover:text-green-400'
    },
    {
      url: 'https://whatsapp.com/channel/0029ValNLOS7IUYNlsgu9X3w',
      icon: LuShare2,
      color: 'text-green-500',
      hover: 'hover:text-green-400'
    },
    {
      url: 'https://www.instagram.com/m7d_dev/profilecard/',
      icon: faInstagram,
      color: 'text-pink-500',
      hover: 'hover:text-pink-400'
    },
    {
      url: 'https://www.facebook.com/share/1694rLomWR/',
      icon: faFacebook,
      color: 'text-blue-500',
      hover: 'hover:text-blue-400'
    },
    {
      url: 'https://youtube.com/@tanjiro-creator-bots?si=T_t9pKXiJ1htp1p9',
      icon: faYoutube,
      color: 'text-red-500',
      hover: 'hover:text-red-400'
    },
    {
      url: 'https://vm.tiktok.com/ZS6LnomLB/',
      icon: faTiktok,
      color: 'text-black dark:text-gray-100',
      hover: 'hover:text-gray-900 dark:hover:text-white'
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

  const glassStyle = darkMode
    ? "bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-white/10 shadow-lg backdrop-blur-md"
    : "bg-black/10 dark:bg-white/10 border border-black/20 dark:border-black/10 shadow-lg backdrop-blur-md";

  const toggleStyle = darkMode
    ? "bg-gray-800 text-gray-200"
    : "bg-gray-200 text-gray-800";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-500">
      <header className="absolute top-4 right-4 flex gap-4 items-center">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className={`p-3 rounded-full transition-all duration-300 shadow-md ${toggleStyle}`}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </motion.button>
      </header>

      <main className="flex flex-col items-center text-center p-6 md:p-8 w-full max-w-sm sm:max-w-md">
        <motion.button
          onClick={() => setShowPlatforms(!showPlatforms)}
          className={`flex items-center justify-center p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 ${toggleStyle}`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: showPlatforms ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
          </motion.div>
        </motion.button>

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
                    className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${glassStyle}`}
                  >
                    {link.icon === LuShare2 ? (
                      <LuShare2 className={`text-4xl ${link.color} ${link.hover}`} />
                    ) : (
                      <FontAwesomeIcon icon={link.icon} className={`text-4xl ${link.color} ${link.hover}`} />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-auto p-4 text-center">
        <p className="font-extrabold text-2xl" style={{
          animation: 'rgb-glow 4s infinite linear',
          background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          M7D-PLATFORMS
        </p>
      </footer>
    </div>
  );
};

export default App;

