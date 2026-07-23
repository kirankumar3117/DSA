
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
   this.stack.push(value);
   if(this.min.length === 0 || value <= this.min[this.min.length-1]){
    this.min.push(value);
   }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.pop() === this.min[this.min.length-1]){
        this.min.pop()
    };
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */