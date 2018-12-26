// Variáveis fora de functions são globais.

{
	{
		{
			{
				var sera = "Será?";
				console.log(sera);
			}
		}
	}
}

console.log(sera);

function teste() {
	var local = 123;
	console.log(local); // como a var está dentro do bloco da function, vai funcionar.
}

teste();
console.log(local); // não funciona, porque a variável foi declarada dentro do bloco da function.