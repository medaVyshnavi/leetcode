/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let area = 0;
  let maxArea = 0;
  let stack = [];

  for(let i=0;i<=heights.length;i++){
    let currentHeight = (i === heights.length) ? 0 : heights[i];
    while(stack.length && currentHeight < heights[stack[stack.length-1]]){
        let idx = stack.pop();
        let left = stack.length ? stack[stack.length-1] : -1;
        let width = i - left -1
        let area = width * heights[idx];
        maxArea = Math.max(maxArea,area)
    }
    stack.push(i)
  }
  return maxArea
};