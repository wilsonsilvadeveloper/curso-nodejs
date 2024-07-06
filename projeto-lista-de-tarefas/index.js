const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['Arrumar o quarto', 'Fazer o almoço', 'Lavar a louça', 'Estudar'];

app.get('/', (req, res)=> {
    res.render('index', {tarefasList: tarefas});
})

app.get('/deletar/:id', (req, res)=> {
    const id = req.params.id;
    tarefas = tarefas.filter((val, index)=> {
        if(index != id){
            return val;
        }
    });
    res.render('index', {tarefasList: tarefas});
})

app.post('/', (req, res)=> {
    tarefas.push(req.body.tarefa);
    res.render('index', {tarefasList: tarefas});
})

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
})