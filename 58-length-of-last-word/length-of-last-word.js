/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //Approach 1 (not for interview)
    // s = s.trim()
    // s = s.split(" ");
    // return s[s.length-1].length
    // Approach 2
    // let n = s.length-1;
    // while(n>=0 && s[n] === " ") n--;
    // let count = 0;
    // while(n>=0 && s[n] !== " "){
    //     n--;
    //     count++;
    // }
    // return count;
    //Approach3
    let n = s.length - 1;
    let count = 0;
    while(n>=0){
        if(s[n] != " ") count++;
        else if(count>0) return count;
        n--
    }
    return count;
};