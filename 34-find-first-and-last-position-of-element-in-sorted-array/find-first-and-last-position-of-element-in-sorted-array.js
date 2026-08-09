/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1]
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m] >= target){
            r = m;
        }else{
            l = m + 1;
        }
    }
    if(nums[r] === target){
        res[0] = r
    }
    // last one
    let ll = 0;
    let rr = nums.length-1;
    while(ll < rr){
        let m = ll + Math.ceil((rr-ll)/2);
        if(nums[m] > target){
           rr = m - 1;
        }else{
            ll = m;
        }
    };
    if(nums[ll] === target){
        res[1] = ll;
    }
    return res;
};