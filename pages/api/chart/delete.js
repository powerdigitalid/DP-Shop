import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    //delete cart item
    const { id } = req.query;
    if (req.method === "DELETE") {
        const cart = await prisma.cart.delete({
            where: {
                id: parseInt(id),
            }
        });
        return res.status(200).json({
            message: "Delete cart item success",
            data: cart,
        });
    } else {
        return res.status(400).json({
            message: "Method not allowed",
            data: [],
        });
    }
};