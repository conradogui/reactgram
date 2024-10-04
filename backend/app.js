import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import router from "./routes/Router.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import "./config/db.js"

dotenv.config();

const port = process.env.PORT || 5173; 
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors({credentials: true, origin: "http://localhost:5173"}));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))


app.use('/', router);  

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});