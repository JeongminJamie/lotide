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


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
     if (result[item]) {
      result[item] += 1; 
    } else {
      result[item] = 1;
    }
  }
  }
    return result;
  };
  

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
