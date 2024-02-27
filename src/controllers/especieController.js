import { db } from "../db.js";

export const getEspecies = (_,res) => {
    const q = "SELECT * FROM tbEspecies ORDER BY CODIGO ASC";

    db.query(q, (err, especiesData) => {
        if (err) return res.json(err);

        return res.status(200).json(especiesData);
    });
};