const tail = function(array) {
  console.log(array.slice(1));
};

const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const first = ["hello"];
tail(words);
tail(first);
assertEqual(words.length, 3);