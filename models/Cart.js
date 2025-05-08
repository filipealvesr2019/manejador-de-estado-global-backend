const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    produtos: [{
        produtoId: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
        quantidade: Number
    }]
});

module.exports = mongoose.model("Cart", cartSchema);

