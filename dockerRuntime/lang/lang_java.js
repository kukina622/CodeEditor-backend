const { exec } = require('child_process');
const command = "java main.java";

module.exports = function () {
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
