
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let size = this.s1.length;
    for(let i=0;i<size;i++){
        this.s2.push(this.s1.pop())
    }
    [this.s1, this.s2] = [this.s2, this.s1]
    this.s1.push(x);

    let size1 = this.s1.length;
    for(let i=0;i<size1;i++){
        this.s2.push(this.s1.pop())
    }
    [this.s1, this.s2] = [this.s2, this.s1]
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop();;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const top = this.s1.pop();
    this.s1.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */