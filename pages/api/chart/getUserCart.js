import { prisma } from "../../../libs/prisma.libs";

export default async (req, res) => {
    const { user_google } = req.query;
    if (req.method === "GET") {
        const cart = await prisma.cart.findMany({
            where: {
                user_google: user_google,
            },
            select: {
                user_google: true,
                product: {
                    select: {
                        product_name: true,
                        product_price: true,
                    }
                },
                quantity: true,
                total: true,
            }
        });
        return res.status(200).json(cart);
    } else {
        return res.status(400).json({
            message: "Method not allowed",
            data: [],
        });
    }
};
