import React, { useState, useEffect } from 'react';
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
      color: 'hover:text-green-500'
    },
    {
      name: t.whatsappChannel,
      url: 'https://whatsapp.com/channel/0029ValNLOS7IUYNlsgu9X3w',
      icon: faWhatsapp,
      color: 'hover:text-green-500'
    },
    {
      name: t.instagram,
      url: 'https://www.instagram.com/m7d_dev/profilecard/',
      icon: faInstagram,
      color: 'hover:text-pink-500'
    },
    {
      name: t.facebook,
      url: 'https://www.facebook.com/share/1694rLomWR/',
      icon: faFacebook,
      color: 'hover:text-blue-600'
    },
    {
      name: t.youtube,
      url: 'https://youtube.com/@tanjiro-creator-bots?si=T_t9pKXiJ1htp1p9',
      icon: faYoutube,
      color: 'hover:text-red-600'
    },
    {
      name: t.tiktok,
      url: 'https://vm.tiktok.com/ZS6LnomLB/',
      icon: faTiktok,
      color: 'hover:text-black dark:hover:text-white'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300 dark:bg-gray-900 bg-gray-100 text-gray-800 dark:text-white">
      {/* Header with toggles */}
      <header className="absolute top-4 right-4 flex gap-4 items-center">
        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          aria-label="Toggle language"
          className="p-3 rounded-full transition-transform hover:scale-110 focus:outline-none dark:bg-gray-800 bg-gray-200"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-xl dark:text-gray-200" />
        </button>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="p-3 rounded-full transition-transform hover:scale-110 focus:outline-none dark:bg-gray-800 bg-gray-200"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl dark:text-gray-200" />
        </button>
      </header>

      {/* Main Profile Card */}
      <div className="w-full max-w-lg p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md bg-white/70 dark:bg-gray-800/70 transition-colors duration-300 transform scale-95 md:scale-100">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold border-4 border-white dark:border-gray-700 shadow-lg">
            M7D
          </div>
          {/* Name & Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-1">{t.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-4">{t.subtitle}</p>
          {/* Bio */}
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
            {t.bio}
          </p>
        </div>

        {/* Platforms Section */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">{t.platformsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-4 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-200 dark:border-gray-700 ${
                  darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-700'
                } ${link.color}`}
              >
                <FontAwesomeIcon icon={link.icon} className="text-2xl mr-3" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;

