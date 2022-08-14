function binarySearch(arr, val) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let middleIndex;

  while (firstIndex <= lastIndex) {
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    console.log(middleIndex);
    if (val === arr[middleIndex]) {
      return middleIndex;
    } else if (val < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }
  return -1;
}
