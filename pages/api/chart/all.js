import { prisma } from "../../../libs/prisma.libs";

export default async (req, res) => {
    //get all cart
    const cart = await prisma.cart.findMany({
        select: {
            Id : true,
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
};