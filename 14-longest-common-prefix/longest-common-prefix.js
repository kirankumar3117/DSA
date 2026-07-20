/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[j][i] != strs[0][i]){
                return result;
            }
        }
        result = result + strs[0][i]
    }
    return result;
};