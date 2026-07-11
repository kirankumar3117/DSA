/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   // Approach 1
   let hash = {};
   for(let num of nums){
     hash[num] = (hash[num] || 0) + 1;
   }
   for(let num in hash){
     if(hash[num] === 1){
        return +num
     }
   }
};