//patch data product from api/product/[id] to status: "ordered" 
import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    if (req.method !== "PATCH") {
        const {id} = req.query;
        if(id) {
            const product = await prisma.product.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    status: "ordered"
                }
            });
            res.status(200).json({
                message: "Product updated successfully!",
                data: product
            });
        }
    } else {
        res.status(405).json({
            message: "Method not allowed!"
        });
    }
}