/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1]
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m] > target){
            r = m - 1;
        }else if(nums[m] < target){
            l = m + 1;
        }else{
            res[0] = m;
            r = m - 1
        }
    }
    l = 0;
    r = nums.length - 1;
    while(l <= r){
        let m = l + Math.ceil((r-l)/2);
        if(nums[m] > target){
            r = m - 1
        }else if(nums[m] < target){
            l = m + 1
        }else{
            res[1] = m;
            l = m + 1;
        }
    };
    return res;
};