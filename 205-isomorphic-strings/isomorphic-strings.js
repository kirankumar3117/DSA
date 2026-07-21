/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // if(s.length != t.length) return false;
    // let mapS = {};
    // let mapT = {}
    // for(let i=0;i<s.length;i++){
    //     if((s[i] in mapS && mapS[s[i]] != t[i]) ||
    //           (t[i] in mapT && mapT[t[i]] != s[i])){
    //        return false;
    //     }
    //     mapS[s[i]] = t[i];
    //     mapT[t[i]] = s[i]
    // };
    // return true;

    if(s.length != t.length) return false;
    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] !== mapT[t[i]]) return false;
        mapS[s[i]] = i + 1;
        mapT[t[i]] = i + 1;
    }

    return true;
};