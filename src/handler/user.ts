import { RequestHandler } from "express";
import { Users } from "../repository/user";

export const usersHandler: RequestHandler = async (req, res) => {
  const users = await Users.getUsers();
  res.json({ users });
};

export const userHandler: RequestHandler = async (req, res) => {
  const user = await Users.getUser(parseInt(req.params.userId, 10));
  res.json({ user });
};
