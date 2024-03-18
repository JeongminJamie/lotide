const eqArrays = function (obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    for (let i = 0; i < obj1.length; i++) {
      if (obj1[i] !== obj2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

module.exports = eqArrays;
