const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        // mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopoogy: true, useCreateIndex: true});
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar base de datos');
    }
}

module.exports = {
    dbConnection
}