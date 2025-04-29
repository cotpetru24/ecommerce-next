import {
  createUser,
  findUserByEmail,
  hashPassword,
} from "@/services/authService";
import jwt from "jsonwebtoken";

const registerUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await hashPassword(password);

  const user = await createUser(email, hashedPassword);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({
    user: { id: user.id, email: user.email },
    token,
  });
};



const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const existingUser = await findUserByEmail(email);

  if(!existingUser) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const passwordCheck =  await bcrypt.compare(password, existingUser.password);
  if (!passwordCheck) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({id : existingUser.id, role: existingUser.admin}, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    user: { id: existingUser.id, email: existingUser.email },
    token,
  });
};

export {registerUser, loginUser};
