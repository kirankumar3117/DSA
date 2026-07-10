/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1;
    let j=0;
    for(let i=1;i<nums.length;i++){
        if(nums[j] != nums[i]){
            nums[j+1] = nums[i];
            j++;
        }
    }
    return j+1;
};