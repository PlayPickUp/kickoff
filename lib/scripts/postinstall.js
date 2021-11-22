const { exec } = require("child_process");
const fs = require("fs");

if (!fs.existsSync("./.husky/pre-commit")) {
  exec(
    'husky install && npx husky add .husky/pre-commit "yarn test" && npx husky add .husky/pre-push "yarn test"'
  );
  console.log("husky git hooks created");
} else {
  console.log("husky git hooks already present");
}
