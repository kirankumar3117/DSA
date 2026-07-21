/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let hash = {}
    for(let i=0;i<s.length;i++){
        hash[s[i]] = (hash[s[i]] || 0) + 1;
        hash[t[i]] = (hash[t[i]] || 0 ) - 1;
    }
    for(let ch in hash){
        if(hash[ch] != 0){
            return false
        }
    }
    return true;
};