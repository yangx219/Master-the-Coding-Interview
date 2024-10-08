class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let currentNode = this.root;

            while(true){
                
                if(value <= currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }else{
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }

            }
        }
      
    }
    lookup(value) {
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode !== null){
            if(value === currentNode.value){
                return currentNode;
            }else if(value < currentNode.value){
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
        }
        return false;
      
    }
  
    remove(value) {
        if(!this.root){
            return false;
        }

        
      
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  console.log(tree);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  console.log(tree);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  tree.remove(170);
  JSON.stringify(traverse(tree.root));
  console.log(tree.lookup(20));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }