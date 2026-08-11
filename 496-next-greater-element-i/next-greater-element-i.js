/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length && stack.at(-1) < nums2[i]){
            stack.pop();
        }
        map.set(nums2[i], stack.at(-1) ?? -1)
        stack.push(nums2[i])
    };
    return nums1.map(x => map.get(x))
};