
module.exports.checkLanguage=function (req,res,next){
  const languages = ["Python", "JavaScript", "C", "C++", "Java"]
  let userLanguage=req.body.language;
  if (languages.includes(userLanguage)){
    next()
  }else{
    res.json({"status":false,"message":"unknown language"})
  }
}

module.exports.replaceCode=function(req,res,next){
  req.body.replaceCode = req.body.UserCode.replace(/\'/g,"\\'")
  next()
}