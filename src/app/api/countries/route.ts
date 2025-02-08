import { NextResponse } from 'next/server';
import { CountriesService } from '@/services/countries.service';
import { unstable_cache } from 'next/cache';

const getCountriesWithCache = unstable_cache(
  async () => {
    const countriesService = new CountriesService();
    const countries = await countriesService.getAllCountries();

    return countries.map(country => ({
      name: country.name.common,
      officialName: country.name.official,
      code: country.cca2,
      flag: {
        png: country.flags.png,
        svg: country.flags.svg
      },
      phoneCode: country.idd.root + (country.idd.suffixes?.[0] || ''),
      capital: country.capital?.[0] || 'N/A',
      languages: country.languages || {},
      currencies: country.currencies || {}
    }));
  },
  ['countries-data'],
  {
    revalidate: false,
    tags: ['countries']
  }
);

export async function GET() {
  try {
    const formattedCountries = await getCountriesWithCache();

    return NextResponse.json({
      data: formattedCountries,
      count: formattedCountries.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}
