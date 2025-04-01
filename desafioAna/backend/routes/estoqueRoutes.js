const express = require('express');
const router = express.Router();
const { createEstoque, getEstoque, updateEstoque, deleteEstoque, getEstoqueById } = require('../controllers/estoqueController');

// Rotas de Estoque
router.post('/', createEstoque);
router.get('/', getEstoque);
router.get('/:id', getEstoqueById);
router.put('/:id', updateEstoque); // Rota para atualizar estoque
router.delete('/:id', deleteEstoque); // Rota para deletar estoque

module.exports = router;
