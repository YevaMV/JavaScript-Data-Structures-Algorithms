function medianNumber(arr) {
  if (arr.length % 2 == 1) {
    return arr[Math.floor(length / 2)];
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
}
