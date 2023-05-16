//how to create a new product image from api/upload 
import { prisma } from "../../../libs/prisma.libs";
import fs from 'fs';
import path from "path";

export default async function handler(req, res) {
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  let product_desc = req.body.product_desc;
  let product_img = req.body.product_img;

  let product = await prisma.product.create({
    data:{
      product_name,
      product_price,
      product_desc
    }
  });

  let folderImage = [];

  product_img.map(name =>{
    folderImage.push(
      '/public/upload_'+product.id+'_'+name)
  }
  );

  folderImage.map(async(path) =>{
    await prisma.image.create({
      data:{
        image_name:path,
        product_id:product.id
      }
    })
  }
  );

  let folder = './public/upload_'+product.id+'/';

  fs.mkdir(folder, { recursive: true }, (err) => {
    return console.log(err);
  });

  return res.json(folder);
}