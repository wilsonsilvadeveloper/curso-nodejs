const express = require('express');
const router = express.Router();
const Users = require('../usersSchema');
const Posts = require('../posts');

const getUser = async (login, senha) => {
    try {
        let user = await Users.findOne({nome: login, senha: senha});
        if(user){
            return {login: user.nome, success: true};
        } else {
            throw new Error('Usuário ou senha inválidos');
        }
    } catch(e){
        console.error(e.message);
        return {success: false};
    }
}

router.get('/', async (req, res)=> {
    if(req.session.login == null){
        res.render('admin-login');
    } else {
        let posts = await Posts.find({}).sort({ '_id': -1 }).exec();
        posts = posts.map((val) => ({
            id: val.id,
            titulo: val.titulo,
            slug: val.slug,
            conteudo: val.conteudo,
            descricao: val.conteudo.substring(0, 100) + '...',
            image: val.image,
            categoria: val.categoria,
            views: val.views
        }));

        res.render('admin-painel', {posts: posts});
    }
    console.log('session: ' + req.session.login);
})

router.post('/', async (req, res)=> {
    let user = await getUser(req.body.login, req.body.senha);
    console.log('user: ', user);
    if(user.success){
        req.session.login = user.login;
    }
    res.redirect('/admin/login');
})

module.exports = router;