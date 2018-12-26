let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--); // ++ no lado esquerdo do operando tem prioridade na execução, ou seja, primeiro acrescentou ao num1 e fez a comparação, e só depois o num2 foi decresido.