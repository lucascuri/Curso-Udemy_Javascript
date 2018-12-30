let contador = 1;
while (contador <= 10) {
    console.log(`O número é ${contador}.`);
    contador++;
}
console.log('-- Fim do While() --');

for (let i = 0; i <= 10; i++) {
    console.log(`O número é ${i}.`);
}

console.log('-- Fim do For() --');

const notas = [5.5, 7.4, 2.5, 8.7, 9.6];

for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}

console.log('-- Fim do For() --');