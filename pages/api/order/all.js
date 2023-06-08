// import { prisma } from "../../../libs/prisma.libs";

// export default function handler(req, res) {
//   prisma.order.findMany({
//     include: {
//       cart: {
//         include: {
//           product: true,
//         },
//       },
//     },
//   })
//     .then((orders) => {
//       res.status(200).json({
//         message: "All orders",
//         data: orders,
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// }

import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    const {status} = req.query;
    if(status === "Belum Bayar"){
        const data = await prisma.order.findMany({
            where:{
                status: "Belum Bayar"
            },
            include: {
                    cart: {
                      include: {
                        product: true,
                      },
                    },
                  },
        })
        res.status(200).json({data: data})
    } else if(status === "Sudah Bayar"){
        const data = await prisma.order.findMany({
            where:{
                status: "Sudah Bayar"
            },
            include: {
              cart: {
                include: {
                  product: true,
                },
              },
            },
        })
        res.status(200).json({data: data})
    } else {
        const allData = await prisma.order.findMany({
          include: {
            cart: {
              include: {
                product: true,
              },
            },
          },
        })
        res.status(200).json({data: allData})
    }
}