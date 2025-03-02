import { Request, Response } from "express";
import Tour from "../../models/tour.model";
import {Router} from "express";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    const tours = await Tour.findAll({
        raw: true,
    });

    res.render("client/pages/tours/index", {
        pageTitle: 'Danh sách tour',
        tours: tours
    });
});

export const tourRoutes: Router = router;