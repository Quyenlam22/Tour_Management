import {Express} from "express";
import { tourRoutes } from "./tour.route";
import { homeRoutes } from "./home.route";

const clientRoutes = (app: Express): void => {
    app.use(`/`, homeRoutes);
    app.use(`/tours`, tourRoutes);
};

export default clientRoutes;