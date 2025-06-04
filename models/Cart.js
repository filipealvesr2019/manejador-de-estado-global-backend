const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    produtos: [{
        produtoId: { type: mongoose.Schema.Types.ObjectId, ref: "Produto"},
        quantidade: Number
    }]
});

module.exports = mongoose.model("Cart", cartSchema);

