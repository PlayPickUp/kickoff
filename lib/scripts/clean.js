const del = require("del");
const chalk = require("chalk");

(async () => {
  console.log(chalk.yellow("🧹 Cleaning dist files..."));
  try {
    await del(["dist"]);
    console.log(chalk.green("🧼 /dist files have been cleaned!"));
    process.exit(0);
  } catch (err) {
    console.error(err);
    console.error("🙈 Something went wrong when cleaning the /dist files!");
    process.exit(1);
  }
})();
