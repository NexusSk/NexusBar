import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-display font-bold text-gradient">NexusBar</span>
            </div>
            <p className="text-cream/60 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-cream/60 hover:text-cream transition-colors">
                  {t('nav.home')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/program" className="text-cream/60 hover:text-cream transition-colors">
                  {t('nav.program')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-cream/60 hover:text-cream transition-colors">
                  {t('nav.menu')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-cream/60 hover:text-cream transition-colors">
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4">{t('contact.info.title')}</h4>
            <ul className="space-y-2 text-cream/60">
              <li>{t('contact.info.address')}</li>
              <li>{t('contact.info.phone')}</li>
              <li>{t('contact.info.email')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-cream/40 text-sm">
            {currentYear} NexusBar. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-cream/40 hover:text-cream text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-cream/40 hover:text-cream text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
