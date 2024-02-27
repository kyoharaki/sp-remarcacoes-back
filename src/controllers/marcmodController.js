import { db } from "../db.js";

export const getMarcMod = (_,res) => {
    const q = "SELECT DISTINCT MARCMOD_CODIGO, MARCMOD_DESCRICAO FROM tbMarcasModelos";

    db.query(q, (err, marcModData) => {
        if (err) return res.json(err);

        return res.status(200).json(marcModData);
    });
};