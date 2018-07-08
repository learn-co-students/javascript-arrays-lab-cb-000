// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var addToKittens = [name]
  var newKittens = kittens.concat(addToKittens)
  return newKittens
}

function prependKitten(name) {
  var addToKittens = [name]
  var newKittens = addToKittens.concat(kittens)  
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1)
  return newKittens
}

