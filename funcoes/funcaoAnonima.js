const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(4, 4, function(x, y) {
    return x - y;
});

imprimirResultado(5, 7, (x, y) => x * y);

const obj = {
    falar: function() { // anomymous function
        console.log('Oi');
    },
    tchau() { // not anomymous function
        console.log('Tchau');
    }
}


obj.falar();
obj.tchau();
