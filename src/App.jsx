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
      subtitle: 'مطور برمجيات',
      bio: 'أنا مطور برمجيات متخصص في بناء تطبيقات الويب والأدوات الرقمية. يسعدني التواصل معكم عبر منصاتي.',
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
      subtitle: 'Software Developer',
      bio: 'I am a software developer specializing in building web applications and digital tools. Feel free to connect with me through my platforms.',
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 transition-colors duration-500 dark:bg-gray-950 bg-gray-200 text-gray-800 dark:text-white"
      style={{
        background: 'linear-gradient(135deg, #1f2937, #4b5563, #6b7280)', // Gradient background for glass effect
      }}>

      {/* Main Profile Card - Glassmorphism style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-xl p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 transition-colors duration-500 transform"
      >
        <div className="flex flex-col items-center text-center text-white/90">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-1"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 font-medium mb-4"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg text-white/80 max-w-md mx-auto mb-8 leading-relaxed"
          >
            {t.bio}
          </motion.p>
        </div>

        {/* Platforms Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-4">{t.platformsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm shadow-lg text-white ${link.color}`}
              >
                <FontAwesomeIcon icon={link.icon} className="text-2xl mr-3" />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Fixed bottom navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 p-4 md:p-8 flex items-center justify-center gap-4 bg-white/10 dark:bg-black/10 backdrop-blur-lg border-t border-white/20 dark:border-white/10"
      >
        {/* Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          aria-label="Toggle language"
          className="p-3 rounded-full transition-all duration-300 bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg text-white/80"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-xl" />
        </motion.button>
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-3 rounded-full transition-all duration-300 bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg text-white/80"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default App;

