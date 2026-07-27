/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i=temperatures.length-1; i>=0; i--){
        while(stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]){
            stack.pop();
        };
        ans[i] = stack.length ? stack[stack.length-1] - i : 0;
        stack.push(i) 
    };
   return ans;
};