import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    prisma.product.create({
        data: {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_desc: req.body.product_desc,
            product_img: req.body.product_img,
        }
    }).then((produk) => {
        res.status(200).json({
            message: "Produk created!",
            data: produk,
        });
    }).catch((error) => {
        res.status(500).json({
            message: error.message || "Error occured! Please contact the admin for more information.",
        });
    });
}