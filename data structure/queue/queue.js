class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            const holdingPointer = this.last;
            this.last = newNode;
            holdingPointer.next = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }else{
            
             
            this.first = this.first.next;


        }
        this.length--;
        return this;
        
 
    }
    //isEmpty;
  }

  const myQueue = new Queue();
  myQueue.enqueue("joy");
  myQueue.enqueue("good");
  console.log(myQueue);
  myQueue.dequeue();
  console.log(myQueue);

  //Joy
  //Matt
  //Pavel
  //Samir