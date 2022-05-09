// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const first = ["hello"];
// tail(words);
// tail(first);
// assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("returns [] for []", () => {
    const first = ["hello"];
    assert.deepEqual(tail(first), []);
  });
});
