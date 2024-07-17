const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const Port = process.env.PORT

app.listen(Port, () => {    
    console.log('server running on port' , Port)
})