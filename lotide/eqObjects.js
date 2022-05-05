const assertEqual = function (actual, expected) {
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

const eqArrays = function (array1, array2) {
  let results;
  if (array1.length !== array2.length) {
    results = false;
    return results;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        results = false;
        return results;
      } else {
        results = true;
      }
    }
    return results;
  }
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  let returnValue;
    for (let i of Object.keys(object1)) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        let equalArray = eqArrays(object1[i], object2[i]);  
      if (!equalArray) {
        returnValue = false;
      } else {
        returnValue = true;
      }  
      } else if (object1[i] !== object2[i]) {
        returnValue = false;
      } else {
        returnValue = true;
      }
    }
    return returnValue;
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
