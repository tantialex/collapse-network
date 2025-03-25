function expect(expected, actual) {
  const es = expected.size(),
    as = actual.size();
  if (es !== as) throw new Error(`Expected size ${es} !== ${as}`);
  expected.iterate().forEach((e) => {
    const a = actual.get(e.name);
    if (!a) throw Error(`Expected vertex ${e.name} does not exist`);
    if (JSON.stringify(e) !== JSON.stringify(a))
      throw Error(
        `Vertex ${e.name} is not equal\nExpected:\n${JSON.stringify(
          e,
          null,
          2
        )}\n\nActual:\n${JSON.stringify(a, null, 2)}`
      );
    return true;
  });
}

module.exports = { expect };
