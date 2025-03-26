import express from "express";
import mongoose from "mongoose";
import stateRoutes from "./stateRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Conectado"))
  .catch(err => console.error("Erro ao conectar:", err));

app.use("/state", stateRoutes);

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
