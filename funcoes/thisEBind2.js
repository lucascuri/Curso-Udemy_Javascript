function Pessoa() {
    this.idade = 0;

    const self = this; // outra forma de se usar o this sem que ele altere seu valor de acordo com a perspectiva. Como é uma constante, seu valor não muda.
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa; // cria uma instância de objeto
