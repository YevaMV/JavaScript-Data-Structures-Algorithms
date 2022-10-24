// with reverse method
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function reverseStr(str) {
  rev = '';

  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    rev = item + rev;
    //   rev = a + rev -> a
    //   a = b + a -> ba
    //   ba = c + ba -> cba
  }
  return rev;
}
