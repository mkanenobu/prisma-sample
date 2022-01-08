import { PrismaPromise, User } from "@prisma/client";
import { prismaClient } from "../db";
import { pagingQuery } from "./helper/paging";

export class Users {
  public static notDeleted = { deletedAt: null };

  public static getUser = async (id: number): Promise<User | null> => {
    const res = await prismaClient.user.findFirst({
      where: {
        id,
        ...Users.notDeleted,
      },
    });
    return res;
  };

  public static getUsers = (
    limit: number = 10,
    offset: number = 0
  ): PrismaPromise<User[]> => {
    return prismaClient.user.findMany({
      ...pagingQuery(limit, offset),
      where: Users.notDeleted,
    });
  };
}
