// como exportar usando classes

class ClassTeste{
    constructor(){
        console.log("Classe teste instanciada");
    }
    soma(x, y) {
        console.log(x + y);
    }
}

module.exports = ClassTeste; // exporta a classe para ser usada em outros arquivos
// para exportar uma classe basta usar module.exports = NomeDaClasse;