/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length-1;

    while(s[n] === " "){
        n=n-1;
    }
    let count = 0;
    while(s[n] != " " && n >=0){
        count++;
        n=n-1
    }
    return count
};