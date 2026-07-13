/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // let hash = {};
    // for(let i=0;i<jewels.length;i++){
    //     if(!hash[jewels[i]]){
    //         hash[jewels[i]] = true;
    //     }
    // }
    // let count = 0;
    // for(let i=0;i<stones.length;i++){
    //     if(hash[stones[i]]){
    //         count++;
    //     }
    // }
    // return count;

    // let set = new Set();
    // for(let i=0;i<jewels.length;i++){
    //     set.add(jewels[i])
    // };
    // let count = 0;
    // for(let i=0;i<stones.length;i++){
    //     if(set.has(stones[i])){
    //         count++;
    //     }
    // }
    // return count;

    let count = 0;
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(jewels[j] === stones[i]){
                count++;
                break;
            }
        }
    }
    return count;
};