import prisma from '../../libs/prisma.libs.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'public/uploads'),
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
}).single('product_img');

export default async function handler(req, res) {
  upload(req, res, async err => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      const { product_name, product_desc, product_price } = req.body;
      const { filename, path } = req.file;
      try {
        const newProduct = await prisma.product.create({
          data: {
            product_name,
            product_desc,
            product_price: parseInt(product_price),
            product_img: filename
          }
        });
        res.status(200).json(newProduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while creating product' });
      }
    }
  });
}
