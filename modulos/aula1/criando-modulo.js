// como criar um modulo e exportar
function Hello(){
    console.log('Hello World');
}

const number = 10;
const array = [1, 2, 3, 4, 5];
const objVeiculo = {
    morca: 'Fiat',
    modelo: 'Uno',
    ano: 2019,
    cor: 'Preto',
    placa: 'ABC-1234'
}

exports.helloword = Hello;
exports.nn = number;
exports.objs = objVeiculo;
exports.arrayNumbers = array;
// para exportar uma função, variavel, objeto, array, bastar usar exports.nomeQualquer = NomeDaFuncao;