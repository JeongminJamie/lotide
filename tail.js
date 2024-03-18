const assertEqualObj = require("./assertEqual");

const tail = function (array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

const assertEqual = assertEqualObj.assertEqual;

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result[0], "Lighthouse");
assertEqual(result, ["Lighthouse", "Labs"]);

module.exports = tail;
