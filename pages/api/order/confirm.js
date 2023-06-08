import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  if(req.method === "PATCH"){
      const {id} = req.body;
      prisma.order.update({
          where:{
              id: parseInt(id),
          },
          data:{
              status: "Sudah Bayar",
          },
      }).then((result)=>{
          res.json({data:result});
      });
  }
}