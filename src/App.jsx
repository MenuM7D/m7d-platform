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

// Custom icon for WhatsApp channel
const WhatsAppChannelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10">
    <path fill="currentColor" d="M380.9 97.4C339.8 55.4 286.1 32 224 32S108.2 55.4 67.1 97.4 32 191.9 32 256s23.4 158.6 64.6 200.6C108.2 496.6 161.9 520 224 520s115.8-23.4 156.9-65.4c41.1-42 64.6-96.5 64.6-160.6s-23.4-118.6-64.6-160.6zM272 256c0 14.1-1.3 28.1-4.1 41.5-3.1 14.6-11.4 27.6-23.5 38-12.1 10.4-26.6 16.5-42.5 18.2-15.9 1.7-32.5-.2-48.5-5.9-16-5.7-30.8-15-44.4-28.7-13.6-13.7-24.1-30.5-31.5-48.4-7.4-17.9-10.4-37.4-8.8-57.2 1.6-19.8 8.9-39 21.9-56.9 13-17.9 28.5-31.9 46.5-41.9 18-10 37.3-15.1 57.8-15.1 23.3 0 45.4 8.7 62.4 26.6 17 17.9 26.3 40.5 26.3 64.9z"/>
  </svg>
);


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
      color: 'text-green-600',
      hover: 'hover:text-green-400'
    },
    {
      url: 'https://whatsapp.com/channel/0029ValNLOS7IUYNlsgu9X3w',
      icon: WhatsAppChannelIcon,
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
      color: 'text-gray-800 dark:text-gray-300',
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-500">
      {/* Header with dark mode toggle */}
      <header className="absolute top-4 right-4 flex gap-4 items-center">
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
                    {link.icon === WhatsAppChannelIcon ? (
                      <link.icon className={`text-4xl ${link.color}`} />
                    ) : (
                      <FontAwesomeIcon icon={link.icon} className={`text-4xl ${link.color}`} />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* M7D-PLATFORMS Signature with RGB glow */}
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

