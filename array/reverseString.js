function reverse(str) {
  return str.split('').reverse().join('');
}

const reverse2 = (str) => [...str].reverse().join('');
