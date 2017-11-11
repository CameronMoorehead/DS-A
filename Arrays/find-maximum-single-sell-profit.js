// Given a list of stock prices for n days, find the maximum profit
// with a single buy/sell activity

const maxProfit = prices => {
  let buy = prices[0]
  let sell = prices[1]
  let globalProfit = 0

  for (let i = 1; i < prices.length; i++) {
    let currentProfit = prices[i] - buy
    if (globalProfit < currentProfit) {
      sell = prices[i]
      globalProfit = currentProfit
    }
    if (prices[i] < buy) {
      buy = prices[i]
    }
  }
  return [sell - globalProfit, sell]
}
