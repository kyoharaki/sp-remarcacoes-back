import { db } from "../db.js";

export const getTipos = (_,res) => {
    const q = "SELECT * FROM tbTipos ORDER BY CODIGO ASC";

    db.query(q, (err, tiposData) => {
        if (err) return res.json(err);

        return res.status(200).json(tiposData);
    });
};