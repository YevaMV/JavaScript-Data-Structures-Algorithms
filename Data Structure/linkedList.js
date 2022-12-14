// Linked List

class linkedList {
	constructor(head = null) {
		this.head = head;
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

let node1 = new Node('first Item');
let node2  = new Node('second Item');
node1.next = node2;

let list = new linkedList(node1)



// time complexity
// access O(n)
// Search O(n)
// insert O(1)
// delete O(1)
