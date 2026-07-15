/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    let filteredStr = "";
    let reverse = ""
    for(let i=0; i<s.length;i++){
        if((s[i].charCodeAt() >= 'a'.charCodeAt() && s[i].charCodeAt() <= 'z'.charCodeAt()) || (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt())){
        // if(s[i].match(/[a-z0-9]/i)){
            filteredStr = filteredStr + s[i]
            reverse = s[i] + reverse;
        }
    }
    return filteredStr === reverse;
}