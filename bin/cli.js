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
  const cleanUpCommands = `cd ${projectName} && npm install && rm -rf .git && git init`;
  console.info("---Cloning repository---");
  runCommand(gitClone);
  console.info("---installing deps---");
  runCommand(cleanUpCommands);
} catch (e) {
  console.error(e.message);
  process.exit(-1);
}
