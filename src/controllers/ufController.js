import { db } from "../db.js";

export const getUf = (_,res) => {
    const q = "SELECT DISTINCT MUN_ESTADO FROM tbMunicipios_DENATRAN";

    db.query(q, (err, ufData) => {
        if (err) return res.json(err);

        return res.status(200).json(ufData);
    });
};

export const getMunicipio = (_,res) => {
    const q = "SELECT DISTINCT MUN_CODIGO, MUN_NOME FROM tbMunicipios_DENATRAN";

    db.query(q, (err, municipioData) => {
        if (err) return res.json(err);

        return res.status(200).json(municipioData);
    });
};