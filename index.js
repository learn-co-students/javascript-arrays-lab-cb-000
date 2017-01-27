const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function removeFirstKitten(){
  var kitens2 = kittens.slice(1);
  return kitens2;
}

function prependKitten(name){
  var cats = [name, ...kittens];
  return cats;
}

function appendKitten(name){
  var cats44 = [...kittens, name];
  return cats44;
}

function removeLastKitten(){
  var cats55 = kittens.slice(0, kittens.length - 1);
  return cats55;
}
