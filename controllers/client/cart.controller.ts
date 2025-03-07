import { Request, Response } from "express";
import Tour from "../../models/tour.model";

export const index = async (req: Request, res: Response) => {
    res.render("client/pages/cart/index", {
        pageTitle: 'Giỏ hàng',
    });
}

export const getTour = async (req: Request, res: Response) => {
    const itemCarts = JSON.parse(req.params.itemCarts);

    let cartDetail = [];

    if (itemCarts) {
        for (const item of itemCarts) {
            const tour = await Tour.findOne({
                where: {
                    id: item.tourId
                },
                raw: true
            });

            if (tour) {
                tour["image"] = JSON.parse(tour["images"])[0];
                tour["quantity"] = item.quantity;
                tour["priceSpecial"] = Math.round(tour["price"] * (1 - tour["discount"] / 100));
                tour["totalPrice"] = tour["priceSpecial"] * item.quantity;
                cartDetail.push(tour);
            }
        }

        if (cartDetail.length > 0) {
            cartDetail["total"] = cartDetail.reduce((sum, item) => sum + item["totalPrice"], 0);
        }
    }

    res.json({
        code: 200,
        cartDetail: cartDetail,
        total: cartDetail["total"]
    });
}