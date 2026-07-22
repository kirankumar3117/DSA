function Node(val){
    this.value = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    let curr = this.head;
    let currIndex = 0;
    while(currIndex < index){
        curr = curr.next;
        currIndex++;
    }
    return curr.value
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head == null){
        this.head = newNode;
    }else{
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size || index < 0) return;
    let newNode = new Node(val);
    if(index === 0){
        this.addAtHead(val);
        return
    }else if(index === this.size){
        this.addAtTail(val);
        return
    }else{
        let curr = this.head;
        let currIndex = 0
        while(currIndex < index-1){
            curr = curr.next
            currIndex++;
        }
        newNode.next = curr.next;
        curr.next = newNode
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    if(index === 0){
        this.head = this.head.next
    }else{
        let currIndex = 0;
        let curr = this.head;
        while(currIndex < index - 1){
            curr = curr.next;
            currIndex++;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */