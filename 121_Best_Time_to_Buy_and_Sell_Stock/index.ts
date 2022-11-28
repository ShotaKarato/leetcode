const maxProfit = (prices: number[]): number => {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    if (curr < buy) {
      buy = curr;
    } else {
      const diff = curr - buy;
      if (diff > profit) {
        profit = diff;
      }
    }
  }

  return profit;
};
