const del = require("del");
const chalk = require("chalk");

(async () => {
  const deletedPath = await del(["./dist/**/*"]); // eslint-disable-line no-unused-vars

  console.log(chalk.green("🗑  Successfully cleaned the dist directory!"));
})();
