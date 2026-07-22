
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
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
    this.moveUntilLast();
    let poped = this.q1.shift()
    this.swapQueues();
    return poped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    this.moveUntilLast();
    let top = this.q1.shift();
    this.q2.push(top)
    this.swapQueues();
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length ? false : true;
};

MyStack.prototype.swapQueues = function() {
    this.q1 = this.q2;
    this.q2 = []
}

MyStack.prototype.moveUntilLast = function() {
    while(this.q1.length > 1){
        this.q2.push(this.q1.shift())
    };
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */