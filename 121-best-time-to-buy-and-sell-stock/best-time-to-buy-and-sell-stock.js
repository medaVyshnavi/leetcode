/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minBuyPrice = Infinity;

    for(let i =0; i<prices.length; i++){
        minBuyPrice = Math.min(minBuyPrice,prices[i]);
        maxProfit = Math.max(maxProfit,prices[i] - minBuyPrice)
    };

    return maxProfit;
};