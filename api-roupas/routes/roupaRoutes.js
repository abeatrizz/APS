const express = require('express');
const router = express.Router();
const roupasController = require('../controllers/roupasController');

router.get('/', roupasController.getAllRoupas);
router.get('/:id', roupasController.getRoupaById);
router.post('/', roupasController.createRoupa);

module.exports = router;