export function calculateExpenses(data) {
  let sum = 0;

  data.forEach((item) => {
    if (item.account_category === "expense") {
      sum += item.total_value;
    }
  });
  return sum;
}
