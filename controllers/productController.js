 
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        const { nome, preco, imagem } = req.body;
        const novo = new Product({ nome, preco, imagem });
        await novo.save();
        res.status(200).json(novo)
    } catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.getAllProducts = async (req, res) => {
    const produtos = await Product.find();
    res.json(produtos);
}