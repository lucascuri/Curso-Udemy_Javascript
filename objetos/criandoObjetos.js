// usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Cadeira', 1144.58, 0.17);
const p2 = new Produto('PS4', 1800, 0.50);
console.log(`Produto 1: ${p1.getPrecoComDesconto()}, Produto 2: ${p2.getPrecoComDesconto()}`);

// Função Factory
function CriarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = new CriarFuncionario('Lucas', 1250, 2);
const f2 = new CriarFuncionario('Maria', 11400, 1);
console.log(`Funcionário 1: ${f1.getSalario().toFixed(2)}, Funcionário 2: ${f2.getSalario().toFixed(2)}`);

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON."}');
console.log(fromJSON.info);