import express from "express";
import { getCombustivel } from "../controllers/combustivelController.js";

const combustivelRouter = express.Router();

combustivelRouter.get("/combustivel", getCombustivel);

export default combustivelRouter;