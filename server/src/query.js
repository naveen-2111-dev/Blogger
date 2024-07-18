const { PrismaClient } = require("@prisma/client");

const Prisma = new PrismaClient();

async function createUser(userData) {
  const user = await Prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      password: userData.password,
    },
  });
  return user;
}

module.exports = {
  Prisma,
  createUser,
};
