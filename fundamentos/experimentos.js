// this refere-se ao escopo em que se encotra.
// se usar o this em um escopo global no browser, ele vai se referir ao objeto window.
// se usar o this em um objeto que você criou, por exemplo, ele vai se referir ao objeto 'pessoa', ou seja, ao escopo em que se encontra
// no browser, o objeto global é 'window'
// no node, o objeto global é 'global'
// caso declare uma variável 'var', ela vai para o escopo global (window ou global, dependendo do Run Time)
// caso declare uma função, ela também vai para o escopo global, a não ser que esteja dentro de uma variável 'let' ou constante 'const'
// let e const não vão para o escopo global

let a = 123;

console.log(global.a);
console.log(this.a);

global.a = 123;
console.log(global.a);

this.b = 456;
module.exports.c = 34;
module.exports.d = 67;

console.log(this.b);
console.log(module.exports.b);
console.log(module.exports === this);

console.log(this);

// module.exports = { b: 456, c: 34, d: 67 }

// criando uma variavel maluca
abc = 123; // nunca fazer isso!
console.log(global.abc);