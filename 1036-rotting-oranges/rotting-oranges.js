/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(arr) {
    // find all the rotten oranges
    const m = arr.length - 1;
    const n = arr[0].length - 1;
    const q = [];
    for(let i=0;i<=m;i++){
        for(let j =0;j<=n;j++){
            if(arr[i][j] === 2){
                q.push([i,j,0])
            }
        }
    }
    let minMin = 0;
    //make all the fresh possible oranges to rotten
    while(q.length){
        let [i, j, min] = q.shift();
        //right
        if(j < n && arr[i][j+1] === 1){
            arr[i][j+1] = 2;
            q.push([i, j+1, min+1])
        }
        //left
        if( j > 0 && arr[i][j-1] === 1){
            arr[i][j-1] = 2;
            q.push([i, j-1, min+1]);
        }
        //top
        if(i > 0 && arr[i-1][j] === 1){
            arr[i-1][j] = 2;
            q.push([i-1, j, min+1]);
        }
        //bottom
        if(i < m && arr[i+1][j] === 1){
            arr[i+1][j] = 2;
            q.push([i+1, j, min+1])
        }
        minMin = Math.max(minMin, min)
    };
    //check if fresh orenge is there
    for(let i=0;i<=m;i++){
        for(let j =0;j<=n;j++){
            if(arr[i][j] === 1){
                return -1
            }
        }
    };
    return minMin;
};