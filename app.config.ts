import { StaticImageData } from "next/image";
import { AppConfig } from "./types/AppConfigTypes";
import logo from "./public/logo.png";
import backgroundImage from "./public/images/hero-background.jpeg";

export const appConfig: AppConfig = {
  companyName: "Resto Genius",
  email: "contact@restoggenius.com",
  phone: "+33 6 12 34 56 78",
  address: "123 Main St, City, Country",
  menu: [
    { key: "home", path: "/", isPage: false, isClientPage: false },
    { key: "services", path: "/services", isPage: false, isClientPage: false },
    { key: "about", path: "/about", isPage: false, isClientPage: false },
    { key: "contact", path: "/contact", isPage: false, isClientPage: false },
    { key: "gallery", path: "/gallery", isPage: false, isClientPage: false },
    {
      key: "dashboard",
      path: "(administration)/admin/dashboard",
      isPage: true,
      isClientPage: true,
    },
    {
      key: "clients",
      path: "(administration)/admin/clients",
      isPage: true,
      isClientPage: false,
    },
    {
      key: "analytics",
      path: "(administration)/admin/analytics",
      isPage: true,
      isClientPage: true,
    },
    {
      key: "settings",
      path: "(administration)/admin/settings",
      isPage: true,
      isClientPage: true,
    },

    {
      key: "dashboard",
      path: "(marketing)/dashboard",
      isPage: true,
      isClientPage: false,
    },
  ],
  header: {
    applicationName: "Resto Genius",
    authentifcation: true,
    i18n: true,
    logo: logo,
  },
  heroSection: {
    backgroundImage: backgroundImage.src,
  },
};
