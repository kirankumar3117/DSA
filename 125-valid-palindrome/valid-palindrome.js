/**
 * @param {string} s
 * @return {boolean}
 */
 function isAlphaNumeric(ch){
    return ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
 }
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(!isAlphaNumeric(s[i])){
            i++
        }else if(!isAlphaNumeric(s[j])){
            j--
        }else if(s[i] != s[j]){
            return false
        }else{
            i++
            j--
        }
    }
    return true;
    // s=s.toLowerCase();
    // let filteredStr = "";
    // let reverse = ""
    // for(let i=0; i<s.length;i++){
    //     let ch = s[i].charCodeAt();
    //     if((ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57)){
    //     // if((s[i].charCodeAt() >= 'a'.charCodeAt() && s[i].charCodeAt() <= 'z'.charCodeAt()) || (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt())){
    //     // if(s[i].match(/[a-z0-9]/i)){
    //         filteredStr = filteredStr + s[i]
    //         reverse = s[i] + reverse;
    //     }
    // }
    // return filteredStr === reverse;
}