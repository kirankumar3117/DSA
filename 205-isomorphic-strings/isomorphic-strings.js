/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;

    let hash = {};
    for(let i=0;i<s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = t[i];
        }
    };
    console.log("hash", hash)
    let nHash = {}
    for(let ch in hash){
        if(nHash[hash[ch]]){
            return false;
        }
        nHash[hash[ch]] = ch;
    };
    console.log("nHash", nHash)
    for(let i=0;i<s.length;i++){
        if(hash[s[i]] != t[i]){
            return false;
        }
    }
    return true;
};