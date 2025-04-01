const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const roupSchema = new mongoose.Schema({
    codigo: { type: Number, required: true },
    name: { type: String, required: true },
    valor: { type: Number, required: true },
    tipo: { type: String, enum: ['calça', 'vestido', 'blusa', 'acessório', 'short', 'saia'], required: true }
});

const roup = mongoose.model('Roup', roupSchema);

module.exports = roup;
