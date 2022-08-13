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
