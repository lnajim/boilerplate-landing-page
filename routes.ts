import { i18n } from "@/i18n-config";

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  ...i18n.locales.map((locale) => `/${locale}`),
  "/register",
  "/auth/new-verification",
  "/widget/panel/trigger",
  "/widget/panel/",
  "/widget/integrated/",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  ...i18n.locales.map((locale) => `/${locale}/auth/login`),
  ...i18n.locales.map((locale) => `/${locale}/auth/register`),
  ...i18n.locales.map((locale) => `/${locale}/auth/reset`),
  ...i18n.locales.map((locale) => `/${locale}/auth/new-password`),
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/admin/dashboard";
