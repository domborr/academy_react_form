import { addLocale, useLocale } from 'ttag';


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
