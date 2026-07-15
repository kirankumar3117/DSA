/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i=num.length-1;
    while(i>=0){
        if(+num[i]%2 === 0){
            num=num.slice(0, i);
        }else{
            return num;
        }
        i--;
    }
    return num;
};