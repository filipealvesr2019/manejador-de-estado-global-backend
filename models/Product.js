const { default: mongoose } = require("mongoose")

const productSchema = new mongoose.Schema({
    nome: String, 
    preco: Number, 
    imagem: String
})

module.exports = mongoose.model("Product", productSchema);