const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falarDePessoa = pessoa.falar; // altera o this, por isso retorna undefined
falarDePessoa();
falarDePessoa.bind(pessoa)(); // bind especifica a qual objeto o this deve referenciar

// também pode ser usado dessa forma:
const falarDePessoaComBind = falarDePessoa.bind(pessoa);
falarDePessoaComBind();

console.log(pessoa)