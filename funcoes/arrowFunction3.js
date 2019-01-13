let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global);
comparaComThis(this);

const obj = {};

comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param); // função arrow tem um this que aponta para o atributo referenciado/função em que foi definido.
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj); // função arrow prevalece sobre o bind(), com relação ao this.
comparaComThisArrow(obj);
