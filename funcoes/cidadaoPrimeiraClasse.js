// Função em JS é First-Class Object (Citizens)
// High-order function

// criar de forma literal
function fun1() { }

// armazeanar função anônima em uma constante/variável
const fun2 = function() { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 6));

// armazenar em um atributo de um objeto
const obj = {};
obj.falar = function(falar) { return console.log(falar); }
obj.falar("Epa...");

// passar função como parâmetro

function run(fun) {
    fun();
}

run(function() { return console.log('Opa...'); });

const funcaoParametro = function(a, b) {
    return function(c) {
       console.log((a + b) / c);
    }
}

funcaoParametro(2,2)(2);

const operacao = funcaoParametro(4,4);
operacao(2);

