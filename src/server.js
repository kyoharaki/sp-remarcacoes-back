import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer, { diskStorage } from "multer";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import veiculoRoute from "./routes/veiculoRoute.js";
import corRoute from "./routes/corRoute.js";
import combustivelRoute from "./routes/combustivelRoute.js";
import ufRoute from "./routes/ufRoute.js";
import tipoRoute from "./routes/tipoRoute.js";
import especieRoute from "./routes/especieRoute.js";
import marcModRoute from "./routes/marcModRoute.js";
import laudoRoute from "./routes/laudoRoute.js";
import ciretranRoute from "./routes/ciretranRoute.js";
import lojaRoute from "./routes/lojaRoute.js";

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

dotenv.config();

const server = express();
const PORT = process.env.DB_PORT || 3000;

server.use(express.json());
server.use(cors(
    {
        origin: process.env.CLIENT_URL,
        methods: ["POST,GET,PUT,DELETE"],
        credentials: true,
    }
));
server.use(cookieParser());

// serving front end build files
server.use(express.static(__dirname + "/../build"));


// setup multer for file upload
var storage = multer.diskStorage(
    {
        destination: './build',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )

server.post("/upload", upload.single("file"), (req,res) => {
    res.sendStatus(200);
});

server.get("/download/:FILENAME",(req,res) => {
    res.download(__dirname + "/../build/" + req.params.FILENAME);
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return;
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                return res.json({Error: "Erro de autenticação."});
            } else{
                req.usuario = decoded.usuario;
                next();
            }
        })
    }
};

server.get("/",verifyUser,(req,res) => {
    return res.json({Status: "Sucesso"});
});

server.get("/logout", (req,res) => {
    res.clearCookie('token');
    return res.json({Status: "Sucesso"});
});

server.use("/", veiculoRoute);
server.use("/", corRoute);
server.use("/", combustivelRoute);
server.use("/", ufRoute);
server.use("/", tipoRoute);
server.use("/", especieRoute);
server.use("/", marcModRoute);
server.use("/", laudoRoute);
server.use("/", ciretranRoute);
server.use("/", lojaRoute);

server.listen(PORT,"0.0.0.0", () => {
    console.log("HOST: ", process.env.DB_HOST);
    console.log("PORT: ", PORT);
});