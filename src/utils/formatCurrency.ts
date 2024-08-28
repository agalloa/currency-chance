export const formatCurrency = (amount: number, currency: string) => {
    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };
    return new Intl.NumberFormat('es-CO', options).format(amount);
  };