import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    if (req.method === "POST"){
        const { user_google, order_date, quantity, total, cart_id, product_name, product_price, expedisi, subtotal, address, shipping} = req.body;
        try {
            const order = await prisma.order.create({
                data: {
                    user_google: user_google,
                    order_date: order_date,
                    quantity: quantity,
                    total: total,
                    cart : {
                        connect: {
                            id: parseInt(cart_id),
                        },
                    },
                    product_name: product_name,
                    product_price: product_price,
                    expedisi: expedisi,
                    subtotal: subtotal,
                    address: address,
                    shipping: shipping,
                },
            });
            return res.status(200).json(order);
        } catch (error) {
            return res.status(400).json({
                message: error.message,
                data: [],
            });
        }
    } else {
        return res.status(400).json({
            message: "Method not allowed",
            data: [],
        });
    }
}