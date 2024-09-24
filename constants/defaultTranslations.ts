import { TranslationState } from "../types/TranslationTypes";

export const defaultDictionary: TranslationState["dictionary"] = {
  Header: {
    salonName: "Lumina",
    home: "",
    services: "",
    about: "",
    contact: "",
    languageSelector: "",
    login: "",
    loginDescription: "",
    close: "",
    gallery: "",
  },
  HeroSection: {
    title: "",
    description: "",
    buttonText: "",
  },
  ServicesSection: {
    sectionTitle: "",
    haircuts: {
      title: "",
      description: "",
    },
    coloring: {
      title: "",
      description: "",
    },
    styling: {
      title: "",
      description: "",
    },
    treatments: {
      title: "",
      description: "",
    },
  },
  ContactForm: {
    sectionTitle: "",
    callButton: "",
    namePlaceholder: "",
    emailPlaceholder: "",
    subjectPlaceholder: "",
    messagePlaceholder: "",
    submitButton: "",
  },
  LoginForm: {
    title: "",
    description: "",
    emailLabel: "",
    passwordLabel: "",
    signInButton: "",
    orContinueWith: "",
    githubButton: "",
    googleButton: "",
    noAccountText: "",
    signUpLink: "",
  },
  Footer: {
    copyright: "",
  },
};

export const defaultLanguage: TranslationState["language"] = "en";
