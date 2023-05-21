import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    const { user_google,name_user, order_date, total, cart_id, expedisi, address, shipping} = req.body;
    const new_order = {
        user_google : user_google,
        name_user : name_user,
        order_date : order_date,
        total : parseInt(total),
        cart: {
            connect : {
                id : parseInt(cart_id)
            }
        },
        expedisi : expedisi,
        address : address,
        shipping : parseInt(shipping),
        status : "Belum Bayar"
    };
    try {
        const create_order = await prisma.order.create({
            data : new_order
        });
        res.status(200).json(create_order);
    }
    catch (error) {
        res.status(400).json({message : "Gagal membuat order baru", error : error});
    }
}