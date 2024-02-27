import express from "express";
import { getCiretran } from "../controllers/ciretranController.js";

const ciretranRouter = express.Router();

ciretranRouter.get("/ciretran", getCiretran);

export default ciretranRouter;