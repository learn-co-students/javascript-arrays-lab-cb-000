const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
   var new_arr = [...kittens, name]
   return new_arr
}

function prependKitten(name){
  var new_arr = [name, ...kittens]
  return new_arr
}

function removeLastKitten(){
  var new_arr = kittens.slice(0, kittens.length -1);
  return new_arr
}

function removeFirstKitten(){
  var new_arr = kittens.slice(1);
  return new_arr
}
