const glob = require("glob");
const path = require("path");
const {exec} = require("child_process");

const projects = [
  "./browsing-gw/",
  "./platform-gw/",
  "./storefront/"
];

const build = () => {
  projects.forEach( (project) => {
    // build project
    console.log("Building", project);
    exec("yarn add puzzle-microfrontends && yarn", { cwd: project });

    // build fragments
    glob(path.resolve(__dirname, "../" + project + "src/fragments/*/*/package.json"), null, (err, files) => {
      files.forEach((file) => {
        const dirName = path.dirname(file);
        console.log("Building", dirName);
        exec("yarn", { cwd: dirName });
      });
    });

  });
};

build();
