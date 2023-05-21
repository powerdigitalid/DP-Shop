import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    const { id } = req.body;
    try {
        const delete_chart = await prisma.cart.delete({
            where : {
                id : parseInt(id)
            }
        });
        res.status(200).json(delete_chart);
    }
    catch (error) {
        res.status(400).json({message : "Gagal menghapus chart", error : error});
    } 
}
