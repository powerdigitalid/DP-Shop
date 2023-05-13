import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const {userid, productid,price, quantity,total, payment, expedisi, subtotal, shipping} = req.body;

    const new_order = {
        userid: userid,
        productid: productid,
        price: price,
        quantity: quantity,
        total: total,
        payment: payment,
        expedisi: expedisi,
        subtotal: subtotal,
        shipping: shipping,
    };

    prisma.order.create({
        data: new_order,
    })
        .then((order) => {
            res.status(201).json({
                message: "Order created successfully!",
                data: order,
            });
        })
        .catch((error) => {
            res.status(200).json({
                message: error //|| "Error occured! Please contact the admin for more information.",
            });
        }
    );
}