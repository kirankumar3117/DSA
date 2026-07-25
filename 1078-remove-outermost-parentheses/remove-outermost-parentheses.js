/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // let stack = [];
    // let str = "";
    // for(let i=0;i<s.length;i++){
    //     if(s[i] === "("){
    //         stack.push(s[i]);
    //         if(stack.length > 1){
    //             str = str + s[i]
    //         }
    //     }else{
    //         if(stack.length > 1){
    //             str = str + s[i]
    //         }
    //         stack.pop();
    //     }
    // }
    // return str;
    let level = 0;
    let str = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            level++;
            if(level > 1) str = str + s[i]
        }else{
            if(level > 1) str = str + s[i];
            level--;
        }
    }
    return str;
};