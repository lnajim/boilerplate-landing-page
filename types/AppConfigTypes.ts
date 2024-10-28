import { StaticImageData } from "next/image";
import { Icon } from "../components/ui/icons";

export interface MenuItem {
  key: string;
  path: string;
  isPage: boolean;
  isClientPage: boolean;
  isUserMenu?: boolean;
  showInAdminArea?: boolean;
  showInFrontend?: boolean;
  icon?: Icon;
}

export interface HeaderConfig {
  applicationName: string;
  authentifcation: boolean;
  i18n: boolean;
  logo: StaticImageData;
}

export interface HeroSectionConfig {
  backgroundImage: string;
}

export interface AppConfig {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  frontendMenu: MenuItem[]; // Updated to separate frontend menu
  backendMenu: MenuItem[]; // Updated to separate backend menu
  header: HeaderConfig;
  heroSection: HeroSectionConfig;
}
