export const locales = ['en', 'pt', 'hi'] as const;
export const defaultLocale = 'pt' as const;

export type Locale = (typeof locales)[number];
