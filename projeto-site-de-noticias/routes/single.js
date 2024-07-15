// single.js

const express = require('express');
const router = express.Router();
const Posts = require('../posts');

router.get('/:slug', async (req, res) => {
    try {
        let postSingle = await Posts.findOneAndUpdate(
            { slug: req.params.slug },
            { $inc: { views: 1 } },
            { new: true }
        );

        console.log(req.params.slug);
        console.log('PostSingle', postSingle);

        if (!postSingle) {
            return res.status(404).send('Post não encontrado');
        }

        let listPostsViews = await Posts.find({}).sort({ 'views': -1 }).limit(3).exec();
        res.render('single', { noticia: postSingle, postViews: listPostsViews });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
