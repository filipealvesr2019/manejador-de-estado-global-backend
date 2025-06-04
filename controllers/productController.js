const Produto = require("../models/Produto");


exports.createProduct = async (req, res) => {
    try {
        const { nome, preco, imagem } = req.body;
        const novo = new Produto({ nome, preco, imagem });
        await novo.save();
        res.status(200).json(novo)
    } catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.getAllProducts = async (req, res) => {
    const produtos = await Produto.find();
    res.json(produtos);
}