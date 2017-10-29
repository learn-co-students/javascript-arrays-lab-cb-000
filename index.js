const app = "I don't do much.";

var destructivelyAppendKitten = name => kittens.push(name);

var destructivelyPrependKitten = name => kittens.unshift(name);

var destructivelyRemoveLastKitten = () => kittens.pop();

var destructivelyRemoveFirstKitten = () => kittens.shift();

var appendKitten = name => {
  var newKittens = [...kittens, name];
  return newKittens;
};

var prependKitten = name => {
  var newKittens = [name, ...kittens];
  return newKittens;
};

var removeLastKitten = () => {
  var newKittens = kittens.slice(0, -1);
  return newKittens;
};

var removeFirstKitten = () => {
  var newKittens = kittens.slice(1);
  return newKittens;
};
