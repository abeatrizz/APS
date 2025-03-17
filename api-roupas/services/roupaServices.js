const Roupa = require('../models/roupaModel');

const getAllRoupas = async () => {
  return Roupa.find();
};

const getRoupaById = async (id) => {
  return Roupa.findById(id);
};

const createRoupa = async (roupaData) => {
  const roupa = new Roupa(roupaData);
  return roupa.save();
};

module.exports = {
  getAllRoupas,
  getRoupaById,
  createRoupa,
};