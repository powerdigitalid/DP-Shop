/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "../../../libs/prisma.libs";

//create hangle product to cart 
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_google, product_id, product_price, product_name, quantity, total } = req.body;
    const cart = await prisma.cart.create({
      data: {
        user_google: user_google,
        product: {
          connect: {
            id: parseInt(product_id),
          },
        },
        product_name: product_name, //how to fetch data product_name
        product_price: parseInt(product_price), //how to fetch data product_price
        quantity: parseInt(quantity),
        total: parseInt(total),
      },
    });
    return res.status(200).json(cart);
  }
}
