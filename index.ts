import express, { Express, Request, Response } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";
import Tour from "./models/tour.model";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Folder Public
app.use(express.static(`${__dirname}/public`));

sequelize;

app.get("/", (req: Request, res: Response) => {
    res.send(`Trang chủ`);
});

app.get("/tours", async (req: Request, res: Response) => {
    const tours = await Tour.findAll({
        raw: true,
    });

    res.render("client/pages/tours/index", {
        pageTitle: 'Danh sách tour',
        tours: tours
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});