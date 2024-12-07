function calculateAssets(data) {
  let assetsDebit = 0;
  let assetsCredit = 0;

  data.forEach((item) => {
    if (item.account_category === "assets") {
      if (
        item.value_type === "debit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
      ) {
        assetsDebit += item.total_value;
      } else if (
        item.value_type === "credit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
      ) {
        assetsCredit += item.total_value;
      }
    }
  });

  return assetsDebit - assetsCredit;
}

function calculateLiabilities(data) {
  let liabilitiesCredit = 0;
  let liabilitiesDebit = 0;

  data.forEach((item) => {
    if (item.account_category === "liability") {
      if (
        item.value_type === "credit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
      ) {
        liabilitiesCredit += item.total_value;
      } else if (
        item.value_type === "debit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
      ) {
        liabilitiesDebit += item.total_value;
      }
    }
  });
  return liabilitiesCredit - liabilitiesDebit;
}

export function calculateWorkingCaptialRatio(data) {
  const assets = calculateAssets(data);
  const liabilities = calculateLiabilities(data);

  if (liabilities === 0) {
    throw new Error(
      "Working Capital Ratio cannot be calculated as Liabilities are zero"
    );
  }

  const workingCapitalRatio = (assets / liabilities) * 100;

  return Math.round(workingCapitalRatio * 10) / 10;
}
