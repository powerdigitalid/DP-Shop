import multer from 'multer';
import path from 'path';
import formidable from 'formidable';
import { prisma } from '../../libs/prisma.libs';

// how to use formidable and multer together

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'public', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // 1MB
  },
}).single('product_img');

export default async function handler(req, res) {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).json({ error: err });
    } else if (err) {
      res.status(500).json({ error: err });
    } else {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        const { product_name, product_price, product_desc } = fields;
        const product_img = files.product_img.name;
        
        try {
          const product = await prisma.product.create({
            data: {
              product_name,
              product_price,
              product_desc,
              product_img,
            },
          });
          res.status(200).json({ message: 'Product created', data: product });
        } catch (error) {
          res.status(400).json({ message: 'Product failed to create', error });
        }
      });
    }
  });
}
























// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(process.cwd(), 'public', 'uploads'));
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().getTime() + '-' + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024, // 1MB
//   },
// }).single('product_img');

// export default async function handler(req, res) {
//   upload(req, res, async function (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(400).json({ message: 'Image too large' });
//     } else if (err) {
//       res.status(400).json({ message: 'Failed to upload image' });
//     } else {
//       const { product_name, product_price, product_desc } = req.body;
//       const product_img = req.file.filename;

//       try {
//         const product = await prisma.product.create({
//           data: {
//             product_name,
//             product_price,
//             product_desc,
//             product_img,
//           },
//         });
//         res.status(200).json({ message: 'Product created', data: product });
//       } catch (error) {
//         res.status(400).json({ message: 'Product failed to create', error });
//       }
//     }
//   });
// }
