// Renomeando arquivos e deletando arquivos
const fs = require('fs');

fs.unlink('arquivo2.txt', (err) => { // Deleta o arquivo
    console.log('arquivo deletado com sucesso!');
})

fs.rename('arquivo.txt', 'arquivo-renomeado.txt', (err) => { // Renomeia o arquivo
    console.log('arquivo renomeado com sucesso!');
})