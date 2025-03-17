const Produto = require("../models/produtoModel");

const getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos" });
    }
};

module.exports = { getProdutos };
