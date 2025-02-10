export const formatValueWithMask = (value: string, maskName?: string): string => {
  const cleanedValue = value.replace(/\D/g, '');

  if (maskName === 'cpf' || (!maskName && cleanedValue.length <= 11)) {
    if (cleanedValue.length > 11) return cleanedValue;

    return cleanedValue
      .replace(/^(\d{3})(\d)/g, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/g, '.$1-$2');
  }

  if (maskName === 'cnpj' || (!maskName && cleanedValue.length > 11)) {
    if (cleanedValue.length > 14) return cleanedValue;

    return cleanedValue
      .replace(/^(\d{2})(\d)/g, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/g, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/g, '.$1/$2')
      .replace(/(\d{4})(\d)/g, '$1-$2');
  }

  if (maskName === 'boleto') {
    if (cleanedValue.length > 47) return cleanedValue;

    return cleanedValue
      .replace(/^(\d{5})(\d)/g, '$1.$2')
      .replace(/^(\d{5})\.(\d{5})(\d)/g, '$1.$2 $3')
      .replace(/^(\d{5})\.(\d{5})\s(\d{5})(\d)/g, '$1.$2 $3.$4')
      .replace(/^(\d{5})\.(\d{5})\s(\d{5})\.(\d{6})(\d)/g, '$1.$2 $3.$4 $5');
  }

  if (maskName === 'cvv') {
    return cleanedValue.slice(0, 4);
  }

  if (maskName === 'expirationDate') {
    if (cleanedValue.length > 4) return cleanedValue;

    const month = parseInt(cleanedValue.slice(0, 2));
    const year = parseInt(cleanedValue.slice(2));
    const currentYear = new Date().getFullYear() % 100;
    if (month > 12) {
      return '12' + cleanedValue.slice(2);
    }

    if (year < currentYear) {
      return cleanedValue.slice(0, 2) + currentYear.toString().padStart(2, '0');
    }

    return cleanedValue
      .replace(/^(\d{2})(\d)/g, '$1/$2');
  }

  if (maskName === 'creditCard') {
    if (cleanedValue.length > 16) return cleanedValue;

    return cleanedValue
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  }

  return cleanedValue;
};
