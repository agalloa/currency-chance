export const formatCurrency = (amount: number, currency: string): string => {
    const options = {
        style: 'currency' as const,
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    return new Intl.NumberFormat('es-CO', options).format(amount);
};