
var store = {};

export function addToStore(key, value) {
  store[key] = value;
}

export function getStore() {
  return { ...store };
}
