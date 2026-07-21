/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // let map = {};
    // for(let i=0;i<strs.length;i++){
    //     let str = strs[i].split("").sort().join("");
    //     if(!map[str]){
    //         map[str] = []
    //     };
    //     map[str].push(strs[i])
    // };
    // return Object.values(map)

    let map = {}
    for(let i=0;i<strs.length;i++){

        let freqArr = new Array(26).fill(0)
        for(let ch of strs[i]){
            freqArr[ch.charCodeAt() - 97]++;
        }

        let key = freqArr.join("#")
        if(!map[key]){
            map[key] = []
        }

        map[key].push(strs[i])
        
    }
   return Object.values(map)
};