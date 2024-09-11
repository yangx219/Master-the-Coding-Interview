class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode;
            this.top = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.top){
            console.log("stack is null");
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
        
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push("google");
console.log(myStack);
myStack.push("discord");
console.log(myStack);

console.log(myStack.peek());
myStack.pop();
console.log(myStack);
