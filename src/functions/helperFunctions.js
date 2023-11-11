export const formatNumber = number => {
  if (number.length < 12) {
    return new Intl.NumberFormat('en', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(number);
  } else return Number(number).toExponential(2);
};

export const convertCurrency = (
  amount,
  fromCurrency,
  toCurrency,
  exchangeRates,
) => {
  const fromRate = exchangeRates[fromCurrency].value;
  const toRate = exchangeRates[toCurrency].value;

  const convertedAmt = (amount / fromRate) * toRate;
  return convertedAmt.toFixed(2);
};
