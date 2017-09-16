const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newArray = kittens
  return [...newArray, name]
  //return [ 'Milo', 'Otis', 'Garfield', 'Broom' ]
}

function prependKitten(name){
  var newArray = kittens
  return [name, ...newArray]
}

function removeLastKitten(){
  var newArray = kittens;
  return newArray.slice(0,newArray.length -1)
}

function removeFirstKitten(){
  var newArray = kittens;
  return newArray.slice(1)
}
