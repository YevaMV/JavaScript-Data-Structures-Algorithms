function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      i++;
      mergedArray.push(arr1[i]);
    } else {
      j++;
      mergedArray.push(arr2[j]);
    }
  }
  return mergedArray;
}
