/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   // Approach 1
   // By taking nums1 as copy
   /*const n1Copy = nums1.slice(0,m);
   let p1=0, p2 = 0;
   for(let i=0;i<m+n;i++){
    if((p1<m && n1Copy[p1] < nums2[p2]) || p2>=n){
        nums1[i] = n1Copy[p1]
        p1++;
    }else{
        nums1[i] = nums2[p2];
        p2++
    }
   }*/
   //Approach Two
   let p1=m-1, p2 = n-1;
   for(let i=m+n-1;i>=0;i--){
    if(p2 <0) break;
    if(p1>=0 && nums1[p1] > nums2[p2]){
        nums1[i] = nums1[p1]
        p1--
    }else{
        nums1[i] = nums2[p2] 
        p2--
    }
   }
};