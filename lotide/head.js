const head = function(array) {
    return array[0];
    }
    
  const assertEqual = function(actual, expected) {
    actual = head(array);
    expected = head[0];
  };
  
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

