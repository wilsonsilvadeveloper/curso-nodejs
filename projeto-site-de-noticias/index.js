const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res)=> {
    if(req.query.busca != null){
        res.send('Você buscor por: ' + req.query.busca);
    } else {
        res.send('Home');
    }
})

app.get('/:slug', (req, res)=> {
    res.send(req.params.slug);
})

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})