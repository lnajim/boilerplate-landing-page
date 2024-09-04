// utils/index.ts

import { Locale } from "../i18n-type";

const dictionaries = {
  en: () => import("../locales/en.json").then((module) => module.default),
  fr: () => import("../locales/fr.json").then((module) => module.default),
};
// @ts-ignore
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
