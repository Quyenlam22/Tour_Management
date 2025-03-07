import {Router} from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/cart.controller";

router.get("/", controller.index);

router.patch("/getTours/:itemCarts", controller.getTour);

export const cartRoutes: Router = router;