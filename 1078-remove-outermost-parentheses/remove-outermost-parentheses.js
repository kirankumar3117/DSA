/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let str = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            stack.push(s[i]);
            if(stack.length > 1){
                str = str + stack[stack.length -1];
            }
        }else{
            stack.pop();
            if(stack.length > 0){
                str = str + s[i]
            }
        }
    }
    return str;
};