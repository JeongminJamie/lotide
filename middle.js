const middle = (array) => {
  let result = [...array];

  if (array.length < 3) {
    return [];
  }

  let middleNum = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return result.slice(middleNum - 1, middleNum + 1);
  } else {
    return [result[middleNum]];
  }
};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
