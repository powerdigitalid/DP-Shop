import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    if(req.method === "PATCH"){
        const { id } = req.body;
        try {
            const update_order = await prisma.order.update({
                where : {
                    id : parseInt(id)
                },
                data : {
                    status : "Sudah Bayar"
                }
            });
            res.status(200).json(update_order);
        }
        catch (error) {
            res.status(400).json({message : "Gagal mengubah status order", error : error});
        } 
    } else {
        res.status(405).json({message : "Method yang diizinkan hanya PATCH"});
    }
}