const { exec } = require("child_process");
const command = "gcc -o main.exe main.c && ./main.exe";

module.exports = function (options) {
  exec(command,options,(error, stdout, stderr) => {
    if (error) {
      console.log(0);
      console.log(stderr);
    } else {
      console.log(1);
      console.log(stdout);
    }
  });
};
