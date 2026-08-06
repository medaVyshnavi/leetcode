/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let leastValue = prices[0]
    for(let i= 0;i<prices.length;i++){
        leastValue = leastValue > prices[i] ? prices[i] : leastValue;
        let profit = prices[i] - leastValue;
        maxProfit = maxProfit > profit ? maxProfit : profit
    }
    return maxProfit
};