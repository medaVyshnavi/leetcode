/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0

    for(let i =1;i<prices.length;i++){
        let cost = prices[i] - buy
        profit = Math.max(profit,cost)
        buy = Math.min (buy, prices[i])
    } 

    return profit
};
