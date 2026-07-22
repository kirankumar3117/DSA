
var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for(let i=0;i<this.q1.length-1;i++){
        this.q1.push(this.q1.shift())
    }
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    for(let i=0;i<this.q1.length-1;i++){
        this.q1.push(this.q1.shift())
    };
    let top = this.q1.shift();
    this.q1.push(top)
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */