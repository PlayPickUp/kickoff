import express, { Request, Response } from "express";
import helmet from "helmet";
import favicon from "serve-favicon";
import path from "path";

const PORT = process.env.PORT || "3000";
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/api/hello", (req: Request, res: Response) =>
  res.json({ message: "Hello, World!" })
);

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`👂 Backend app listening on port ${PORT}!`);
});
