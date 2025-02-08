import { Country } from '@/types/country';
export class CountriesService {
  private static readonly API_URL = 'https://restcountries.com/v3.1';

  async getAllCountries(): Promise<Country[]> {
    try {
      const response = await fetch(`${CountriesService.API_URL}/all`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  }

  async getCountryByCode(code: string): Promise<Country> {
    try {
      const response = await fetch(`${CountriesService.API_URL}/alpha/${code}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const [data] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country:', error);
      throw error;
    }
  }
}
