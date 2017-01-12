const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens
}

function destructivelyRemoveLastKitten(kitten) {
  kittens = kittens.slice(0, kittens.length -1);
  return kittens
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens = kittens.slice(1, kittens.length);
  return kittens
}

function appendKitten(element) {
  var changedArray = kittens.slice()
  changedArray.push(element)
  return changedArray
}

function prependKitten(kitten) {
  var changedArray = kittens.slice()
  changedArray.unshift(kitten)
  return changedArray;
}

function removeLastKitten(kitten) {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(kitten) {
  return kittens.slice(1, kittens.length);
}
