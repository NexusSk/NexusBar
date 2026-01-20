import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { NavLink } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('features.cocktails.title'),
      desc: t('features.cocktails.desc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: t('features.atmosphere.title'),
      desc: t('features.atmosphere.desc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: t('features.events.title'),
      desc: t('features.events.desc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('features.food.title'),
      desc: t('features.food.desc'),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-gold/10 rounded-full blur-3xl" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-gold rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/30 mb-6">
              <span className="text-white font-bold text-5xl font-display">N</span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-display font-bold mb-4"
          >
            <span className="text-gradient">{t('hero.title')}</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gold font-display mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-lg text-cream/70 max-w-2xl mx-auto mb-10"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <NavLink to="/contact" className="btn-primary">
              {t('hero.cta')}
            </NavLink>
            <NavLink to="/program" className="btn-secondary">
              {t('hero.explore')}
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center mb-4 text-accent group-hover:text-gold transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream/60">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient">{t('location.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card aspect-video relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-cream/60">{t('location.address')}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Google Maps
                </a>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl font-display font-semibold text-gold mb-6">
                  {t('location.hours')}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-cream/80">{t('location.weekdays').split(':')[0]}</span>
                    <span className="text-accent font-semibold">{t('location.weekdays').split(': ')[1]}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-cream/80">{t('location.thursday').split(':')[0]}</span>
                    <span className="text-accent font-semibold">{t('location.thursday').split(': ')[1]}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-cream/80">{t('location.weekend').split(':')[0]}</span>
                    <span className="text-accent font-semibold">{t('location.weekend').split(': ')[1]}</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-accent/20 to-gold/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Rezervacie / Reservations</p>
                    <a href="tel:+421944110266" className="text-xl font-semibold text-cream hover:text-accent transition-colors">
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-4">
              {t('hero.subtitle')}
            </h2>
            <p className="text-cream/60 mb-8 max-w-xl mx-auto">
              {t('hero.description')}
            </p>
            <NavLink to="/contact" className="btn-primary inline-block">
              {t('hero.cta')}
            </NavLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
