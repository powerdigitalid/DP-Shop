import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const order = await prisma.order.findMany({
        where: {
            id: parseInt(id),
        },
        select: {
            id: true,
            cart: {
                select: {
                    id: true,
                    user_google: true,
                    product: {
                        select: {
                            id: true,
                            product_name: true,
                            product_price: true,
                            product_desc : true,
                            product_img : true,
                        }
                    },
                    quantity: true,
                    total: true,
                }
            },
            user_google: true,
            name_user: true,
            address : true,
            expedisi : true,
            shipping : true,
            total : true,
            status : true,
        }
    });
    return res.status(200).json({data: order});
    } else {
    return res.status(400).json({
      message: "Method not allowed",
      data: [],
    });
    }
};
