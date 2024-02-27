import express from "express";
import { getLaudos, getUltimoLaudo, getLaudo, addLaudo, updateLaudo } from "../controllers/laudoController.js";

const laudoRouter = express.Router();

laudoRouter.get("/laudos", getLaudos);

laudoRouter.get("/laudo", getUltimoLaudo);

laudoRouter.get("/laudo/:LAU_PLACA", getLaudo);

laudoRouter.post("/laudos", addLaudo);

laudoRouter.put("/laudos/:LAU_NUMERO", updateLaudo);

export default laudoRouter;