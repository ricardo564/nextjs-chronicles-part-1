import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Country } from '@/types/country'

interface CountriesState {
  countries: Country[]
  selectedCountry: Country | null
  isLoading: boolean
  error: string | null
  setCountries: (countries: Country[]) => void
  setSelectedCountry: (country: Country | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useCountriesStore = create<CountriesState>()(
  persist(
    (set) => ({
      countries: [],
      selectedCountry: null,
      isLoading: false,
      error: null,

      setCountries: (countries) => set({ countries }),
      setSelectedCountry: (country) => set({ selectedCountry: country }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'countries-storage',
    }
  )
)
