
// stacks using linked list

class Stack{

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;

    }

    push(value){
        let newNode = {
            value : value,
            next: null 
        }
        if(!this.length){
            this.bottom = newNode;
            this.top = newNode;
        }else{
            let holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;        
        }
        this.length++;
        return this;
    }

    pop(){
        
        if(!this.top) return null;

        if(this.bottom === this.top) this.bottom = null;

        // const holdingPointer = this.top;
        this.top = this.top.next;
        // holdingPointer.next = null;
        this.length--;
        return this;
    }

}

// let stack = new Stack();
// stack.push(4);
// stack.push(5);
// console.log(stack.push(6));
// console.log(stack.push(7));
// console.log(stack.push(8));
// console.log(stack.push(9));
// console.log(stack.pop());


///////////// stacks using array

class StackUsingArray{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
        return this;
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }
}

let stack1 = new StackUsingArray();
stack1.push(2);
stack1.push(4);
stack1.push(5);
stack1.push(6);
console.log(stack1);
console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());

