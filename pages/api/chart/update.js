import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { Id, quantity } = req.body;
    try {
      const updatedCart = await prisma.cart.update({
        where: {
          Id: Id,
        },
        data: {
          quantity: quantity,
        },
      });

      const cart = await prisma.cart.findMany({
        where: {
          user_google: req.body.user_google,
        },
        select: {
          user_google: true,
          product: {
            select: {
              product_name: true,
              product_price: true,
            },
          },
          quantity: true,
          total: true,
        },
      });

      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid request method",
    });
  }
}
