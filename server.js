const express=require("express")
const app=express()
const server_config=require("./configs/server.config")
const db_config=require("./configs/db.config")
const mongoose=require("mongoose")
//middleware
app.use(express.json())

//database connection
mongoose.connect(db_config.DB_URL)
const db=mongoose.connection
db.on("error",()=>{
    console.log("unable to connect to MongoDB")
})
db.once("open",()=>{
    console.log("connected to MongoDB")
})



require("./routes/school.route")(app)
app.listen(server_config.PORT, ()=>{
    console.log("server started at PORT num : ",server_config.PORT)
})