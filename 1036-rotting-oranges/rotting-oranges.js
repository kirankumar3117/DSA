/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // find all the rotten oranges
    const q = []
    const m = grid.length-1;
    const n = grid[0].length-1;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === 2){
                q.push([i,j,0])
            }
        }
    };
    let minMin = 0;
    //rotate while q is not empty
    while(q.length){
        let [i,j,min] = q.shift();
        //right
        if(j <= n && grid[i][j+1] === 1){
            grid[i][j+1] = 2;
            q.push([i,j+1,min+1])
        }
        //left
        if(j > 0 && grid[i][j-1] === 1){
            grid[i][j-1] = 2;
            q.push([i, j-1, min+1])
        }
        if(i < m && grid[i+1][j] === 1){
            grid[i+1][j] = 2;
            q.push([i+1, j, min+1])
        }
        if( i > 0 && grid[i-1][j] === 1){
            grid[i-1][j] = 2;
            q.push([i-1,j,min+1])
        }
        minMin = Math.max(minMin, min)
    };

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    };
    return minMin;
};