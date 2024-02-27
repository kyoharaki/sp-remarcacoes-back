import express from "express";
import { getEspecies } from "../controllers/especieController.js";

const especieRouter = express.Router();

especieRouter.get("/especie", getEspecies);

export default especieRouter;