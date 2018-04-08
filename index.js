var kittens = ["Milo", "Otis", "Garfield"];

// Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

// Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

// Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

// Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

// Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  return [...kittens, name];
}

// Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  return [name, ...kittens];
}

// Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten() {
  return kittens.slice(0, -1);
}

// Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  return kittens.slice(1);
}
