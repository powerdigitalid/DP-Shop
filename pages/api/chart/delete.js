import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (id && req.method === "DELETE") {
    try {
      const cart = await prisma.cart.delete({
        where: {
          Id: parseInt(id),
        },
      });
      res.status(201).json({
        message: "cart deleted successfully",
        data: cart,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  } else {
    res.status(400).json({
      message: "please fill all the fields",
    });
  }
}
