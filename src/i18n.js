import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './assest/locales/en/translation.json';
import hrTranslation from './assest/locales/he/translation.json';
import arTranslation from './assest/locales/ar/translation.json';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hr: { translation: hrTranslation },
      ar: { translation: arTranslation },
    },
    fallbackLng: 'ar', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;