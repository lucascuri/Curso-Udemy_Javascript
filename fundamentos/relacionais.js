console.log('01)', '1' == 1); // == compara apenas os valores (NÃO USAR)
console.log('02)', '1' === 1); // === compara os valores e os tipos
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 2 > 1);
console.log('07)', 7 >= 8);
console.log('08)', 5 <= 9);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 == d2);
console.log('10)', d1 === d2);
console.log('11)', d1.getTime() == d2.getTime());
console.log('12)', d1.getTime() === d2.getTime());

console.log('13)', undefined == null);
console.log('14)', undefined === null);