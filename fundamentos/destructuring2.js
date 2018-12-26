const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [3, 7, 9, 12];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [0, [5,9]];

console.log(nota);