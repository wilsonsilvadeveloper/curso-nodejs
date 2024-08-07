// index.js

require('dotenv').config(); // Carregar variáveis de ambiente
const express = require('express');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./module/db.js');

const app = express();
var session = require('express-session');

// Conectar ao banco de dados
connectDB();

// Configurações do Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 86400000  } 
}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

// Rotas
const homeRoute = require('./routes/home');
const buscaRoute = require('./routes/busca');
const singleRoute = require('./routes/single');
const adminRoute = require('./routes/admin-login.js'); 
const adminPainelRoute = require('./routes/painel-admin.js');

app.use('/', homeRoute);
app.use('/busca', buscaRoute);
app.use('/', singleRoute);
app.use('/admin/login', adminRoute);
app.use('/admin/painel', adminPainelRoute);

// Middleware para lidar com erros 404
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

// Middleware para lidar com erros globais
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro no servidor');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
