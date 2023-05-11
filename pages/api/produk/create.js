import { prisma } from "../../../libs/prisma.libs";
import multer from "multer";
import path from "path";

// Multer configuration for file upload (image) in folder uploads (public/uploads) 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads"));
  }
});

const upload = multer({ storage: storage });

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { product_name, product_price, product_desc } = req.body;
    const product_img = req.file.filename;

    try {
      const product = await prisma.product.create({
        data: {
          product_name,
          product_price,
          product_desc,
          product_img,
        },
      });
      res.status(200).json({ message: "Product created", data: product });
    } catch (error) {
      res.status(400).json({ message: "Product failed to create", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
