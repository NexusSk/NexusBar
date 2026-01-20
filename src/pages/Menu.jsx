import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState('monday');

  const days = [
    { key: 'monday', label: 'Po' },
    { key: 'tuesday', label: 'Ut' },
    { key: 'wednesday', label: 'St' },
    { key: 'thursday', label: 'St' },
    { key: 'friday', label: 'Pi' },
  ];

  const getDayLabel = (key) => {
    const labels = {
      monday: { sk: 'Pondelok', en: 'Monday' },
      tuesday: { sk: 'Utorok', en: 'Tuesday' },
      wednesday: { sk: 'Streda', en: 'Wednesday' },
      thursday: { sk: 'Stvrtok', en: 'Thursday' },
      friday: { sk: 'Piatok', en: 'Friday' },
    };
    return labels[key];
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title text-gradient mb-4">{t('menu.title')}</h1>
          <p className="section-subtitle">{t('menu.subtitle')}</p>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass p-2 inline-flex gap-2">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeDay === day.key
                    ? 'bg-gradient-to-r from-accent to-gold text-white shadow-lg'
                    : 'text-cream/70 hover:text-cream hover:bg-white/5'
                }`}
              >
                <span className="hidden sm:inline">{getDayLabel(day.key).sk}</span>
                <span className="sm:hidden">{day.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Day Header */}
              <div className="text-center mb-8 pb-6 border-b border-white/10">
                <h2 className="text-3xl font-display font-bold text-gold">
                  {getDayLabel(activeDay).sk} / {getDayLabel(activeDay).en}
                </h2>
              </div>

              {/* Soup Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-cream">
                    {t('menu.soup')}
                  </h3>
                  <span className="ml-auto text-gold font-semibold">
                    {t('menu.prices.soup')} EUR
                  </span>
                </div>
                <div className="ml-13 pl-13 border-l-2 border-accent/20 ml-5 pl-8">
                  <p className="text-cream/80 text-lg">
                    {t(`menu.${activeDay}.soup`)}
                  </p>
                </div>
              </div>

              {/* Main Dishes Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-cream">
                    {t('menu.main')}
                  </h3>
                  <span className="ml-auto text-gold font-semibold">
                    {t('menu.prices.main')} EUR
                  </span>
                </div>

                <div className="space-y-4 ml-5 pl-8 border-l-2 border-gold/20">
                  {['main1', 'main2', 'main3'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center text-sm font-semibold text-accent shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-cream/80 text-lg group-hover:text-cream transition-colors">
                          {t(`menu.${activeDay}.${item}`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Price Info */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="glass p-6 rounded-xl bg-gradient-to-r from-accent/10 to-gold/10">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-cream/60 text-sm mb-1">
                        {t('menu.soup')} + {t('menu.main')}
                      </p>
                      <p className="text-2xl font-display font-bold text-gold">
                        {t('menu.prices.combo')} EUR
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-cream/60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>11:00 - 14:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="card text-center py-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <p className="text-cream/80 font-medium">Cerstve suroviny</p>
            <p className="text-cream/50 text-sm">Fresh ingredients</p>
          </div>

          <div className="card text-center py-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gold/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-cream/80 font-medium">Rychle podavanie</p>
            <p className="text-cream/50 text-sm">Fast service</p>
          </div>

          <div className="card text-center py-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-cream/80 font-medium">Odnos zadarmo</p>
            <p className="text-cream/50 text-sm">Free takeaway</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
