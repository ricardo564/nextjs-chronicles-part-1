export const locales = ['en', 'pt', 'hi', 'jp', 'de', 'ar', 'pl'] as const;
export const defaultLocale = 'pt' as const;

export type Locale = (typeof locales)[number];
