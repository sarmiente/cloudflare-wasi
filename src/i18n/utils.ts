
import { ui, defaultLang, showDefaultLang, routes  } from './ui';
export type RouteKey = keyof typeof routes.es; // 'about' | 'services'

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
  }
  
  export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }


  export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: `/${RouteKey}/` | string, l: string = lang) {
        const pathName = path.replaceAll('/', '') as RouteKey;
        
      
      const hasTranslation = defaultLang !== l && 
        routes[l as keyof typeof routes] !== undefined && 
        routes[l as keyof typeof routes][pathName] !== undefined;
      
      const translatedPath = hasTranslation 
        ? '/' + routes[l as keyof typeof routes][pathName] 
        : path;
  
      return !showDefaultLang && l === defaultLang 
        ? translatedPath 
        : `/${l}${translatedPath}`;
    }
  }

  export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split('/');
    const path = parts.pop() || parts.pop() as RouteKey; // Type assertion
  
    if (path === undefined) return undefined;
  
    const currentLang = getLangFromUrl(url);
  
    if (defaultLang === currentLang) {
      return routes[defaultLang][path as RouteKey] || undefined;
    }
  
    const reversedKey = Object.entries(routes[currentLang])
      .find(([_, value]) => value === path)?.[0];
  
    return reversedKey as RouteKey | undefined;
  }