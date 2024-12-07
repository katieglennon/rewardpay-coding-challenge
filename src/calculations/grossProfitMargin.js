export function calculateGrossProfitMargin(data, revenue) {
  let costOfSales = 0;

  data.forEach((item) => {
    if (item.account_type === "sales" && item.value_type === "debit") {
      costOfSales += item.total_value;
    }
  });
  const grossProfitMargin = (costOfSales / revenue) * 100;
  return Math.round(grossProfitMargin * 10) / 10;
}