const mongoose = require("mongoose");
const Produto = require("./models/produtoModel");
require("dotenv").config();
const connectDB = require("./config/database");

connectDB();

const produtos = [
    { nome: "Camiseta", preco: 49.99, descricao: "Camiseta 100% algodão" },
    { nome: "Calça Jeans", preco: 99.99, descricao: "Calça jeans azul" },
];

const seedDB = async () => {
    await Produto.deleteMany({});
    await Produto.insertMany(produtos);
    console.log("Banco populado!");
    mongoose.connection.close();
};

seedDB();
