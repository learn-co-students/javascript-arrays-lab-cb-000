var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kitten) {
  var new_array = kittens.concat(kitten)
  return new_array
}

function prependKitten(name) {
  var new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten() {
  var new_array = kittens.slice(0, kittens.length - 1)
  return new_array
}

function removeFirstKitten() {
  var new_array = kittens.slice(1)
  return new_array
}
