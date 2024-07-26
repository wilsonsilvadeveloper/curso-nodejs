var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nome: String,
    senha: String
}, {collection: 'users'})

var Users = mongoose.model("Users", userSchema);
module.exports = Users;