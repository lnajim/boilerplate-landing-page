import { StaticImageData } from "next/image";

export interface MenuItem {
  key: string;
  path: string;
  isPage: boolean;
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
  menu: MenuItem[];
  header: HeaderConfig;
  heroSection: HeroSectionConfig;
}
