const valores = [7.7, 5.5, 4.3, 3.8];
console.log(valores);
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
console.log(valores);
delete valores[0];
console.log(valores);

console.log(typeof valores);