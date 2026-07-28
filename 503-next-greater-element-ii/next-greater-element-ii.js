/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    nums = [...nums, ...nums];
    const ans = Array(nums.length).fill(-1);
    const stack = [];
    for(let i=nums.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1] <= nums[i]){
            stack.pop();
        };
        ans[i] = stack.length ? stack[stack.length-1] : -1;
        stack.push(nums[i])
    };
    return ans.splice(0, n);
};