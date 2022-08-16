// Anagram 1
function buildObject(str) {
  let obj = {};
  for (char of str.toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

function anagram1(first, second) {
  const firstObj = buildObject(first);
  const secondObj = buildObject(second);

  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return false;
  }

  for (char in firstObj) {
    if (firstObj[char] !== secondObj[char]) {
      return false;
    }
  }
  return true;
}

// Anagram 2

function anagram2(first, second) {
  let firstStr = first.toLowerCase().split('').sort().join();
  let secondStr = second.toLowerCase().split('').sort().join();

  if (firstStr === secondStr) {
    return true;
  } else {
    return false;
  }
}
