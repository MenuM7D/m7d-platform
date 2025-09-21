import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons';
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

  const translations = {
    ar: {
      title: 'M7D-DEV',
      platformsTitle: 'منصاتي',
      whatsapp: 'واتساب (تواصل)',
      whatsappChannel: 'قناة واتساب',
      instagram: 'انستغرام',
      facebook: 'فيسبوك',
      youtube: 'يوتيوب',
      tiktok: 'تيك توك',
      footer: 'تم التصميم بحب ❤️'
    },
    en: {
      title: 'M7D-DEV',
      platformsTitle: 'My Platforms',
      whatsapp: 'WhatsApp (Contact)',
      whatsappChannel: 'WhatsApp Channel',
      instagram: 'Instagram',
      facebook: 'Facebook',
      youtube: 'YouTube',
      tiktok: 'TikTok',
      footer: 'Designed with ❤️'
    }
  };

  const t = translations[language];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const socialLinks = [
    {
      name: t.whatsapp,
      url: 'https://wa.me/201220864180',
      icon: faWhatsapp,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: t.whatsappChannel,
      url: 'https://whatsapp.com/channel/0029ValNLOS7IUYNlsgu9X3w',
      icon: faWhatsapp,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: t.instagram,
      url: 'https://www.instagram.com/m7d_dev/profilecard/',
      icon: faInstagram,
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: t.facebook,
      url: 'https://www.facebook.com/share/1694rLomWR/',
      icon: faFacebook,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: t.youtube,
      url: 'https://youtube.com/@tanjiro-creator-bots?si=T_t9pKXiJ1htp1p9',
      icon: faYoutube,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: t.tiktok,
      url: 'https://vm.tiktok.com/ZS6LnomLB/',
      icon: faTiktok,
      color: 'bg-black hover:bg-gray-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delay: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-500 dark:bg-gray-950 bg-gray-100 text-gray-800 dark:text-white">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 flex gap-4 items-center"
      >
        {/* Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          aria-label="Toggle language"
          className="p-3 rounded-full transition-all duration-300 dark:bg-gray-800 bg-gray-200"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-xl dark:text-gray-200" />
        </motion.button>
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-3 rounded-full transition-all duration-300 dark:bg-gray-800 bg-gray-200"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl dark:text-gray-200" />
        </motion.button>
      </motion.header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center p-6 md:p-8 w-full max-w-lg">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-md"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            {t.title}
          </span>
        </motion.h1>

        {/* Platforms Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {t.platformsTitle}
          </h2>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 ${link.color}`}
            >
              <FontAwesomeIcon icon={link.icon} className="text-2xl mr-3" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-4 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;

