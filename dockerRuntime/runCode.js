let fs = require("fs");

let lang_c=require("./lang/lang_c.js")
let lang_cpp=require("./lang/lang_cpp.js")
let lang_java=require("./lang/lang_java.js")
let lang_js=require("./lang/lang_js.js")
let lang_py=require("./lang/lang_py.js")

const args = process.env;
let extension;
switch (args["language"]) {
  case "C":
    extension = "c";
    break;
  case "C++":
    extension = "cpp";
    break;
  case "Java":
    extension = "java";
    break;
  case "JavaScript":
    extension = "js";
    break;
  case "Python":
    extension = "py";
    break;
}

fs.writeFileSync(`main.${extension}`, args["UserCode"]);
fs.writeFileSync(`input.txt`, args["UserInput"]);

let runOptions={
  timeout:5000
}

switch (args["language"]) {
  case "C":
    lang_c(runOptions)
    break;
  case "C++":
    lang_cpp(runOptions)
    break;
  case "Java":
    lang_java(runOptions)
    break;
  case "JavaScript":
    lang_js(runOptions)
    break;
  case "Python":
    lang_py(runOptions)
    break;
}