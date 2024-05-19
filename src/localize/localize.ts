import * as cs from './languages/cs.json';
import * as en from './languages/en.json';
import * as es from './languages/es.json';
import * as fr from './languages/fr.json';
import * as it from './languages/it.json';
import * as nl from './languages/nl.json';
import * as pt_Br from './languages/pt-BR.json'
import * as zh_Hans from './languages/zh-Hans.json';

var languages: any = {
  cs: cs,
  en: en,
  es: es,
  fr: fr,
  it: it,
  nl: nl,
  'pt-BR': pt_Br,
  'zh-Hans': zh_Hans,
};

export function localize(
  string: string,
  language: string,
  search: string | string[] = '',
  replace: string | string[] = ''
) {
  const lang = language.replace(/['"]+/g, '').replace('-', '_');

  var translated: string;

  try {
    translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
  } catch (e) {
    translated = string.split('.').reduce((o, i) => o[i], languages['en']);
  }

  if (translated === undefined) translated = string.split('.').reduce((o, i) => o[i], languages['en']);

  if (search !== '' && replace !== '') {
    if (!Array.isArray(search)) search = [search];
    if (!Array.isArray(replace)) replace = [replace];
    for (let i = 0; i < search.length; i++) {
      translated = translated.replace(search[i], replace[i]);
    }
  }
  return translated;
}
