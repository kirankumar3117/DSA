/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    let hash = {};
    for(let i=0;i<s.length;i++){
        if(hash[s[i]] && hash[s[i]] != t[i]){
           return false;
        }
         hash[s[i]] = t[i];
    };
    let nHash = {}
    for(let ch in hash){
        if(nHash[hash[ch]]){
            return false;
        }
        nHash[hash[ch]] = ch;
    };
    return true;
};