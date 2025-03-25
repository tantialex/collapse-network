const Network = require("./network");

const network = new Network();

const c = network.addVertex("C"),
  d = network.addVertex("D"),
  ehj = network.addVertex("EHJ"),
  f = network.addVertex("F"),
  k = network.addVertex("K"),
  lm = network.addVertex("LM"),
  o = network.addVertex("O");

const edges = [
  [c.name, f.name],
  [d.name, k.name],
  [d.name, lm.name],
  [ehj.name, k.name],
  [ehj.name, lm.name],
  [f.name, k.name],
  [f.name, lm.name],
  [k.name, d.name],
  [lm.name, o.name],
];

network.connect(...edges);

module.exports = network;
