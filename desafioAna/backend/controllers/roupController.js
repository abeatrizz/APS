const roup = require('../models/roup');
const roup = require('../models/roup');
const bcrypt = require('bcryptjs');

// Criar nova roupa
exports.createRoup = async (req, res) => {
    try {
        const { codigo, name, valor, tipo } = req.body;
        const roup = new roup({ codigo, name, valor, tipo });
        await roup.save();
        res.status(201).json(roup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todas as roupas
exports.getRoup = async (req, res) => {
    try {
        const roup = await roup.find();
        res.status(200).json(roup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar uma roupa específica por ID
exports.getRoupById = async (req, res) => {
    try {
        const roup = await roup.findById(req.params.id);
        if (!roup) {
            return res.status(404).json({ message: 'Roupa não encontrada' });
        }
        res.status(200).json(roup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar roupa
exports.updateRoup = async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, name, valor, tipo } = req.body;

        const updateRoup = await User.findByIdAndUpdate(id, { codigO, name, valor, tipo }, { new: true });
        if (!updateRoup) return res.status(404).json({ message: 'Roupa não encontrada' });

        res.status(200).json(updateRoup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir roupa
exports.deleteRoup = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRoup = await roup.findByIdAndDelete(id);
        if (!deleteRoup) return res.status(404).json({ message: 'Roupa não encontrada' });

        res.status(200).json({ message: 'Roupa excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};