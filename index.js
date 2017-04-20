const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function appendKitten(name){
  var arr = [...kittens, name]
  return arr;
}
function prependKitten(name){
  var arr = [name, ...kittens]
  return arr;
}

function removeLastKitten(){
  var arr = [];
  for(var i = 0; i<kittens.length-1; i++){
    arr[i]=kittens[i];
  }
  return arr;
}

function removeFirstKitten(){
  var arr = [];
  for(var i = 1; i<kittens.length; i++){
    arr[i-1]=kittens[i];
  }
  return arr;
}
