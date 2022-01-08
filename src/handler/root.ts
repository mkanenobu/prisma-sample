import { RequestHandler } from "express";

export const rootHandler: RequestHandler = (req, res) => {
  res.json({ res: "Hello, World!" });
};
