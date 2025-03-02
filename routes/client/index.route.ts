import {Express} from "express";
import { tourRoutes } from "./tour.route";
import { homeRoutes } from "./home.route";
import { categoryRoutes } from "./category.route";

const clientRoutes = (app: Express): void => {
    app.use(`/`, homeRoutes);
    app.use(`/tours`, tourRoutes);
    app.use(`/categories`, categoryRoutes);
};

export default clientRoutes;