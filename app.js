let express = require("express");
let docker = require("./docker.js");
let middleware = require("./middleware.js");
let app = express();

app.use(express.json());

app.use("/compiler",middleware.checkLanguage)
// app.use("/compiler",middleware.replaceCode)

app.post("/compiler", async(req, res) => {
  let language = req.body.language;
  let UserCode = req.body.UserCode;
  let UserInput= req.body.UserInput;
  let compileResult = await docker.compile(language,UserCode,UserInput)
  res.json({"status":true,"compileResult":compileResult})
});

app.listen(3000, () => {
  console.log("start listening 3000 port");
});
