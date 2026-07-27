/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];
    for(let i=nums2.length-1;i>=0;i--){
       while(stack.length && stack[stack.length-1] < nums2[i]){
        stack.pop();
       }
      map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
      stack.push(nums2[i]);
    };
    for(let i=0;i<nums1.length;i++){
        nums1[i] = map[nums1[i]];
    };
    return nums1;
};