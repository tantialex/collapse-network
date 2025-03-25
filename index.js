const input = require("./input");
const expected = require("./expected");
const Network = require("./network");
const { expect } = require("./comparator");

/**
 *  Collapse the source `network` into the empty `target` network.
 *
 *  Collapse rules:
 *  1) Virtual vertices are excluded from the output.
 *  2) Children of a virtual vertex inherit the parents, and vice versa.
 *  3) Vertices with identical neighbours (i.e parents and children) are collapsed into one vertex.
 *  4) A vertex's name is the collapsed vertices names concatenated and sorted in ascending order.
 *      Example: A vertex of collapsed vertices J, H and E is named EHJ
 */
const hashes = {};
const groupIndex = {};
function collapse(id, network, target) {
  // TODO
}

input.iterate().map((vertex) => {
  const actual = new Network();
  collapse(vertex.name, input, actual);
  expect(expected, actual);
  console.log(`Test for initial vertex '${vertex.name}' is correct!`);
});
