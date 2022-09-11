const {Router}=require('express');
const {check}=require('express-validator')
const {logIn,singUp}=require('../controllers/auth')
const {validarCampos}=require('../middlewares/validar_campos')
const {existeCorreo}=require('../helpers/dbvalidator')
const router=Router()

router.get('/login',logIn);

router.post('/signup',[
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("name", "El nombre no puede ser un numero").isString(),
    check("lastName", "El apellido es obligatorio").not().isEmpty(),
    check("lastName", "El apellido no puede ser un numero").isString(),
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(existeCorreo),
    check("password", "El password deve tener al menos 6 caracteres").isLength({
      min: 6,
    }),
    check(
      "password",
      "El password es muy debil"
    ).isStrongPassword(),
    check('phone',"El telefono no es valido").isMobilePhone(),
    validarCampos,
],singUp)






module.exports=router