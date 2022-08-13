// last in, first outerHeight;
// push();
// pop()

class Stack {
  constructor() {
    this.array = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.array[this.size] = element;
  }

  pop() {
    let removed = this.array[this.size];
    delete this.array[this.size];
    this.size--;
    return removed;
  }
}

let stack = new Stack();
