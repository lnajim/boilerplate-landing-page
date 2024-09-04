// i18n-type.ts
import i18nConfig from "./i18n-config";

export type Locale = (typeof i18nConfig)["locales"][number];
