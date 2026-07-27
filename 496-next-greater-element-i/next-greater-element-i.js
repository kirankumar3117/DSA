/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let i=0;i<nums1.length;i++){
        let flag = false;
        let greater = nums1[i]
        for(let j=0;j<nums2.length;j++){
            if(flag){
                if(nums1[i] < nums2[j]){
                    result.push(nums2[j]);
                    greater = nums2[j]
                    break;
                };
            }
                if(nums1[i] === nums2[j]){
                    flag=true;
                }
        }
        if(greater === nums1[i]){
            result.push(-1)
        }
    }
    return result;
}
