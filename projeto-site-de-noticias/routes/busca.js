// busca.js

const express = require('express');
const router = express.Router();
const Posts = require('../posts');

router.get('/', async (req, res) => {
    try {
        let findPosts = await Posts.find({ titulo: { $regex: req.query.busca, $options: "i" } });
        if (findPosts) {
            findPosts = findPosts.map((val) => ({
                titulo: val.titulo,
                slug: val.slug,
                conteudo: val.conteudo,
                descricao: val.conteudo.substring(0, 100) + '...',
                image: val.image,
                categoria: val.categoria,
                views: val.views
            }));
            res.render('busca', { posts: findPosts, contagem: findPosts.length, busca: req.query.busca });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
