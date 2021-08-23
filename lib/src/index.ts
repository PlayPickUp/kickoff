import express from "express";
import router from "./routes/index";
import bodyParser from "body-parser";
import path from "path";

const NODE_ENV = process.env.NODE_ENV;

const app = express();
const PORT = process.env.PORT || 3000;

if (NODE_ENV === "development") {
  const projectRoot = path.dirname(__dirname);
  const webpack = require("webpack");
  const webpackConfig = require("../webpack.dev");
  const compiler = webpack(webpackConfig);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(express.static(`${projectRoot}/dist/public`));
  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use(express.static(__dirname + "/public"));
}

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () =>
  console.log(`⚡ Server listening on http://localhost:${PORT}`)
);
