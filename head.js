const head = function(array) {
  return array[0];
}; 


const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) {
    result += "❤️" + "Assertion passed: " + actual + " === " + expected;
    console.log(result);
  } else {
    result += "😭" + "Assertion Failed: " + actual + " !== " + expected;
    console.log(result);
  }
  return result;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
