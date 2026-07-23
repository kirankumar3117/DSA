/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hash = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let i=0;i<s.length;i++){
        if(stack.length > 0 && hash[stack[stack.length-1]] == s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.length === 0;
};