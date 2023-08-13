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
  const installDeps = `cd ${projectName} && npm install`;
  console.info("---Cloning repository---");
  runCommand(gitClone);
  runCommand(`cd ./${projectName} && rm -rf .git`);
  runCommand("git init");
  console.info("---installing deps---");
  runCommand(installDeps);
} catch (e) {
  console.error(e.message);
  process.exit(-1);
}
