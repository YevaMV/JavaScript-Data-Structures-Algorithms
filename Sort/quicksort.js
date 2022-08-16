function quickSort(arr) {
	if(arr.length < 2) {
		return arr;
	}

	let left = [];
	let right = [];
	let pivot = arr[0];
	let sortedArray = [];
	for(let i = 1; i < arr.length; i++){
		if(pivot >= arr[i]) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return sortedArray.concat(quickSort(left), pivot, quickSort(right))
}