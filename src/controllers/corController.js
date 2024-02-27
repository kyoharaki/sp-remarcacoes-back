import { db } from "../db.js";

export const getCores = (_,res) => {
    const q = "SELECT * FROM tbCores ORDER BY CODIGO ASC";

    db.query(q, (err, coresData) => {
        if (err) return res.json(err);

        return res.status(200).json(coresData);
    });
};