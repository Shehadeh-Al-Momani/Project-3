const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  if(!req.headers.authorization){
    res.json('you dont give us jwt please login')
  }
  console.log('REQ: ',req.headers.authorization)
  const checkThisToken=req.headers.authorization.split(' ')[1]
  // const token=req.headers.authorization.slice(7)
  
  //          check token and secret
  jwt.verify(checkThisToken,process.env.SECRET,(err,result)=>{
    if(err) res.json(err)
    console.log('RESULT: ',result)
    // Extra => check if the token expire or not
    // Extra => check if the current user allowed to do the next functionality (CRUD) 
    next()
  })
  // if(){

};
