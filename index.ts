import express, { Express } from "express";
// import sequelize from "./config/database";
import dotenv from "dotenv";
import moment from "moment";
import clientRoutes from "./routes/client/index.route";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.locals.moment = moment;

// Folder Public
app.use(express.static(`${__dirname}/public`));

// sequelize;

clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});