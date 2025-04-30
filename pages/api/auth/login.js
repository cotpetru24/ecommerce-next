import { loginUser } from "../../controllers/authController";

const handle = async (req, res) => {
  if (req.method === "POST") {
    await loginUser(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handle;
