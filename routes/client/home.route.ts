import { Request, Response } from "express";
import {Router} from "express";
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send(`Trang chủ`);
});

export const homeRoutes: Router = router;