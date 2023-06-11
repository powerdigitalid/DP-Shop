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
    },
  }),
  limits: {
    fileSize: 10000000, // 10 MB
  },
});
// update product from tabel product by id 
export default async function handler(req, res) {
  //update product by id
  if (req.method === "PUT") {
    upload.single("product_img")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { id } = req.query; 
      const { product_name, product_price, product_desc} = req.body; 
      const product_img = `/uploads/${req.file.filename}`;
      const product = await prisma.product.update({
        where: {
          id: parseInt(id),
        },
        data: {
          product_name, 
          product_price: parseInt(product_price),
          product_desc,
          product_img,
        },
      });
      // if(product.image){
      //   fs.unlinkSync(`.${product.image}`);
      // } 
      return res.status(200).json({data:product});
    });
  }
}