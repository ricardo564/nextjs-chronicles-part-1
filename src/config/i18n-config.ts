export const locales = ['en', 'pt', 'hi', 'jp'] as const;
export const defaultLocale = 'pt' as const;

export type Locale = (typeof locales)[number];
