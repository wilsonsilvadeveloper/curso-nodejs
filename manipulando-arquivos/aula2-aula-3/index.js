// Descrição: Lendo arquivos com Node.js e manipulando strings
const fs = require('fs');

fs.readFile('arquivo.txt', (err, data)=> { // Lê o arquivo
    console.log(data.toString()); // Imprime o conteúdo do arquivo
    let str = data.toString(); // Armazena o conteúdo do arquivo em uma variável
    let newStr = str.split('/'); // Divide a string em um array de strings a partir do caractere '/'
    console.log(newStr);

    let subStr = str.substring(0, 3); // Retorna uma parte da string a partir do índice 0 até o índice 3
    console.log(subStr);
})  