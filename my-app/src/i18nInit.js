import { addLocale, useLocale } from 'ttag';
// import * as cookie from './cookie';

// const LOCALE_COOKIE = '__locale';

// function getLocale() {
//   return cookie.get(LOCALE_COOKIE) || 'en';
// }

// export function saveLocale(locale) {
//   cookie.set(LOCALE_COOKIE, locale);
// }

// // setup
// const locale = getLocale();

// console.log(getLocale)

let locale = navigator.language || navigator.userLanguage; 

if (locale === 'en' || locale === 'it') {
  const translationsObj = require(`../i18n/${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
} else {
    locale = 'en'
  const translationsObj = require(`../i18n/${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}
