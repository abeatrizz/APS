const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
    quantidade: { type: Number, required: true },
    name: { type: String, required: true },
    codigo: { type: mongoose.Schema.Types.ObjectId, ref: 'roup', required: true }
});

const estoque = mongoose.model('estoque', estoqueSchema);

module.exports = estoque;
