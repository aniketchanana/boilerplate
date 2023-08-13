#!/usr/bin/env node
const { execSync } = require("child_process");
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    throw e;
  }
};

try {
  const projectName = process.argv[2];
  if (!projectName) {
    throw Error("Please give some project name");
  }
  const gitClone = `git clone https://github.com/aniketchanana/${projectName}`;
  runCommand(gitClone);
  runCommand(`cd ${projectName} && npm install`);
  runCommand(`cd ${projectName} && rm -rf .git`);
  runCommand(`cd ${projectName} && git init`);
} catch (e) {
  console.error(e.message);
  process.exit(-1);
}
