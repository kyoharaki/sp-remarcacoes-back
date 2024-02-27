import { db } from "../db.js";

export const getCiretran = (_,res) => {
    const q = "SELECT * FROM tbCiretrans";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};