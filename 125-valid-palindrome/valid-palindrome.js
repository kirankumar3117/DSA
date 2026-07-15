/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    let filteredStr = "";
    let reverse = ""
    for(let i=0; i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredStr = filteredStr + s[i]
            reverse = s[i] + reverse;
        }
    }
    return filteredStr === reverse;
}