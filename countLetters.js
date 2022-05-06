const assertEqual = function(actual, expected) {
  let result;
  if (actual === expected) {
    result += "❤️❤️❤️" + "Assertion passed: " + actual + " === " + expected;
    console.log(result);
  } else {
    result += "😭😭😭" + "Assertion Failed: " + actual + " !== " + expected;
    console.log(result);
  }
  return result;
};

const countLetters = function(answer) {
  let end = {};
  for(let min of answer) {
    if (min !== " ") {
      if (end[min] === undefined) {
        end[min] = 0;
      }
      end[min] += 1;
    }
  } return end;
};
console.log(countLetters("lighthouse in the house"));
