const express = require("express");
const router = express.Router();
const { getProdutos } = require("../controllers/produtoController");

router.get("/produtos", getProdutos);

module.exports = router;
