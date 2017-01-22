function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten);
  return kittens;
}

function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(newKitten) {
  return [...kittens, newKitten];
}

function prependKitten(newKitten) {
  return [newKitten, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
