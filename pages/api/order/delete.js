import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    //delete cart item
    try {
        const { id } = req.query;
        if (req.method === "DELETE") {
            const delete_cart = await prisma.cart.delete({
                where: {
                    id: parseInt(id)
                }
            });
            res.status(200).json(delete_cart);
        } else {
            res.status(405).json({ message: "Method yang diizinkan hanya DELETE" });
        }
    } catch (error) {
        res.status(400).json({ message: "Gagal menghapus order", error: error });
    }
}