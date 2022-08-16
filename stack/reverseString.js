// Reverse a string using a JavaScript stack

function reverse(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let revStr = '';
  while (stack.length > 0) {
    revStr += stack.pop();
  }
  return revStr;
}
