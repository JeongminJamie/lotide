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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let one = Object.keys(object1);
  let two = Object.keys(object2);
  for (let i of one) {
    for (let j of two) {
      if (one.length === two.length) {
        if (i === j && object1[i] === object2[j]) {
      return true;
        }
      } 
    }
  } return false;
  }; 

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); // => true
  const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false
