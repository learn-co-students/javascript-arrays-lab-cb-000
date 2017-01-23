const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return window.kittens;
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name);
  return window.kittens;
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop();
  return window.kittens;
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift();
  return window.kittens;
}

function appendKitten(name) {
  var new_arr = [...window.kittens, name];
  return new_arr;
}

function prependKitten(name) {
  var new_arr = [name, ...window.kittens];
  return new_arr;
}

function removeFirstKitten() {
  var new_arr = new_arr.slice(window.kittens.length - 1 , 1);
  return new_arr;
}

function removeLastKitten() {

}
