import express from "express";
import { getLaudos, getLaudosCampinas, getLaudosJundiai, getUltimoLaudo, 
    addLaudo, updateLaudo, updateLaudoCampinas, updateLaudoJundiai } from "../controllers/laudoController.js";

const laudoRouter = express.Router();

laudoRouter.get("/laudos", getLaudos);

laudoRouter.get("/laudosC", getLaudosCampinas);

laudoRouter.get("/laudosJ", getLaudosJundiai);

laudoRouter.get("/laudo", getUltimoLaudo);

laudoRouter.post("/laudos", addLaudo);

laudoRouter.put("/laudos/:LAU_NUMERO", updateLaudo);

laudoRouter.put("/laudosC/:LAU_NUMERO", updateLaudoCampinas);

laudoRouter.put("/laudosJ/:LAU_NUMERO", updateLaudoJundiai);

export default laudoRouter;