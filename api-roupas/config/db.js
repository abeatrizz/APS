const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('sua_string_de_conexao_mongodb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;