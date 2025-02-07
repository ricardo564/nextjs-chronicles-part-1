import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { ShippingFormData } from '@/schemas/checkout/shipping';

interface AddressResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export const useAddressByCep = (setValue: UseFormSetValue<ShippingFormData>) => {
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const fetchAddressByCep = async (cep: string) => {
    if (cep.length !== 8) return;

    setIsLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: AddressResponse = await response.json();

      if (!data.erro) {
        setValue('street', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      }
    } catch (error) {
      console.error('Error fetching CEP:', error);
    } finally {
      setIsLoadingCep(false);
    }
  };

  return {
    isLoadingCep,
    fetchAddressByCep,
  };
};
