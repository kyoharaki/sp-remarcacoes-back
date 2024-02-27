import express from "express";
import { getUf } from "../controllers/ufController.js";

const ufRouter = express.Router();

ufRouter.get("/uf", getUf);

export default ufRouter;