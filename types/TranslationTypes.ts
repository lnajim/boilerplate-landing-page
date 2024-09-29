export interface TranslationState {
  dictionary: {
    Header: {
      register: string;
      salonName: string;
      home: string;
      services: string;
      about: string;
      contact: string;
      languageSelector: string;
      login: string;
      loginDescription: string;
      close: string;
      gallery: string;
    };
    HeroSection: {
      title: string;
      description: string;
      buttonText: string;
    };
    ServicesSection: {
      sectionTitle: string;
      haircuts: {
        title: string;
        description: string;
      };
      coloring: {
        title: string;
        description: string;
      };
      styling: {
        title: string;
        description: string;
      };
      treatments: {
        title: string;
        description: string;
      };
    };
    ContactForm: {
      sectionTitle: string;
      callButton: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
    };
    LoginForm: {
      title: string;
      description: string;
      emailLabel: string;
      passwordLabel: string;
      signInButton: string;
      orContinueWith: string;
      githubButton: string;
      googleButton: string;
      noAccountText: string;
      signUpLink: string;
    };
    RegistrationForm: {
      title: string;
      description: string;
      nameLabel: string;
      emailLabel: string;
      passwordLabel: string;
      confirmPasswordLabel: string;
      signUpButton: string;
      orContinueWith: string;
      githubButton: string;
      googleButton: string;
      alreadyHaveAccountText: string;
      signInLink: string;
    };
    Footer: {
      copyright: string;
    };
  };
  language: string;
  setLanguage: (lang: string) => void;
  setDictionary: (dictionary: TranslationState["dictionary"]) => void;
}
