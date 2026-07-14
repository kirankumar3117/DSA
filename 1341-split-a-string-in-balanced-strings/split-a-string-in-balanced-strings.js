/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balCount = 0, rCount = 0, lCount = 0;
    for(let ch of s){
        if(ch==='R') rCount++;
        else lCount++;
        if(rCount === lCount){
            balCount++;
            rCount = lCount = 0;
        }
    }
    return balCount;
};