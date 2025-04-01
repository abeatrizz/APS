const estoque = require('../models/estoque');
const estoque = require('../models/estoque');
const estoque = require('../models/estoque');

// Criar novo estoque
exports.createEstoque = async (req, res) => {
    try {
        const {quantidade, name, codigo } = req.body;
        const estoque = new estoque({ quantidade, name, codigo});
        await estoque.save();
        res.status(201).json(estoque);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todo o estoque
exports.getEstoque = async (req, res) => {
    try {
        const estoque = await estoque.find().populate('quantidade', 'name');
        res.status(200).json(estoque);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getEstoqueById = async (req, res) => {
    try {
        const estoque = await estoque.findById(req.params.id).populate('quantidade', 'name');
        if (!estoque) {
            return res.status(404).json({ message: 'Estoque não encontrado' });
        }
        res.status(200).json(estoque);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar estoque
exports.updateEstoque = async (req, res) => {
    try {
        const { id } = req.params;
        const {quantidade, name, codigo } = req.body;

        const updateEstoque = await estoque.findByIdAndUpdate(id, { quantidade, name, codigo}, { new: true });
        if (!updateEstoque) return res.status(404).json({ message: 'Estoque não encontrado' });

        res.status(200).json(updateEstoque);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir estoque
exports.deleteEstoque = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEstoque = await estoque.findByIdAndDelete(id);
        if (!deleteEstoque) return res.status(404).json({ message: 'Estoque não encontrado' });

        res.status(200).json({ message: 'Estoque excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
