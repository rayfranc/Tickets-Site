

const logIn=(req,res)=>{
res.json({
    'msg':'Log In here'
})
}

const singUp=(req,res)=>{
  res.json({
    'msg':'Sign Up here'
  })
}

module.exports={
    logIn,
    singUp
}