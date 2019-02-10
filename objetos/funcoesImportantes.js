const pessoa = {
    nome: 'Rebeca',
    idade: 18,
    peso: 60
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

Object.entries(pessoa).forEach(([chave, valor]) => { // fazendo a mesma coisa que no exemplo acima, mas utilizando o destructuring de arrays.
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // funciona de forma semelhante ao Object.freeze()
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)

const dest = {a: 1};
const o1 = {b: 3};
const o2 = {c: 2, a: 4};

const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);