const express = require('express');
const router = express.Router();
const Posts = require('../posts');
const path = require('path');
const fs = require('fs');

router.get('/', (req, res)=> {
    res.send('ok');
})

router.post('/cadastro', (req, res)=> {
    try{
        console.log(req.files);
        let format = req.files.arquivo.name.split('.');
        var imageName = '';
        if(format[format.length -1] == 'jpg' || format[format.length -1] == 'png' || format[format.length -1] == 'jpeg'){
            imageName = new Date().getTime() + req.files.arquivo.name;
            const imagePath = path.join(__dirname, '..', 'public', 'imgnews', imageName);
            console.log('imagePath' + imagePath);
            req.files.arquivo.mv(imagePath, (err) => {
                if (err) {
                    throw new Error('Erro ao mover o arquivo');
                };
            });
        } else {
            fs.unlink(req.files.arquivo.tempFilePath);
            throw new Error('Formato de arquivo inválido');
        };
    
        Posts.create({
            titulo: req.body.titulo,
            image: 'http://localhost:3000/public/imgnews/' + imageName,
            categoria: req.body.categoria,
            conteudo: req.body.noticia,
            slug: req.body.slug,
            autor: req.body.autor,
            views: 0
        });

        res.redirect('/admin/login');
        console.log(req.body);
    } catch(e){
        console.error(e.message);
        res.send(e.message);
    }
})

router.get('/delete/:id', async (req, res)=> {
    await Posts.deleteOne({_id: req.params.id}).then(()=> {
        console.log(`Noticia com o id ${req.params.id} deletada com sucesso`);
        res.send('Deletando a noticia com id: ' + req.params.id);
    }).catch(err => {
        res.send('Erro a deletar noticia');
    })
})

module.exports = router;