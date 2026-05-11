import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const dictionary = dictionaries[locale] || dictionaries['fr'];
  return dictionary();
};
