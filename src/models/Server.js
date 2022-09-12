const express=require('express')
const cors=require('cors')
const {dbConnection}=require('../db/configdb')
const PORT=process.env.PORT



class Server{

    constructor(){
    this.app=express()
    this.DbConnect()
    this.Middlewares()
    this.Routes()
    this.Listen(PORT)
    }
    


    async DbConnect(){
   await dbConnection()
    }

    Routes(){
        this.app.use('/auth',require('../routes/auth'))
        
        }
    

Middlewares(){
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.json())
    this.app.use(cors())
}

Listen(port){
    
    this.app.listen(port,()=>console.log(`Server on port ${port} `))
}

}

module.exports=Server