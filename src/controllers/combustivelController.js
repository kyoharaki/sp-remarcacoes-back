import { db } from "../db.js";

export const getCombustivel = (_,res) => {
    const q = "SELECT * FROM tbCombustiveis ORDER BY CODIGO ASC";

    db.query(q, (err, combustivelData) => {
        if (err) return res.json(err);

        return res.status(200).json(combustivelData);
    });
};