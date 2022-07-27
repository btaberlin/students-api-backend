const mongoose = require('mongoose')

const password = require('./password.js')

const connectionString = `mongodb+srv://softwareharddata:${password}@cluster0.umylxkd.mongodb.net/studentdb?retryWrites=true&w=majority`

mongoose.connect(connectionString).then(()=>{
    console.log("Database connected")
}).catch(err =>{
    console.error(err)
})