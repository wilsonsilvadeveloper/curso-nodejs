// como ler arquivos com base na url
const http = require('http'); // importa o módulo http
const fs = require('fs'); // importa o módulo fs para ler arquivos

const hostName = 'localhost'; // nome do servidor
const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {

    console.log(req.headers);
    console.log('url' , req.url);
    if(req.url == '/wilson'){
        fs.readFile('index.html', (err, data) => {
            res.writeHeader(200, {'Content-Type': 'text/html'}); // define o cabeçalho da resposta
            res.write(data); // retorna o conteúdo do arquivo
            return res.end(); // finaliza a resposta
        });
    } else {
        return res.end('URL não encontrada');
    }
    
})

server.listen(port, hostName, () => {
    console.log(`Servidor rodando em http://${hostName}:${port}`)
});