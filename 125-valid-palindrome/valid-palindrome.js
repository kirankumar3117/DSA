/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++
        }else if(!s[j].match(/[a-z0-9]/i)){
            j--
        }else if(s[i] === s[j]){
            i++;
            j--;
        }else{
            return false;
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