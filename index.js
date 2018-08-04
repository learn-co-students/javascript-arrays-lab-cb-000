// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]



var destructivelyAppendKitten = name => {
  return kittens.push(name)
}

var destructivelyPrependKitten = name => {
  return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
  return kittens.shift()
}

var appendKitten = name => {
  return kittens.concat(name)
}

var appendKitten = name => {
  return kittens.concat(name)
}

var prependKitten = name => {
  var array = [name]
  return array.concat(kittens)
}

var removeLastKitten = () => {
  return kittens.slice(0, -1)

}

var removeFirstKitten = () => {
  return kittens.slice(1)

}
