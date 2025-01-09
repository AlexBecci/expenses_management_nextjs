import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos JSON con traducciones
import en from '../locales/en.json';
import es from '../locales/es.json';

// Configuración de i18next
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en', // Idioma predeterminado
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  interpolation: {
    escapeValue: false, // React ya maneja el escape
  },
});

export default i18n;
