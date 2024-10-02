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
      profile?: string; // Add this line
      settings?: string; // Add this line
      logout?: string; // Add this line
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
      forgotPasswordLink: string;
    };
    ResetPasswordForm: {
      title: string;
      description: string;
      emailLabel: string;
      submitButton: string;
      rememberPasswordText: string;
      loginLink: string;
      errorTitle: string;
      successTitle: string;
      successDescription: string;
      unexpectedError: string;
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
    useMutation: {
      login: {
        successTitle: string;
        successDescription: string;
        errorTitle: string;
        errorDescription: string;
        verificationNeededTitle: string; // Add this line
      };
      register: {
        successTitle: string;
        successDescription: string;
        errorTitle: string;
        errorDescription: string;
      };
      resetPassword: {
        successTitle: string;
        successDescription: string;
        errorTitle: string;
        errorDescription: string;
      };
      newPassword: {
        title: string; // Add this line
        description: string;
        passwordLabel: string;
        confirmPasswordLabel: string;
        submitButton: string;
        errorTitle: string;
        successTitle: string;
        successDescription: string;
        unexpectedError: string;
        backToLogin: string;
      };
    };
  };
  language: string;
  setLanguage: (lang: string) => void;
  setDictionary: (dictionary: TranslationState["dictionary"]) => void;
}
