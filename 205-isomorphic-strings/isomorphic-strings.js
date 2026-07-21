/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    let hash = {};
    let nHash = {}
    for(let i=0;i<s.length;i++){
        if((hash[s[i]] && hash[s[i]] != t[i]) || (nHash[t[i]] && nHash[t[i]] != s[i])){
           return false;
        }
        hash[s[i]] = t[i];
        nHash[t[i]] = s[i]
    };
    return true;
};