export const languages = {
    en: 'English',
    es: 'Español',
  };
  
  export const defaultLang = 'es';

  export const showDefaultLang = false;
  
  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.twitter': 'Twitter',
    },
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      // Agregar traducción faltante para Twitter
      'nav.twitter': 'Twitter',
    },
  } as const;

  export const routes = {
    es: {
      'about': 'nosotros',
      'services': 'servicios'
    },
    en: {
      'about': 'about',
      'services': 'services'
    },
  }