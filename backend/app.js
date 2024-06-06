import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import router from "./routes/Router.js";

dotenv.config();

const port = process.env.PORT || 3000; 
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());


app.use('/', router);  

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});