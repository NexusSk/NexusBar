import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Program() {
  const { t } = useLanguage();

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  const getDayColor = (index) => {
    const colors = [
      'from-blue-500/20 to-purple-500/20',
      'from-amber-500/20 to-orange-500/20',
      'from-pink-500/20 to-rose-500/20',
      'from-emerald-500/20 to-teal-500/20',
      'from-accent/30 to-gold/30',
      'from-violet-500/20 to-indigo-500/20',
      'from-cyan-500/20 to-blue-500/20',
    ];
    return colors[index];
  };

  const getEventIcon = (index) => {
    const icons = [
      // Quiz
      <svg key="quiz" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      // Whiskey
      <svg key="whiskey" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      // Ladies
      <svg key="ladies" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      // Acoustic
      <svg key="acoustic" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>,
      // Karaoke
      <svg key="karaoke" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>,
      // DJ
      <svg key="dj" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
      </svg>,
      // Brunch
      <svg key="brunch" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>,
    ];
    return icons[index];
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title text-gradient mb-4">{t('program.title')}</h1>
          <p className="section-subtitle">{t('program.subtitle')}</p>
        </motion.div>

        {/* Weekly Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {days.map((day, index) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`card relative overflow-hidden group cursor-pointer ${
                day === 'friday' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getDayColor(index)} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
              
              <div className="relative z-10">
                {/* Day Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gold uppercase tracking-wider">
                    {t(`program.${day}.day`)}
                  </span>
                  <span className="text-sm text-cream/60">
                    {t(`program.${day}.time`)}
                  </span>
                </div>

                {/* Event Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center mb-4 text-accent group-hover:text-gold transition-colors">
                  {getEventIcon(index)}
                </div>

                {/* Event Name */}
                <h3 className="text-xl font-display font-bold text-cream mb-2">
                  {t(`program.${day}.event`)}
                </h3>

                {/* Event Description */}
                <p className="text-cream/60 text-sm leading-relaxed">
                  {t(`program.${day}.desc`)}
                </p>

                {/* Friday Special Badge */}
                {day === 'friday' && (
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                    <span className="text-xs text-accent font-medium">HOT EVENT</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Event Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass p-8 md:p-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                  {t('program.friday.day')}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
                  {t('program.friday.event')}
                </h2>
                <p className="text-cream/70 text-lg mb-6">
                  {t('program.friday.desc')}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{t('program.friday.time')}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center shadow-2xl shadow-accent/30 animate-glow">
                  <svg className="w-24 h-24 md:w-32 md:h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-transparent to-gold/10 border border-white/10 text-center"
        >
          <p className="text-cream/80">
            <span className="text-gold font-semibold">Tip:</span> {' '}
            {t('hero.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
