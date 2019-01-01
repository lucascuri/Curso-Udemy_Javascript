const paramsVariaveis = function() {
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(paramsVariaveis(1, 3, 4));
