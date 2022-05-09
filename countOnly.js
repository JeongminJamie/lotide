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
  let result1 = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
     if (result1[item]) {
      result1[item] += 1; 
    } else {
      result1[item] = 1;
    }
  }
  }
    return result1;
  };
  

const result2 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result2["Jason"], 1);
assertEqual(result2["Karima"], undefined);
assertEqual(result2["Fang"], 2);
assertEqual(result2["Agouhanna"], undefined);
