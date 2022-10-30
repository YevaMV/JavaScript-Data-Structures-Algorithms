function sumNine(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 9) {
        return [arr[i], arr[j]];
      }
    }
  }
  console.log('!');
}
