const getInteiroAleatorioEntre = (min, max) => {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1; // pode começar em -1, pois o bloco é executado antes da condição (while).

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log('Fim.');