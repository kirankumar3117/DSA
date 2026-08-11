/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const arr = new Array(temperatures.length).fill(0);
    const stack = [];
    for(let i=temperatures.length-1;i>=0;i--){
        while(stack.length && temperatures[stack.at(-1)] <= temperatures[i]){
            stack.pop()
        }
        arr[i] = stack.length ? stack.at(-1) - i : 0;
        stack.push(i)
    };
    return arr;
};