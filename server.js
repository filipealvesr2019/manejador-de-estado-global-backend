const express = require("express");
const mongoose = require("mongoose");
const stateRoutes = require("./routes/stateRoutes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Conectado"))
  .catch(err => console.error("Erro ao conectar:", err));

app.use("/state", stateRoutes);
app.use("produtos", require("./routes/ProductRoutes"));
app.use("/carrinho", require("./routes/cartRoutes"))

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
