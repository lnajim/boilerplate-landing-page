import logo from "./public/logo.png";
import backgroundImage from "./public/images/hero-background.jpeg";
export const appConfig = {
  menu: [
    { key: "home", path: "/", isPage: false },
    { key: "services", path: "/services", isPage: false },
    { key: "about", path: "/about", isPage: false },
    { key: "contact", path: "/contact", isPage: false },
    { key: "gallery", path: "/gallery", isPage: false },
  ],
  header: {
    applicationName: "Resto Genius",
    authentifcation: true,
    i18n: true,
    logo: logo,
  },
  heroSection: {
    backgroundImage: backgroundImage.src, // Add .src here
  },
};
