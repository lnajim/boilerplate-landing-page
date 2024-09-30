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
    register: "",
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
    forgotPasswordLink: "",
  },
  ResetPasswordForm: {
    title: "",
    description: "",
    emailLabel: "",
    submitButton: "",
    rememberPasswordText: "",
    loginLink: "",
    errorTitle: "",
    successTitle: "",
    successDescription: "",
    unexpectedError: "",
  },
  RegistrationForm: {
    title: "",
    description: "",
    nameLabel: "",
    emailLabel: "",
    passwordLabel: "",
    confirmPasswordLabel: "",
    signUpButton: "",
    orContinueWith: "",
    githubButton: "",
    googleButton: "",
    alreadyHaveAccountText: "",
    signInLink: "",
  },
  Footer: {
    copyright: "",
  },
  useMutation: {
    login: {
      successTitle: "",
      successDescription: "",
      errorTitle: "",
      errorDescription: "",
    },
    register: {
      successTitle: "",
      successDescription: "",
      errorTitle: "",
      errorDescription: "",
    },
    resetPassword: {
      successTitle: "",
      successDescription: "",
      errorTitle: "",
      errorDescription: "",
    },
    newPassword: {
      title: "",
      description: "",
      passwordLabel: "",
      confirmPasswordLabel: "",
      submitButton: "",
      errorTitle: "",
      successTitle: "",
      successDescription: "",
      unexpectedError: "",
      backToLogin: "",
    },
  },
};

export const defaultLanguage: TranslationState["language"] = "en";
