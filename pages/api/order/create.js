import { prisma } from "../../../libs/prisma.libs";
//api handle order all chart user_google relasi to cart data to order (order_date, quantity, total, user_google, cart_id, product_name, product_price,expedisi, subtotal, addres, shipping)
export default async function handler(req, res) {
    if (req.method === "POST"){
        const { user_google, order_date, quantity, total, cart_id, product_name, product_price, expedisi, subtotal, addres, shipping} = req.body;
        try {
            const order = await prisma.order.create({
                data: {
                    user_google: user_google,
                    order_date: order_date,
                    quantity: quantity,
                    total: total,
                    cart:{
                        connect:{
                            Id: cart_id,
                        },
                    },
                    expedisi: expedisi,
                    subtotal: subtotal,
                    addres: addres,
                    shipping: shipping,
                },
                include: {
                    cart: {
                        select: {
                            product: {
                                select: {
                                    product_name: true,
                                    product_price: true,
                                },
                            },
                            quantity: true,
                            total: true,
                        },
                    }
                },
            });
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error: error.message,
            });
        }
    } else {
        res.status(400).json({
            message: "Invalid request method",
        });
    }
}