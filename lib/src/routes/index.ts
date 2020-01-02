import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.render("index", {
    title: "EXPUGREA!!!!",
    props: { message: "Hello, Expugrea!" },
  })
);

export default router;
