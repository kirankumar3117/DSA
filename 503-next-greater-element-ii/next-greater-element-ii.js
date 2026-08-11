/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    const n = nums.length;
    for(let i = (nums.length * 2) -1;i>=0;i--){
        while(stack.length && stack.at(-1) <= nums[i%n]){
            stack.pop()
        }
        if(stack.length){
            result[i%n] = stack.at(-1)
        }
        stack.push(nums[i%n])
    };
    return result;
};