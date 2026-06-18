import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./types";

export const locales = { es, en };

export const getCopy = (locale: Locale) => locales[locale];
