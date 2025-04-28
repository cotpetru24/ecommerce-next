import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

 const createUser = async (email, password) => {
  return prisma.user.create({ data: { email, password } });
};

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

export { createUser, findUserByEmail, hashPassword };
