import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    prisma.product.delete({
        where: {
            id: req.body.id,
        }
    }).then((produk) => {
        res.status(200).json({
            message: "Produk deleted!",
            data: produk,
        });
    }).catch((error) => {
        res.status(500).json({
            message: error.message || "Error occured! Please contact the admin for more information.",
        });
    });
}