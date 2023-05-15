/* eslint-disable import/no-anonymous-default-export */
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
    limits: {
      fileSize: 1000000, // 1 MB
    },
  })
});

export default async (req, res) => {
  if (req.method === "POST") {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({ url: `/uploads/${req.file.filename}` });
    });
  }
};
