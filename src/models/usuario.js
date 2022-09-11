const {Schema,model}=require('mongoose')

const UsuarioSchema=Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    lastName:{
        type:String,
        required:[true,'El apellido es obligatorio']
    },
    email:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'La  contraseña es obligatoria']
    },
    role:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','GESTOR_ROLE','CLIENT_ROLE'],
        default:'CLIENT_ROLE'
    },
    state:{
        type:Boolean,
        default:true
    },
    phone:{
        type:String,
    },


})

UsuarioSchema.methods.toJSON=function (){

   const {__v,...usuario}= this.toObject()
return usuario
}


module.exports= model('Usuario',UsuarioSchema)