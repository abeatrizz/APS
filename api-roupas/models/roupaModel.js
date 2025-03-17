const mongoose = require('mongoose');

const roupaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tamanho: { type: String, required: true },
  cor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
});

const Roupa = mongoose.model('Roupa', roupaSchema);

module.exports = Roupa;