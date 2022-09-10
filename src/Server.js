const express=require('express')

const PORT=process.env.PORT



class Server{

    constructor(){
    this.app=express()
    this.Middlewares()
    this.Routes()
    this.Listen(PORT)
    }
    
    Routes(){
        this.app.use('/auth',require('./routes/auth'))
        }
    

Middlewares(){
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.json())
}

Listen(port){
    
    this.app.listen(port,()=>console.log(`Server on port ${port} `))
}

}

module.exports=Server