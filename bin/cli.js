#!/usr/bin/env node
const fs = require("fs-extra");
const chalk = require("chalk");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const [, , ...project] = process.argv;

const createDirectory = async () => {
  try {
    await fs.mkdirp(...project);
    console.log(chalk.green("📁  Project directory created successfully!"));
  } catch (err) {
    console.error(err);
  }
};

const navigatetoDirectory = async () => {
  const directory = project;
  try {
    // await fs.promises.opendir(...directory);
    // console.log(dir);
    // exec(`cd ${directory[0]}`);
    // exec("touch test.md")
    exec("git status", { cwd: "/Users/eric.stout/repos/expugrea" });
  } catch (err) {
    console.error(err);
  }
};

async function lsExample() {
  const { stdout, stderr } = await exec("cd hello-world && touch hey.md", {
    cwd: "./"
  });
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
}

(async () => {
  await createDirectory();
  await lsExample();
  // exec("cd hello-world");
  // await navigatetoDirectory();
})();
