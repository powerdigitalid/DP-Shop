import prisma from "../../../libs/prisma.libs";
import multer from "multer";
import path from "path";

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // Batasi ukuran file (dalam bytes), contoh: 1 MB
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Handle image upload using multer
      upload.single("product_img")(req, res, async (err) => {
        if (err) {
          res.status(500).json({
            message: "An error occurred while uploading the file.",
            error: err,
          });
        } else {
          const { product_name, product_price, product_desc } = req.body;
          const new_product = {
            product_name: product_name,
            product_price: product_price,
            product_desc: product_desc,
            product_img: req.file.originalname,
          };

          try {
            const product = await prisma.product.create({
              data: new_product,
            });

            res.status(201).json({
              message: "Product created successfully!",
              data: product,
            });
          } catch (error) {
            res.status(500).json({
              message:
                "An error occurred while creating the product. Please try again later.",
              error: error,
            });
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        message:
          "An error occurred while uploading the file. Please try again later.",
        error: error,
      });
    }
  } else {
    res.status(405).json({
      message: "Method Not Allowed",
    });
  }
}
