class Network {
  #vertices = {};
  #parents = {};
  #children = {};

  iterate() {
    return Object.keys(this.#vertices).map((n) => this.get(n));
  }

  size() {
    return Object.keys(this.#vertices).length;
  }

  addVertex(name, options = { virtual: false }) {
    this.#vertices[name] = options;
    return this.get(name);
  }

  connect(...edges) {
    for (const edge of edges) {
      const from = edge[0],
        to = edge[1];
      if (!this.#parents[to]) this.#parents[to] = {};
      this.#parents[to][from] = true;
      if (!this.#children[from]) this.#children[from] = {};
      this.#children[from][to] = true;
    }
  }

  // Ignore this monstrosity of an implementation
  changeName(name, newName) {
    this.#vertices[newName] = name;
    delete this.#vertices[name];
    this.#parents[newName] = name;
    delete this.#parents[name];
    this.#children[newName] = name;
    delete this.#children[name];
    this.#children[newName].forEach((c) => {
      this.#parents[c][newName] = this.#parents[c][name];
      delete this.#parents[c][name];
    });
    this.#parents[newName].forEach((p) => {
      this.#children[p][newName] = this.#children[p][name];
      delete this.#children[p][name];
    });
  }

  get(name) {
    const options = this.#vertices[name];
    if (!options) return undefined;
    return {
      name,
      ...options,
      parents: Object.keys(this.#parents[name] ?? {}),
      children: Object.keys(this.#children[name] ?? {}),
    };
  }
}

module.exports = Network;
