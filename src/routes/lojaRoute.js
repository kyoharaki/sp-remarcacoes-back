import express from "express";
import { getLoja, login } from "../controllers/lojaController.js";

const lojaRouter = express.Router();

lojaRouter.get("/loja", getLoja);
lojaRouter.post("/login", login);

export default lojaRouter;