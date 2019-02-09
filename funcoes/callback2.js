const notas = [5.5, 4.2, 7.1, 8.7, 9.6, 2.9, 3.1];
const notasBaixas = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7; // cria um novo array e insere os valores que retornarem 'true' no array.
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3)