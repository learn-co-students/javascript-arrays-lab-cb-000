const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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

function appendKitten(name) {
  var newKittensArray = [...kittens, name]
  return newKittensArray
}

function prependKitten(name) {
  var newKittensArray = [name, ...kittens]
  return newKittensArray
}

function removeLastKitten() {
  var newKittensArray = kittens.slice(0, kittens.length - 1)
  return newKittensArray
}

function removeFirstKitten() {
  var newKittensArray = kittens.slice(1)
  return newKittensArray
}
