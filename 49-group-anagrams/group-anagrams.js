/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let i=0;i<strs.length;i++){
        let str = strs[i]
        let freqArr = Array(26).fill(0)
        for(let j=0;j<str.length;j++){
            freqArr[str[j].charCodeAt() - 97] +=1;
        }
        let key = ""
        for(let k=0;k<26;k++){
            key = key + String.fromCharCode(k) + freqArr[k]
        }
        if(!map[key]){
            map[key] = [strs[i]]
        }else{
            map[key].push(strs[i])
        }
    }
   return [...Object.values(map)]
};