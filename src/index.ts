import express from "express";
import router from "./routes/index";
import path from "path";

const app = express();
const PORT: number | string = process.env.port || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(PORT, () => console.log(`Listing on ${PORT}`));
