import jwt from 'jsonwebtoken';

const verifyAdmin = (req) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized: No token provided");
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== "admin") {
    throw new Error("Forbidden: Admins only");
  }

  return decoded;
};

export {verifyAdmin};