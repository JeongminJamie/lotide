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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let i = 0; i < allItems.length; i++) {
    for (let item in itemsToCount) {
      if (allItems[i] === item) {
        result += item;
      }
    }
  } return result;
};
