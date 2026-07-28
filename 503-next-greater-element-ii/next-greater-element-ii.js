/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const arr = [...nums, ...nums.slice(0, nums.length)];
    const hash = {}
    const stack = [];
    for(let i=arr.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1] <= arr[i]){
            stack.pop();
        };
        hash[i] = stack.length ? stack[stack.length-1] : -1;
        stack.push(arr[i])
    };
    return Object.values(hash).splice(0, nums.length);
};