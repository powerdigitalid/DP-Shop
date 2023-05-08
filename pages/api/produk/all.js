import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  prisma.product
    .findMany()
    .then((produks) => {
      res.status(200).json({
        message: "All produks",
        data: produks,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
