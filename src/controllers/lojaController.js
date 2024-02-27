import { db } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getLoja = (_,res) => {
    const q = "SELECT * FROM `TBPARAMETROS_LOJA`";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const login = (req,res) => {
    const q = "SELECT * FROM `TBPARAMETROS_LOJA` WHERE `PAR_USUARIO` = ? AND `PAR_SENHA` = ?";

    db.query(q, [req.body.user, req.body.password],(err, data) => {
        if (err) return res.json({Error: "Erro de Login."});

        if(data.length > 0){
            const usuario = data[0].PAR_USUARIO;
            const token = jwt.sign({usuario},process.env.JWT_SECRET, {});
            res.cookie('token',token);
            return res.json({Status: "Sucesso"});
        } else{
            return res.json({Error: "Usuário ou senha incorreta."});
        }
    });
};