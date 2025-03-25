const Network = require("./network");

const network = new Network();

const a = network.addVertex("A", { virtual: true }),
  b = network.addVertex("B", { virtual: true }),
  c = network.addVertex("C"),
  d = network.addVertex("D"),
  e = network.addVertex("E"),
  f = network.addVertex("F"),
  g = network.addVertex("G", { virtual: true }),
  h = network.addVertex("H"),
  i = network.addVertex("I", { virtual: true }),
  j = network.addVertex("J"),
  k = network.addVertex("K"),
  l = network.addVertex("L"),
  m = network.addVertex("M"),
  n = network.addVertex("N", { virtual: true }),
  o = network.addVertex("O"),
  p = network.addVertex("P", { virtual: true });

const edges = [
  [a.name, c.name],
  [b.name, d.name],
  [c.name, f.name],
  [d.name, g.name],
  [e.name, g.name],
  [f.name, g.name],
  [g.name, i.name],
  [h.name, g.name],
  [i.name, g.name],
  [i.name, k.name],
  [i.name, l.name],
  [i.name, m.name],
  [j.name, i.name],
  [k.name, n.name],
  [l.name, o.name],
  [m.name, o.name],
  [n.name, b.name],
  [o.name, p.name],
];

network.connect(...edges);

module.exports = network;
