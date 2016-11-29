const app = "I don't do much."

function kittens(array){
  kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten(name){
  name = 'Ralph';
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.slice(4);
  name = 'Bob';
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop(1);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(1);
  return kittens;
}

function appendKitten(name){
  name = 'Broom';
  var newCats = [...kittens, name];
  return newCats;
}

function prependKitten(name){
  name = 'Arnold';
  var anotherCat = [name, ...kittens];
  return anotherCat;
}

function removeLastKitten(){
  var lessCats = kittens.slice(0, kittens.length -1);
  return lessCats;
}

function removeFirstKitten(){
  var evenLessCats = kittens.slice(-2);
  return evenLessCats;
}
