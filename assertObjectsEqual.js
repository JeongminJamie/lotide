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
  if (actual === expected) {
    
  }
};