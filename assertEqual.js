const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(heart + heart + heart + "Assertion passed: " + actual + " === " + expected);
  } else {
    console.log(sad + sad + sad + "Assertion Failed: " + actual + " !== " + expected);
  }
};

module.exports = assertEqual;
