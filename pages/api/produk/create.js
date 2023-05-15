//how to create a new product image from api/upload 
import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { product_img, product_name, product_price, product_desc } = req.body;
  const new_productdata = {
    product_img: product_img,
    product_name: product_name,
    product_price: product_price,
    product_desc: product_desc,
    status: "not ordered"
  };

  prisma.product.create({
    data: new_productdata,
  })
    .then((product) => {
      res.status(201).json({
        message: "Product created successfully!",
        data: product,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: error //|| "Error occured! Please contact the admin for more information.",
      });
    }
  );
}
