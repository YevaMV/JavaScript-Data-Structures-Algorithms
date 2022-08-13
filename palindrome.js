// Write a function that will check the string is a palindrome or not

//racecar true; hello -false

function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

function palindrome1(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      return true;
    }
    return false;
  }
}

function palindrome2(str) {
  let left = 0;
  let rigth = str.length - 1;
  while (left < rigth) {
    if (str[left] !== str[rigth]) {
      return false;
    }
    left++;
    rigth--;
  }
  return true;
}
