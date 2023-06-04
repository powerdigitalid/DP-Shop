import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id, usermail } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: "Id tidak boleh kosong" });
    }
    if (!usermail) {
      return res.status(400).json({ message: "Usermail tidak boleh kosong" });
    }
    if (usermail) {
      const check_user = await prisma.cart.deleteMany({
        where: {
          user_google: usermail
        }
      });
      res.status(200).json(check_user);
    } else if (id) {
      const check_id = await prisma.cart.deleteMany({
        where: {
          id: parseInt(id)
        }
      });
      res.status(200).json(check_id);
    }
  }
  catch (error) {
    res.status(200).json({ message: "Gagal menghapus chart", error: error });
  }
}
