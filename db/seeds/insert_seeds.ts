import { PrismaClient } from "@prisma/client";
import { createUserSeeds } from "./01_users";

const prismaClient = new PrismaClient();

createUserSeeds(prismaClient);
