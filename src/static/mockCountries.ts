import { Country } from "@/types/country";

export const mockCountries: Country[] = [
  {
    name: {
      common: 'Brazil',
      official: 'Brazil',
      nativeName: {
        pt: {
          official: 'Portuguese',
          common: 'Portuguese'
        }
      }
    },
    tld: ['.br'],
    cca2: 'BR',
    ccn3: '076',
    cca3: 'BRA',
    cioc: 'BRA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BRL: {
        name: 'Brazilian Real',
        symbol: 'R$'
      }
    },
    idd: {
      root: '0',
      suffixes: ['0']
    },
    capital: ['Brasília'],
    altSpellings: ['BR'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      pt: 'Portuguese',
      en: 'English'
    },
    translations: {
      official: {
        official: 'Portuguese',
        common: 'Portuguese'
      }
    },
    latlng: [0, 0],
    landlocked: false,
    borders: [],
    area: 8515767,
    demonyms: {
      eng: {
        f: 'Brazilian',
        m: 'Brazilian'
      },
      fra: {
        f: 'Brasilian',
        m: 'Brasilian'
      }
    },
    flag: 'https://flagcdn.com/br.svg',
    maps: {
      googleMaps: 'https://maps.google.com/?q=-14.235004,-51.919287',
      openStreetMaps: 'https://www.openstreetmap.org/export/embed.html?bbox=-63.99999999999999,-33.796875&amp;layer=mapnik&amp;marker=-14.235004,-51.919287'
    },
    population: 213993437,
    gini: {
      '2015': 33.7
    },
    fifa: 'BRA',
    car: {
      signs: ['BR'],
      side: 'right'
    },
    timezones: ['America/Sao_Paulo'],
    continents: ['Americas'],
    flags: {
      png: 'https://flagcdn.com/br.png',
      svg: 'https://flagcdn.com/br.svg',
      alt: 'Flag of Brazil'
    },
    coatOfArms: {
      png: 'https://flagcdn.com/br.png',
      svg: 'https://flagcdn.com/br.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0, 0]
    },
    postalCode: {
      format: '99999-999',
      regex: '^\\d{5}-\\d{3}$'
    }
  },
  {
    name: {
      common: 'United States',
      official: 'United States',
      nativeName: {
        en: {
          official: 'English',
          common: 'English'
        }
      }
    },
    tld: ['.us'],
    cca2: 'US',
    ccn3: '076',
    cca3: 'USA',
    cioc: 'USA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States Dollar',
        symbol: '$'
      }
    },
    idd: {
      root: '0',
      suffixes: ['0']
    },
    capital: ['Washington, D.C.'],
    altSpellings: ['US'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      en: 'English'
    },
    translations: {
      official: {
        official: 'English',
        common: 'English'
      }
    },
    latlng: [0, 0],
    landlocked: false,
    borders: [],
    area: 8515767,
    demonyms: {
      eng: {
        f: 'American',
        m: 'American'
      },
      fra: {
        f: 'American',
        m: 'American'
      }
    },
    flag: 'https://flagcdn.com/us.svg',
    maps: {
      googleMaps: 'https://maps.google.com/?q=37.0902,-95.7129',
      openStreetMaps: 'https://www.openstreetmap.org/export/embed.html?bbox=-63.99999999999999,-33.796875&amp;layer=mapnik&amp;marker=-14.235004,-51.919287'
    },
    population: 213993437,
    gini: {
      '2015': 33.7
    },
    fifa: 'USA',
    car: {
      signs: ['US'],
      side: 'right'
    },
    timezones: ['America/New_York'],
    continents: ['Americas'],
    flags: {
      png: 'https://flagcdn.com/us.png',
      svg: 'https://flagcdn.com/us.svg',
      alt: 'Flag of United States'
    },
    coatOfArms: {
      png: 'https://flagcdn.com/us.png',
      svg: 'https://flagcdn.com/us.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0, 0]
    },
    postalCode: {
      format: '99999-999',
      regex: '^\\d{5}-\\d{3}$'
    }
  }
]
