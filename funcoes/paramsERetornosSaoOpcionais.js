function calculo(largura = 0, altura = 0) { // defining default values to the parameters
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}`);
    } else {
        return area;
    }
}

console.log(calculo(5,5));
console.log(calculo(5,3));
console.log(calculo(5));
console.log(calculo(5,4));
console.log(calculo(3));
console.log(calculo())