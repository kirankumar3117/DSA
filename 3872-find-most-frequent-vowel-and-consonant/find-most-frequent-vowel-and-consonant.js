/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const freq = {}
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
    }
    let vCount = 0;
    let cCount = 0;
    for(let ch in freq){
        if(vowels.has(ch)){
            vCount = Math.max(freq[ch], vCount)
        }else{
            cCount = Math.max(freq[ch], cCount)
        }
    }
    return vCount + cCount;
};