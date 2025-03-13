require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Definir o modelo de Produto
const ProdutoSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    imagem: String
});
const Produto = mongoose.model("Produto", ProdutoSchema);

// Criar rota GET para listar os produtos
app.get("/produtos", async (req, res) => {
    const produtos = await Produto.find();
    res.json(produtos);
});

// Criar rota POST para adicionar produtos (apenas para testes)
app.post("/produtos", async (req, res) => {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
