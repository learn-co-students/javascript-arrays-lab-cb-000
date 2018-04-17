const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(elem)
{
  kittens.push(elem)
}

function destructivelyPrependKitten(elem)
{
  kittens.unshift(elem)
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

function appendKitten(name)
{
  return [...kittens, name]
}

function prependKitten(name)
{
  return [name, ...kittens]
}

function removeLastKitten()
{
  return kittens.slice(0, -1)
}

function removeFirstKitten()
{
  return kittens.slice(1)
}
