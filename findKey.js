const assertArraysEqual = function(array3, array4) {
  let result2 = eqArrays(array3,array4);
  if (result === true) {
    console.log(`❤️❤️❤️: ${array3} and ${array4} are equal ❤️❤️❤️`);
    return result2;
  } else {
    console.log(`😭😭😭 ${array3} and ${array4} are not equal 😭😭😭`);
    return result2;
  }
};

const findKey = function(object1, callback) {
  let keys = Object.keys(object1);

  for (let key of keys) {
    if (callback(object1[key])) {
      return key;
    } 
  } 
  };
  

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
