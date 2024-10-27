import { AppConfig } from "./types/AppConfigTypes";
import logo from "./public/logo.png";
import backgroundImage from "./public/images/hero-background.jpeg";
import { Icons } from "./components/ui/icons";

/**
 * Application Configuration
 *
 * This configuration object defines various settings and properties for the Resto Genius application.
 * It includes company information, menu structure, header configuration, and hero section details.
 *
 * @property {string} companyName - The name of the company (Resto Genius)
 * @property {string} email - Contact email address for the company
 * @property {string} phone - Contact phone number for the company
 * @property {string} address - Physical address of the company
 *
 * @property {Array} menu - An array of menu items, each with the following properties:
 *   @property {string} key - Unique identifier for the menu item
 *   @property {string} path - URL path for the menu item
 *   @property {boolean} isPage - Indicates if the menu item is a page
 *   @property {boolean} isClientPage - Indicates if the page is a client-side rendered page
 *   @property {boolean} [isUserMenu] - Optional. Indicates if the item should appear in the user menu
 *   @property {boolean} [showInAdminArea] - Optional. Indicates if the item should be shown in the admin area
 *   @property {React.ComponentType<IconProps>} icon - Icon component for the menu item
 *
 * @property {Object} header - Configuration for the application header
 *   @property {string} applicationName - Name displayed in the header
 *   @property {boolean} authentifcation - Whether authentication features should be enabled
 *   @property {boolean} i18n - Whether internationalization features should be enabled
 *   @property {StaticImageData} logo - Logo image to be displayed in the header
 *
 * @property {Object} heroSection - Configuration for the hero section
 *   @property {string} backgroundImage - Source path for the hero section background image
 */

export const appConfig: AppConfig = {
  companyName: "Resto Genius",
  email: "contact@restoggenius.com",
  phone: "+33 6 12 34 56 78",
  address: "123 Main St, City, Country",
  menu: [
    {
      key: "about",
      path: "(client)/about",
      isPage: true,
      isClientPage: true,
    },
  
    {
      key: "gallery",
      path: "(client)/gallery",
      isPage: true,
      isClientPage: true,
    },],
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
