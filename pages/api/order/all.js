import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  prisma.order.findMany({
    include: {
      cart: {
        include: {
          product: true,
        },
      },
    },
  })
    .then((orders) => {
      res.status(200).json({
        message: "All orders",
        data: orders,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
