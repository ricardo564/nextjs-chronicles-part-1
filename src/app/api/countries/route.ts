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

/**
 * Handles HTTP GET requests for the countries API route.
 *
 * This function retrieves formatted country data using a caching mechanism provided by `getCountriesWithCache`.
 * On success, it returns a JSON response containing the country data and the total count of countries.
 * If an error occurs during data fetching, the error is logged and a JSON response with an error message 
 * is returned along with a 500 status code.
 *
 * @returns A NextResponse JSON response containing either the country data and count or an error message.
 */
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
