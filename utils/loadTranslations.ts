export async function loadTranslations(lang: string) {
  try {
    const translations = await import(`@/locales/${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    return null;
  }
}
