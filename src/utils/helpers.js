export function formatCurrency(amount) {
  return Math.round(amount).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}

export function formatPercentage(value) {
  if (typeof value !== "number") {
    throw new Error("Input must be a number");
  }
  const formattedValue = value.toFixed(1);
  return `${formattedValue}%`;
}
