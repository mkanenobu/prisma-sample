import { Router } from "express";
import dayjs from "dayjs";
import { rootHandler } from "./handler/root";
import { usersHandler } from "./handler/user";

const router = Router();

// logging middleware
router.use((req, res, next) => {
  console.log(
    `[INFO] ${dayjs().format("YYYY-MM-DD HH:mm:ss")}, ${req.method} ${
      req.url
    }`
  );
  next();
});

router.get("/", rootHandler);
router.get("/users", usersHandler);

export { router };
