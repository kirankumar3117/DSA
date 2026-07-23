
var MinStack = function() {
    this.min = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    const currMin = this.min.length ? Math.min(this.min[this.min.length-1][1], value) : value
    this.min.push([value, currMin])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.min[this.min.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.min[this.min.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */