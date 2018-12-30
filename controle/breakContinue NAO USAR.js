const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) { // break não executa em blocos if, apenas em blocos for e while. Executa no bloco for ou while mais próximo que encontrar.
        break; // vai parar a execução quando chegar no true.
    }
    console.log(`${x}: ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) { // continue não executa em blocos if, apenas em blocos for e while. Executa no bloco for ou while mais próximo que encontrar.
        continue; // vai pular o índice quando chegar no índice onde o if retorna true.
    }
    console.log(`${y}: ${nums[y]}`);
}

 externo:
 for (a in nums) {
     for (b in nums) {
         if (a == 2 && b == 3) break externo;
         console.log(`Par = ${a}, ${b}`);
     }
 }