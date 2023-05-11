import prisma from "../../libs/prisma.libs";
import path from "path";
import fs from "fs";
import multer from "multer";
import sharp from "sharp";

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('Only images are allowed'))
    }
    cb(null, true)
  }
});

const multerAny = multer().any();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    multerAny(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const { product_name, product_price, product_desc } = req.body;
      const product_img = req.files[0].filename;

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
        res.status(400).json({ message: "Product failed to create", error: error.message });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
