const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db_user = process.env.MDBUSER;
        const db_password = process.env.MDBPASSWORD;
        const uri = `mongodb+srv://${db_user}:${db_password}@cluster0.fvxupst.mongodb.net/belavistanews?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(uri);

        console.log('Conectado ao banco de dados MongoDB');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        process.exit(1); // Encerra o processo com falha
    }
};

module.exports = connectDB;
