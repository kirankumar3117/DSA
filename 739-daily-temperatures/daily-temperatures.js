/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let hash = {};
    let stack = [];
    for(let i=temperatures.length-1; i>=0; i--){
        while(stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]){
            stack.pop();
        };
        hash[i] = stack.length ? stack[stack.length-1] - i : 0;
        stack.push(i) 
    };
   return Object.values(hash)
};