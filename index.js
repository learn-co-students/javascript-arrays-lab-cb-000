const app = "I don't do much."
var Kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop(name);
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
  return kittens
}

var appendKitten = (name) => {
  var new_array = [...kittens, name];
  return new_array
}

var prependKitten = (name) => {
  var new_array = [name, ...kittens];
  return new_array
}

var removeLastKitten = () => {
  var new_array = Kittens.slice(0, Kittens.length-1);
  return new_array
}

var removeFirstKitten = () => {
  var new_array = Kittens.slice(1, Kittens.length);
  return new_array;
}
