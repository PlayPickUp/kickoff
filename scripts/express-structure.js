const fs = require("fs-extra");
const path = require("path");
const projectRoot = path.dirname(__dirname);
const chalk = require("chalk");

(() => {
  fs.copy(`${projectRoot}/src/views`, `${projectRoot}/dist/views`)
    .then(() =>
      console.log(chalk.green("✨ Successfully copied Express views"))
    )
    .catch(err => console.error(err));
})();
