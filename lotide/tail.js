let tail = function(answer) {
  let b = [];
  b += answer.tail;
  return b;
};
const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);