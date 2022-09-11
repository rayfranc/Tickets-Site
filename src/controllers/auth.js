const  bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')

const logIn=(req,res)=>{
res.json({
    'msg':'Log In here'
})
}

const  singUp= async(req,res)=>{
  const {name,lastName,email,password,phone}=req.body
  const role='CLIENT_ROLE'
  const exist= await Usuario.findOne({email})
  if(exist){
      console.log(exist)
      return res.json({
          msg:'El correo ya esta registrado'
      })
  }
  const usuario=new Usuario({name,lastName,email,role,phone})
  const salt =bcrypt.genSaltSync()
 
  usuario.password=bcrypt.hashSync(password,salt)

  try{
  await usuario.save();
  }
  catch(e){
  return res.status(400).json({
  message:'Ha habido un error',
      e
      }
  )
  }
  return res.json(
  {
      message:'El usuario se ha insertado',
      usuario
  })
}

module.exports={
    logIn,
    singUp
}