const head = function(array) {
  console.log(array[0]);
}; 


const assertEqual = function(actual, expected) {
  actual = head;
  if (actual[0] === expected) {
    console.log(expected);
  } else if (actual[0] === []) {
    console.log("undefined");
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
