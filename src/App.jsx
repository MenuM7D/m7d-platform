import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaChevronDown } from 'react-icons/fa6';
import { LuSun, LuMoon, LuShare2, LuVolume2, LuVolumeX } from 'react-icons/lu';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling completely
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [darkMode]);

  useEffect(() => {
    if (audioRef.current && isUserInteracted) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Autoplay failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isUserInteracted]);

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

  const handleStart = () => {
    setIsUserInteracted(true);
    setIsPlaying(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-500 overflow-hidden relative">
      {/* Audio element for background music */}
      <audio ref={audioRef} src="https://files.catbox.moe/jbtch7.mp3" loop />
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
        
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:wght@800&display=swap');
        
        /* Prevent scrolling on all devices */
        body, html {
          overflow: hidden !important;
          height: 100vh;
          touch-action: none;
          -webkit-overflow-scrolling: none;
        }
        
        /* Disable scrolling with mouse wheel */
        body {
          overscroll-behavior: none;
        }
      `}</style>

      <AnimatePresence>
        {!isUserInteracted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-2xl font-bold text-center mb-6"
            >
              مرحباً بك
            </motion.h1>
            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 backdrop-blur-md shadow-lg"
            >
              اضغط للبدء
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-4 right-4 flex gap-4 items-center z-50">
        {/* Button to toggle audio play/pause */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label="Toggle audio"
          className="p-3 rounded-full transition-all duration-300 shadow-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-white/10 backdrop-blur-md"
        >
          {isPlaying ? <LuVolume2 className="text-xl text-white" /> : <LuVolumeX className="text-xl text-white" />}
        </motion.button>
        {/* Button to toggle dark mode */}
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

      <main className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto">
        <motion.div 
          className="font-black text-3xl md:text-4xl mb-2"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            animation: 'rgb-glow 3s infinite linear',
            background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
          }}
        >
          M7D PLATFORMS
        </motion.div>
        
        <motion.div
          onClick={() => setShowPlatforms(!showPlatforms)}
          className="w-full flex justify-center cursor-pointer mt-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: showPlatforms ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-full bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-lg"
            >
              <FaChevronDown className="text-xl text-white/80 dark:text-white/80" />
            </motion.div>
          </motion.div>
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

      <footer className="w-full text-center p-4 invisible">
        <p className="font-black text-2xl" style={{
          fontFamily: "'Montserrat', sans-serif",
          animation: 'rgb-glow 3s infinite linear',
          background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          M7D PLATFORMS
        </p>
      </footer>
    </div>
  );
};

export default App;

