import { create } from "zustand";
import { TranslationState } from "@/types/TranslationTypes";
import { defaultDictionary } from "@/constants/defaultTranslations";
import { loadTranslations } from "@/utils/loadTranslations";

const getBrowserLanguage = () => {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.split("-")[0];
    return ["en", "fr"].includes(browserLang) ? browserLang : "en";
  }
  return "en"; // Default to English if not in browser environment
};

const useTranslationStore = create<TranslationState>((set) => ({
  dictionary: defaultDictionary,
  language: getBrowserLanguage(),
  setLanguage: async (lang) => {
    const translations = await loadTranslations(lang);
    if (translations) {
      set({ language: lang, dictionary: translations });
    } else {
      console.error(`Failed to load translations for ${lang}`);
    }
  },
  setDictionary: (dictionary) => set({ dictionary }),
}));

// Initialize the store with the correct language and translations
const initializeStore = async () => {
  const initialLang = getBrowserLanguage();
  console.log("Initial language:", initialLang);
  const translations = await loadTranslations(initialLang);
  console.log("Loaded translations:", translations);
  if (translations) {
    useTranslationStore.setState({
      language: initialLang,
      dictionary: translations,
    });
  } else {
    console.error("Failed to load initial translations");
  }
};

// Call initializeStore when the module is imported
initializeStore();

export default useTranslationStore;
