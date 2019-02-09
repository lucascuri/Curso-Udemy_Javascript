// função que se auto-executa
(function() {
  console.log('Será executado imediatamente.');
  console.log('Foge do escopo mais abrangente!');
  // até mesmo a var foge do escopo global com este método
  // window.a ou global.b continuarão acessando o escopo mais abrangente
})();
