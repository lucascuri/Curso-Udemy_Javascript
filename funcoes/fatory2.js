const criarProduto = (nome, preco, discount) => {
  return {
    nome,
    preco: preco - (preco * discount),
    desconto: discount
  }
}

console.log(criarProduto('Camiseta', 49.90, 0.5));
