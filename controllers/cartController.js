const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
    const { produtoId, quantidade } = req.body;
    let carrinho = await Cart.findOne();
    if(!carrinho) carrinho = new Cart({ produtos: []});

    const existente = carrinho.produtos.find(p => p.produtoId.equals(produtoId))


}