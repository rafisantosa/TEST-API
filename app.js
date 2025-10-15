const express=require('express')
const app= express()
// const conn= require('./config/db')
const userRoutes = require('./routes/userRouter')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use('/user', userRoutes);


app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT} --> http://localhost:${PORT}`)
})