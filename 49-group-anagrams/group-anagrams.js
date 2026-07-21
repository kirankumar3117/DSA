/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++){
        let str = strs[i].split("").sort().join("");
        if(map[str] != undefined){
           map[str].push(strs[i])
        }else{
            map[str] = [strs[i]]
        }
    }
   return [...Object.values(map)]
};