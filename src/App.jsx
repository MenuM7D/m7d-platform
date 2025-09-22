import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { LuSun, LuMoon, LuShare2 } from 'react-icons/lu';

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
      icon: FaWhatsapp,
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
      icon: FaInstagram,
      color: 'text-pink-500',
      hover: 'hover:text-pink-400'
    },
    {
      url: 'https://www.facebook.com/share/1694rLomWR/',
      icon: FaFacebook,
      color: 'text-blue-500',
      hover: 'hover:text-blue-400'
    },
    {
      url: 'https.youtube.com/@tanjiro-creator-bots?si=T_t9pKXiJ1htp1p9',
      icon: FaYoutube,
      color: 'text-red-500',
      hover: 'hover:text-red-400'
    },
    {
      url: 'https.vm.tiktok.com/ZS6LnomLB/',
      icon: FaTiktok,
      color: 'text-black dark:text-gray-100',
      hover: 'hover:text-gray-900 dark:hover:text-white'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8 transition-colors duration-500 overflow-hidden relative">
      <style jsx>{`
        @keyframes rgb-glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <header className="fixed top-4 right-4 flex gap-4 items-center z-50">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-3 rounded-full transition-all duration-300 shadow-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-white/10 backdrop-blur-md"
        >
          {darkMode ? <LuSun className="text-xl text-white" /> : <LuMoon className="text-xl text-black" />}
        </motion.button>
      </header>

      <main className="flex flex-col items-center justify-center text-center w-full max-w-sm sm:max-w-md flex-grow">
        <motion.div
          onClick={() => setShowPlatforms(!showPlatforms)}
          className="w-full flex justify-center cursor-pointer"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-5xl mb-8"
            style={{
              animation: 'rgb-glow 4s infinite linear',
              background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            M7D
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {showPlatforms && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 w-full"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-white/10 backdrop-blur-md"
                  >
                    <link.icon className={`text-4xl ${link.color} ${link.hover}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="w-full text-center p-4">
        <p className="font-['Orbitron'] font-extrabold text-2xl" style={{
          animation: 'rgb-glow 4s infinite linear',
          background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          PLATFORMS
        </p>
      </footer>
    </div>
  );
};

export default App;

