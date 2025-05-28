const mongoose = require("mongoose")
const stateShema = new mongoose.Schema({
    key: String,
    value: mongoose.Schema.Types.Mixed
});

module.exports =  mongoose.model("State", stateShema)


