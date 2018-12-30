const notas = [5.5, 6.7, 7.8, 9.6, 8.3];

for (let i in notas) { // for in não é tão interessante para percorrer arrays.
    console.log(notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: '29',
    peso: 60
}

for (let atributo in pessoa) { // for in é mais interessante para percorrer objects do que arrays.
    console.log(`${atributo}: ${pessoa[atributo]}`);
}