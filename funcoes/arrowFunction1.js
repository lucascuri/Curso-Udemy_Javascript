let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // arrow function com apenas uma linha possui return implícito

console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá';
}

ola = () => 'Olá'; // sem parâmetros.
ola = _ => 'Olá'; // neste caso o parâmetro será o '_'.

console.log(ola());