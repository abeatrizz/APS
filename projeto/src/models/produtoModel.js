const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = mongoose.model("Produto", ProdutoSchema);
