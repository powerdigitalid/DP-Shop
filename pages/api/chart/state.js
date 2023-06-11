import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  if(req.method === "PATCH"){
      const {status} = req.body;
      prisma.order.updateMany({
          where:{
              status: "Belum Checkout",
          },
          data:{
              status: "Sudah Checkout",
          },
      }).then((result)=>{
          res.json({data:result});
      });
  }
}