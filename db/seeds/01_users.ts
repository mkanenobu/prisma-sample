import { PrismaClient, User } from "@prisma/client";
import dayjs from "dayjs";

const seeds = [
  {
    name: "John",
    email: "john@example.com",
  },
  {
    name: "taro",
    email: "taro@example.com",
  },
  {
    name: "chloe",
    email: "chloe@example.com",
  },
  {
    name: "jack",
    email: "jack@example.com",
    deletedAt: dayjs().subtract(1, "day").toDate(),
  },
];

export const createUserSeeds = (prismaClient: PrismaClient) => {
  seeds.forEach(async (seed) => {
    console.log(`creating user ${seed.name}`);
    await prismaClient.user.create({
      data: seed,
    });
  });
};
