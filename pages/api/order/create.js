import { set } from "date-fns";
import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  try {
    const { type } = req.query;
    if (req.method === "POST") {
      if (type === "bulk") {
        // receive array data from body
        const { insert } = req.body;
        console.log(insert)
        insert.forEach(async (item) => {
          const { user_google, name_user, order_date, total, cart_id, expedisi, address, shipping, no_telp, nama_pelanggan } = item;
          const new_order = {
            user_google: user_google,
            name_user: name_user,
            order_date: order_date,
            total: parseInt(total),
            cart: {
              connect: {
                id: parseInt(cart_id)
              }
            },
            expedisi: expedisi,
            address: address,
            no_telp: no_telp,
            nama_pelanggan: nama_pelanggan,
            shipping: parseInt(shipping),
            status: "Belum Bayar"
          };
          await prisma.order.create({
            data: new_order
          });
        });
        res.status(200).json({ message: "Berhasil membuat order baru", data: insert });
      } else {
        const { user_google, name_user, order_date, total, cart_id, expedisi, address, shipping, no_telp, nama_pelanggan } = req.body;
        const new_order = {
          user_google: user_google,
          name_user: name_user,
          order_date: order_date,
          total: parseInt(total),
          cart: {
            connect: {
              id: parseInt(cart_id)
            }
          },
          expedisi: expedisi,
          address: address,
          no_telp: no_telp,
          nama_pelanggan: nama_pelanggan,
          shipping: parseInt(shipping),
          status: "Belum Bayar"
        };
        const create_order = await prisma.order.create({
          data: new_order
        });
        res.status(200).json(create_order);
      }
    } else {
      res.status(405).json({ message: "Method yang diizinkan hanya POST" });
    }
  } catch (error) {
    res.status(400).json({ message: "Gagal membuat order baru", error: error });
  }
}