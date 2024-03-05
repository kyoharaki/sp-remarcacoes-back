import express from "express";
import { getLoja, getEndereco, login } from "../controllers/lojaController.js";

const lojaRouter = express.Router();

lojaRouter.get("/loja", getLoja);
lojaRouter.get("/endereco/:PAR_MUNICIPIO", getEndereco);
lojaRouter.post("/login", login);

export default lojaRouter;