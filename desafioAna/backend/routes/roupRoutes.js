const express = require('express');
const router = express.Router();
const { createRoup, getRoup, updateRoup, deleteRoup, getRoupById } = require('../controllers/roupController');

// Rotas de roupas
router.post('/', createRoup);
router.get('/', getRoup);
router.get('/:id', getRoupById);
router.put('/:id', updateRoup); // Rota para atualizar Roupa
router.delete('/:id', deleteRoup); // Rota para deletar Roupa

module.exports = router;
