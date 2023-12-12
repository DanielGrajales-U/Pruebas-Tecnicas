require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./database/conection')

const routes = require('./routes/v1/')
  
app.use(cors())
app.use(express.json())
app.use('/', routes)

app.get('/', (req, res) => {
    res.send('Welcom to Drenvio')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log('All Ready on port: ', port)
})