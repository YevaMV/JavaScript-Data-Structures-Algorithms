// first in, first out
// enqueue => push()
// dequeue => shift()

const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

// arr = [1, 2, 3]

arr.shift(); // 1 first in

class Queue {
  constructor() {
    this.array = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.tail++;
    this.array[this.tail] = element;
  }

  dequeu() {
    let removedItem = this.array[this.head];
    delete this.array[this.head];
    this.head++;
    this.tail--;
    return removedItem;
  }
}

let queue = new Queue();

// time complexity
// insert O(1)
// delete O(n)
