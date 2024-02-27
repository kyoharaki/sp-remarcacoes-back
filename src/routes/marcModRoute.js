import express from "express";
import { getMarcMod } from "../controllers/marcmodController.js";

const marcModRouter = express.Router();

marcModRouter.get("/marcmod", getMarcMod);

export default marcModRouter;