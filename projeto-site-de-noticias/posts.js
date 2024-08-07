var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    titulo: String,
    image: String,
    categoria: String,
    conteudo: String,
    slug: String,
    autor: String,
    views: Number
}, {collection: 'posts'})

var posts = mongoose.model("Posts", postSchema);
module.exports = posts;