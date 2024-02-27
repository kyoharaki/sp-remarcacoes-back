import { db } from "../db.js";

export const getLaudos = (_,res) => {
    const q = "SELECT * FROM tbLaudos ORDER BY LAU_NUMERO DESC";

    db.query(q, (err, laudoData) => {
        if (err) return res.json(err);

        return res.status(200).json(laudoData);
    });
};

export const getUltimoLaudo = (_,res) => {
    const q = "SELECT * FROM sp_remarcacoes.tbLaudos ORDER BY LAU_NUMERO DESC LIMIT 1;";

    db.query(q, (err, laudoData) => {
        if (err) return res.json(err);

        return res.status(200).json(laudoData);
    });
};

export const getLaudo = (req,res) => {
    const q = "SELECT * FROM tbLaudos WHERE `LAU_PLACA` = ?";

    db.query(q,req.params.LAU_PLACA,(err, laudoData) => {
        if (err) return res.json(err);

        return res.status(200).json(laudoData);
    });
};

export const addLaudo = (req, res) => {
    const q = 
        "INSERT INTO `tbLaudos` (`LAU_DATA`, `LAU_PLACA`, " + 
        "`LAU_CHASSI`, `LAU_RENAVAM`, `LAU_RESULTADO`, `LAU_TIPO`, `LAU_HORA`, " + 
        "`LAU_HASH`, `LAU_STATUS`, `LAU_MOTOR`, `LAU_OFICIO`, `LAU_CIRETRAN`) VALUES (?)";

    const values = [
        req.body.LAU_DATA,
        req.body.LAU_PLACA,
        req.body.LAU_CHASSI,
        req.body.LAU_RENAVAM,
        req.body.LAU_RESULTADO,
        req.body.LAU_TIPO,
        req.body.LAU_HORA,
        req.body.LAU_HASH,
        req.body.LAU_STATUS,
        req.body.LAU_MOTOR,
        req.body.LAU_OFICIO,
        req.body.LAU_CIRETRAN,
    ];

    db.query(q,[values],(err) => {
        if (err) return res.json(err);

        return res.status(200).json("Laudo cadastrado com sucesso.");
    });
};

export const updateLaudo = (req, res) => {
    const q = 
    "UPDATE tbLaudos SET `LAU_STATUS` = ? WHERE `LAU_NUMERO` = ?";

    const values = [
        req.body.LAU_STATUS
    ];    

    db.query(q,[...values,req.params.LAU_NUMERO],(err) => {
        if (err) return res.json(err);

        return res.status(200).json("Status do laudo alterado com sucesso.");
    });
};