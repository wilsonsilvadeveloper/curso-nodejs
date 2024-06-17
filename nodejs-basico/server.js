// como criar um sertvidor nodejs
const http = require('http'); // importa o módulo http
const hostName = 'localhost'; // nome do servidor
const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {
    res.statusCode = 200; // status da resposta
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá Mundo\n'); // resposta
}); // cria o servidor

server.listen(port, hostName, ()=> {
    console.log(`Servidor rodando em http://${hostName}:${port}`);
}) // inicia o servidor