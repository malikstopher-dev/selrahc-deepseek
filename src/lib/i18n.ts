export function getDictionary(locale: string) {
  return {
    locale,
    dir: 'ltr' as const,
  }
}

export type Locale = 'en' | 'fr'
export const locales: Locale[] = ['en', 'fr']
export const defaultLocale: Locale = 'en'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
