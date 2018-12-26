const escola = "Cod3r";

console.log(escola.charAt(4)); // começa pelo índice 0
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // unicode
console.log(escola.indexOf('C')); // retorna o índice da primeira letra dentro da string
console.log(escola.indexOf('c')); // tipagem forte, diferencia minúsculas de maiúsculas. Se não encontrar a letra, retorna -1

console.log(escola.substring(1)); // imprime tudo a partir do índice informado
console.log(escola.substring(0, 3)); // imprime tudo a partir do primeiro índice até o segundo, mas não incluindo o segundo.

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + 'Cod3r' + "!")
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\w/g, 'e')); // expressão regular, regex
console.log('Ana,Lucas,Maria'.split(',')); //cria um array com os dados da string, utilizando o separador especificado dentro da função