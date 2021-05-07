const { exec } = require("child_process");
const command = "python3 main.py";

module.exports =function () {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(0);
      console.log(stderr);
    } else {
      console.log(1);
      console.log(stdout);
    }
  });
};