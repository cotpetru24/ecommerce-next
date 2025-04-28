import { registerUser } from "@/controllers/authController";

const handler= async(req, res)=> {
  if (req.method === "POST") {
    await registerUser(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;