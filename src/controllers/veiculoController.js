import { db } from "../db.js";

export const getVeiculos = (_,res) => {
    const q = "SELECT * FROM tbVeiculos ORDER BY VEI_ID DESC";

    db.query(q, (err, veiculoData) => {
        if (err) return res.json(err);

        return res.status(200).json(veiculoData);
    });
};

export const getVeiculo = (req,res) => {
    const q = "SELECT * FROM tbVeiculos WHERE `VEI_PLACA` = ?";

    db.query(q,req.params.VEI_PLACA,(err, veiculoData) => {
        if (err) return res.json(err);

        return res.status(200).json(veiculoData);
    });
};

export const addVeiculo = (req, res) => {
    const q = 
        "INSERT INTO `tbVeiculos` (`VEI_PLACA`, `VEI_RENAVAM`, " + 
        "`VEI_CHASSI`, `VEI_MUNICIPIO`, `VEI_MARCMOD`, `VEI_PROCEDENCIA`, `VEI_TIPO`, " + 
        "`VEI_COR`, `VEI_COMBUSTIVEL`, `VEI_ESPECIE`, `VEI_ANO_FABRICACAO`, `VEI_ANO_MODELO`, " + 
        "`VEI_NUMERO_MOTOR`, `VEI_TIPOREMARCACAO`, `VEI_UF`, `VEI_PROPRIETARIO`, `VEI_CPF_CNPJ`) VALUES (?)";

    const values = [
        req.body.VEI_PLACA,
        req.body.VEI_RENAVAM,
        req.body.VEI_CHASSI,
        req.body.VEI_MUNICIPIO,
        req.body.VEI_MARCMOD,
        req.body.VEI_PROCEDENCIA,
        req.body.VEI_TIPO,
        req.body.VEI_COR,
        req.body.VEI_COMBUSTIVEL,
        req.body.VEI_ESPECIE,
        req.body.VEI_ANO_FABRICACAO,
        req.body.VEI_ANO_MODELO,
        req.body.VEI_NUMERO_MOTOR,
        req.body.VEI_TIPOREMARCACAO,
        req.body.VEI_UF,
        req.body.VEI_PROPRIETARIO,
        req.body.VEI_CPF_CNPJ,
    ];

    db.query(q,[values],(err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo cadastrado com sucesso.");
    });
};

export const updateVeiculo = (req, res) => {
    const q = 
    "UPDATE tbVeiculos SET `VEI_PLACA` = ?, `VEI_RENAVAM` = ?, " +
    "`VEI_CHASSI` = ?, `VEI_MUNICIPIO` = ?, `VEI_MARCMOD` = ?, " +
    "`VEI_PROCEDENCIA` = ?, `VEI_TIPO` = ?, `VEI_COR` = ?, `VEI_COMBUSTIVEL` = ?, " +
    "`VEI_ESPECIE` = ?, `VEI_ANO_FABRICACAO` = ?,`VEI_ANO_MODELO` = ?, `VEI_NUMERO_MOTOR` = ?, " +
    "`VEI_TIPOREMARCACAO` = ?, `VEI_UF` = ?, `VEI_PROPRIETARIO` = ?, `VEI_CPF_CNPJ` = ? WHERE `VEI_ID` = ?";

    const values = [
        req.body.VEI_PLACA,
        req.body.VEI_RENAVAM,
        req.body.VEI_CHASSI,
        req.body.VEI_MUNICIPIO,
        req.body.VEI_MARCMOD,
        req.body.VEI_PROCEDENCIA,
        req.body.VEI_TIPO,
        req.body.VEI_COR,
        req.body.VEI_COMBUSTIVEL,
        req.body.VEI_ESPECIE,
        req.body.VEI_ANO_FABRICACAO,
        req.body.VEI_ANO_MODELO,
        req.body.VEI_NUMERO_MOTOR,
        req.body.VEI_TIPOREMARCACAO,
        req.body.VEI_UF,
        req.body.VEI_PROPRIETARIO,
        req.body.VEI_CPF_CNPJ,
    ];    

    db.query(q,[...values,req.params.VEI_ID],(err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo atualizado com sucesso.");
    });
};

export const deleteVeiculo = (req, res) => {
    const q = "DELETE FROM tbVeiculos WHERE `VEI_ID` = ?";

    db.query(q,[req.params.VEI_ID],(err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo deletado com sucesso.");
    });
};