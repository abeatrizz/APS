const roupasService = require('../services/roupasService');

const getAllRoupas = async (req, res) => {
  try {
    const roupas = await roupasService.getAllRoupas();
    res.json(roupas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoupaById = async (req, res) => {
  try {
    const roupa = await roupasService.getRoupaById(req.params.id);
    if (!roupa) {
      return res.status(404).send('Roupa não encontrada');
    }
    res.json(roupa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRoupa = async (req, res) => {
  try {
    const roupa = await roupasService.createRoupa(req.body);
    res.status(201).json(roupa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRoupas,
  getRoupaById,
  createRoupa,
};