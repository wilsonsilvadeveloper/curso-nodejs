const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var usuarios = {};

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=> {

    socket.on('new user', (data)=> {
        console.log('data: ' + data);
        if(usuarios[data]){
            socket.emit('new user', {success: false});
        } else {
            usuarios[data] = socket.id;
            socket.emit('new user', {success: true, msg: 'Usuario conectado com sucesso...'});
            console.log(usuarios);
        }
    });

    socket.on('chat message', (obj)=> {
        console.log('Mensagem recebida: ', obj);
        if(usuarios[obj.nome] === socket.id){
            io.emit('message', obj); // envia a mensagem para todos os clientes conectados
        } else {
            console.error('Erro: Você não tem permissão para executar a ação.');
        }
    });

    socket.on('disconnect', ()=> {
        let user = Object.keys(usuarios).find(key => usuarios[key] === socket.id);
        if(user) {
            delete usuarios[user];
            console.log('User ' + user + ' desconectado!');
        }
        console.log(usuarios);
    });
});

http.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});
