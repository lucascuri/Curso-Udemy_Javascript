console.log(soma(2, 3));
// console.log(sub(3, 4));
// console.log(multi(4, 5));

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function(x, y) {
  return x - y;
}

console.log(sub(3, 4))

// named function expression - pouco utilizada.
const multi = function multi(x, y) {
  return x * y;
}

console.log(multi(4, 5));
