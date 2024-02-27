import express from "express";
import { getVeiculos, getVeiculo, addVeiculo, updateVeiculo, deleteVeiculo } from "../controllers/veiculoController.js";

const veiculoRouter = express.Router();

veiculoRouter.get("/veiculos", getVeiculos);

veiculoRouter.get("/veiculo/:VEI_PLACA", getVeiculo);

veiculoRouter.post("/veiculos", addVeiculo);

veiculoRouter.put("/veiculos/:VEI_ID", updateVeiculo);

veiculoRouter.delete("/veiculos/:VEI_ID", deleteVeiculo);

export default veiculoRouter;