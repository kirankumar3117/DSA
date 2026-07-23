/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hash = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i=0;i<s.length;i++){
        if(stack[stack.length-1] == hash[s[i]] && stack.length > 0){
            stack.pop()
        }else{
            stack.push(s[i])
            console.log(stack)
        }
    }
    return stack.length === 0;
};