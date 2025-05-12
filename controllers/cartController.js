const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
    const { produtoId, quantidade } = req.body;
    let carrinho = await Cart.findOne();
    if(!carrinho) carrinho = new Cart({ produtos: []});

    const existente = carrinho.produtos.find(p => p.produtoId.equals(produtoId));

    if(existente){
        existente.quantidade += quantidade
    } else {
        carrinho.produtos.push({ produtoId, quantidade })
    }

    await carrinho.save();
    res.json(carrinho);


}

exports.getCart = async (req, res) => {
    const carrinho = await Cart.findOne().populate("produtos.produtoId");
    res.json(carrinho || { produtos: [] });

}