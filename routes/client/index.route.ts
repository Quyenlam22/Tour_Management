import {Express} from "express";
import { tourRoutes } from "./tour.route";
import { homeRoutes } from "./home.route";
import { categoryRoutes } from "./category.route";
import { cartRoutes } from "./cart.route";

const clientRoutes = (app: Express): void => {
    app.use(`/`, homeRoutes);
    app.use(`/tours`, tourRoutes);
    app.use(`/categories`, categoryRoutes);
    app.use(`/cart`, cartRoutes);
};

export default clientRoutes;