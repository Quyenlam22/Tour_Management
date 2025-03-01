import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.send(`Trang chủ`);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})