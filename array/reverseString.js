function reverse(str) {
  return str.split('').reverse().join('');
}

const reverse2 = (str) => [...str].reverse().join('');

function reverse3(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'please enter a string';
  }

  const reverseArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(str[i]);
  }

  console.log(reverseArray);
  return reverseArray.join('');
}
