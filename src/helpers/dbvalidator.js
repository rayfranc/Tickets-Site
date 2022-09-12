const Usuario =require('../models/usuario')



 const existeCorreo=async(email='')=>{
    const existe= await Usuario.findOne({email})
    if(existe){
        throw new Error('El correo ya esta registrado')
    }
    }


    module.exports={
        existeCorreo
    }