/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(arr) {
    let m = arr.length;
    let n = arr[0].length;
    const queue = []
    // first find out all the rotten 2's 
    for(let i = 0; i < m; i++){
        for( let j = 0; j < n ; j++){
            if(arr[i][j] === 2){
                queue.push([i, j, 0])
            }
        }
    };
    let minMin = 0;
    // place rotten once in place of 1's
    while(queue.length){
        let [i, j, min] = queue.shift();
        if(j < n-1 && arr[i][j+1] === 1){
            arr[i][j+1] = 2;
            queue.push([i, j+1, min+1]);
        };
        if(j > 0 && arr[i][j-1] === 1){
            arr[i][j-1] = 2;
            queue.push([i, j-1, min+1]);
        }
        if(i < m-1 && arr[i+1][j] === 1){
            arr[i+1][j] = 2;
            queue.push([i+1, j, min+1]);
        }
        if(i > 0 && arr[i-1][j] === 1){
            arr[i-1][j] = 2;
            queue.push([i-1, j, min+1])
        };
        minMin = Math.max(minMin, min)
    }
    // check if any fresh oranges exists
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(arr[i][j] === 1){
                return -1;
            }
        }
    };
    return minMin;
};
