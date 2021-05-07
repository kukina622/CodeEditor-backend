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

switch (args["language"]) {
  case "C":
    lang_c()
    break;
  case "C++":
    lang_cpp()
    break;
  case "Java":
    lang_java()
    break;
  case "JavaScript":
    lang_js()
    break;
  case "Python":
    lang_py()
    break;
}