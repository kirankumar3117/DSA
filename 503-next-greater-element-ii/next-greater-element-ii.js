/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let ans = new Array(nums.length).fill(-1);
    for(let i=0;i<nums.length;i++){
        let j =( i+1 === nums.length) ? 0 : i+1;
        while(j!=i && nums[j] <= nums[i]){
            j++;
            if(j==nums.length) j = 0;
        };
       ans[i] = (j===i) ? -1 : nums[j]
    };
    return ans;
};