var emoji = require("node-emoji");
const heart = emoji.get("heart");
const sad = emoji.get("x");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(heart + heart + heart + "Assertion passed: " + actual + " === " + expected);
  } else {
    console.log(sad + sad + sad + "Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
