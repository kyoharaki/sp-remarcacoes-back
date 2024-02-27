import express from "express";
import { getTipos } from "../controllers/tipoController.js";

const tipoRouter = express.Router();

tipoRouter.get("/tipo", getTipos);

export default tipoRouter;