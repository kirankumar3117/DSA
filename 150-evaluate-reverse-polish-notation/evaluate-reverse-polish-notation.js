/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
   const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
    };
    for(let i=0;i<tokens.length;i++){
     let count = 0;
        if(tokens[i] in operators){
            const b = Number(stack.pop());
            const a = Number(stack.pop());
            count = operators[tokens[i]](a, b) || 0;
            stack.push(+count);
        }else{
            stack.push(Number(tokens[i]));
        }
    };
    return stack.pop();
};