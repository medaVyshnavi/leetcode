/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let minPrice = prices[0];
   let maxProfit = -Infinity;

   for(let i =0; i< prices.length;i++){
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i]-minPrice)
   }
   return maxProfit;
};