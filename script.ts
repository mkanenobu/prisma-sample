import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Prisma makes databases easy",
  //     author: {
  //       connect: { email: "sarah@prisma.io" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
