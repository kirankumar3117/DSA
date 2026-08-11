/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operator = {
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
        "*": (a,b) => a*b,
        "/": (a,b) => Math.trunc(a/b)
    };
    for(let i=0;i<tokens.length;i++){
        if(tokens[i] in operator){
            let b = stack.pop();
            let a = stack.pop();
            stack.push(operator[tokens[i]](a,b))
        }else{
            stack.push(Number(tokens[i]))
        }
    };
    return stack.pop()
};