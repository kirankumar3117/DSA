/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length
    const ans = Array(n).fill(-1);
    const stack = [];
    for(let i=(2*n)-1;i>=0;i--){
        while(stack.length && stack[stack.length-1] <= nums[i%n]){
            stack.pop();
        };
        ans[i%n] = stack.length ? stack[stack.length-1] : -1;
        stack.push(nums[i%n])
    };
    return ans;
};