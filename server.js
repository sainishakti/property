const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT
// CORS Policy
app.use(cors())

// Database Connection
require("./config/config.js")

// JSON
app.use('/uploads',express.static('uploads'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Load Routes

require("./router/userRouter.js")(app)
require("./router/sellRouter.js")(app)
require("./router/adminRouter")(app)



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})