import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({
      message: "All products",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
// export default function handler(req, res) {
//   const {status} = req.query;
//   if(status === "notordered") {
//     prisma.product.findMany({
//       where: {
//         status: "notordered"
//       }
//     })
//       .then((products) => {
//         res.status(200).json({
//           message: "Get all products successfully!",
//           data: products
//         });
//       })
//       .catch((error) => {
//         res.status(200).json({
//           message: error || "Error occured! Please contact the admin for more information."
//         });
//       }
//     );
//   }
//   else if(status === "ordered") {
//     prisma.product.findMany({
//       where: {
//         status: "ordered"
//       }
//     })
//       .then((products) => {
//         res.status(200).json({
//           message: "Get all products successfully!",
//           data: products
//         });
//       })
//       .catch((error) => {
//         res.status(200).json({
//           message: error || "Error occured! Please contact the admin for more information."
//         });
//       }
//     );
//   }
//   else {
//     res.status(200).json({
//       message: "Error occured! Please contact the admin for more information."
//     });
//   }
// }

