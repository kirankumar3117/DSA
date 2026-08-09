/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    if(arr[0] <= arr[r]) return arr[0];
    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] > arr[m+1]) return arr[m+1];
        if(arr[l] > arr[m]){
            r = m - 1;
        }else{
            l = m + 1;
        }
    };
    return arr[l];
};