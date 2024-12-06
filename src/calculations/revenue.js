export function calculateRevenue(data) {
  let sum = 0;

  data.forEach((item) => {
    if (item.account_category === "revenue") {
      sum += item.total_value;
    }
  });
  return sum;
}
