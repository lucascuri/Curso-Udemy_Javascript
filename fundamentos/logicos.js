function compras(trabalho1, trabalho2) {
	const tomarSorvete = trabalho1 || trabalho2;
	const comprarTv50 = trabalho1 && trabalho2;
	const comprarTv32 = trabalho1 !== trabalho2;
	const serSaudavel = !tomarSorvete;

	return {tomarSorvete, comprarTv50, comprarTv32, serSaudavel};
}

console.log(compras(true, false));
console.log(compras(true, true));
console.log(compras(false, false));



// 2 trabalhos
// se passar em qualquer um, comprar sorvete
// se passar nos dois, comprar tv de 50''
// se passar em apenas um, comprar tv de 32''
// se tomar sorvete, não vai ser saudável
