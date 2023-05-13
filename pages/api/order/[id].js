import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const {id} req.query;
    if (req.method === 'GET') {
        prisma.order.findFirst({
            where: {
                id: parseInt(id),
            },
            select: {
                id: true,
                userid: true,
                productid: true,
                price: true,
                quantity: true,
                total: true,
                payment: true,
                expedisi: true,
                subtotal: true,
                shipping: true,
            }
        })
            .then((order) => {
                if (order != null && order != undefined) {
                    res.status(200).json({
                        message: "Order found!",
                        data: order,
                    });
                }
                else {
                    res.status(404).json({
                        message: "Order not found!",
                    });
                }

            })
            .catch((err) => {
                res.status(500).json({
                    message: err || "Error occured! Please contact the admin for more information.",
                });
            });
        // res.status(200).json({id: id})
    }
}