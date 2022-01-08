import { RequestHandler } from "express";
import { Users } from "../repository/user";

export const usersHandler: RequestHandler = async (req, res) => {
  const users = await Users.getUsers();
  res.json({ users });
};
