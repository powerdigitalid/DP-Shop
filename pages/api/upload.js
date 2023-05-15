import moment from "moment/moment";
import fs from "fs";
import formidable from "formidable";
import path from "path";
import slugify from "slugify";
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
  })
});

export default async (req, res) => {
  if (req.method === "POST") {
    upload.single("file")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({ url: `/uploads/${req.file.filename}` });
    });
  }
};
