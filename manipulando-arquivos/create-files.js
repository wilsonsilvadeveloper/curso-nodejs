// como criar arquivos com nodejs
const fs = require('fs'); // importa o módulo fs para manipular arquivos



fs.writeFile('arquivo.txt','arquivo criado com nodejs usando fs.createFile',(err)=> {
    if(err) throw err;
    console.log('Arquivo criado com sucesso');
})  // cria um arquivo com o conteúdo passado como parâmetro, se o arquivo já existir ele é sobrescrito.

fs.appendFile('arquivo2.txt', '\nOutro contéudo', (err)=> {
    if(err) throw err;
    console.log('Conteúdo adicionado com sucesso');
}); // adiciona conteúdo ao arquivo, se o arquivo não existir ele é criado.