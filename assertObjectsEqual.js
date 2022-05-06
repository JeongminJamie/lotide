const eqArrays = function(array1, array2) {
  let result;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
        return result;
      } else {
        result = true;
      }
    }
    return result;
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

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;  
    let final = eqObjects(actual, expected);

    if (final === true) {
      return `❤️❤️❤️ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`;
    } else {
      return `😅😅😅 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
    }
  };

 console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
