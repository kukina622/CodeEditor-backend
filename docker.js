let Docker = require("dockerode");
const streams = require("memory-streams");

module.exports.compile = async function (language, UserCode) {
  let docker = new Docker();
  const stdout = new streams.WritableStream();
  const stderr = new streams.WritableStream();

  let compileResult;
  await docker
    .run(
      "code_editor", 
      ["node", "runCode.js"], 
      [stdout, stderr], 
      {
        Tty: false,
        Env: [`language=${language}`, `UserCode=${UserCode}`],
      }
    )
    .then(([res, container]) => {
      compileResult = stdout.toString();
      container.remove();
    });
  return compileResult;
};
