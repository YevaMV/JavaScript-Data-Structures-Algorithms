/*  write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as
  an argument to the function. */

function fibonacci(num) {
  let result = [0, 1];
  for (let i = 2; i <= num; i++) {
    let prev1 = result[i - 1];
    let prev2 = result[i - 2];
    result.push(prev1 + prev2);
  }
  return result[num];
}
