import express from "express";
import { getCores } from "../controllers/corController.js";

const corRouter = express.Router();

corRouter.get("/cores", getCores);

export default corRouter;