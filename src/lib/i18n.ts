import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

// Register translations
register('en', () => import('../locales/en.json'));
register('fr', () => import('../locales/fr.json'));

const getStoredLocale = (): string | null => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('locale');
  }
  return null;
};

const setStoredLocale = (locale: string): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
};


// Initialize `svelte-i18n`
init({
  fallbackLocale: 'en',
  initialLocale: getStoredLocale() || getLocaleFromNavigator(),
});


export const saveLocale = setStoredLocale;
export { locale };
