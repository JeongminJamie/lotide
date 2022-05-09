const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const first = ["hello"];
tail(words);
tail(first);
assertEqual(words.length, 3);