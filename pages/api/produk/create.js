/* eslint-disable import/no-anonymous-default-export */
//how to create a new product product_img from api/upload 
import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};
 
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  }),
  limits: {
    fileSize: 10000000, // 1 MB
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    upload.single("product_img")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { product_name, product_price, product_desc } = req.body;
      const product_img = `/uploads/${req.file.filename}`;
      const product = await prisma.product.create({
        data: {
          product_name,
          product_price: parseInt(product_price),
          product_desc,
          product_img,
        },
      });
      return res.status(200).json(product);
    });
  }
};
