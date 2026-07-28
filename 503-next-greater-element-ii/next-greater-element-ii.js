/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
   nums = [...nums, ...nums.slice(0, n)];
    const hash = {}
    const stack = [];
    for(let i=nums.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1] <= nums[i]){
            stack.pop();
        };
        hash[i] = stack.length ? stack[stack.length-1] : -1;
        stack.push(nums[i])
    };
    return Object.values(hash).splice(0, n);
};