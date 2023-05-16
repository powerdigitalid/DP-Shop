/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "../../../libs/prisma.libs";

//how to create an API to automatically enter products in the cart according to the session entered
export default async (req, res) => {
    if (req.method === "POST") {
        const { product_id, customer_id, product_price } = req.body;
        const cart = await prisma.cart.create({
            data: {
                product_id: parseInt(product_id),
                customer_id: parseInt(customer_id),
                product_price: parseInt(product_price),
            },
        });
        return res.status(200).json(cart);
    }
};
    