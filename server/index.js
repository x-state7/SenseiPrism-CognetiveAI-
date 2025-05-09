// app creation
const express = require("express")
const app = express()

// find port
require("dotenv").config()
const PORT = process.env.PORT || 3000

// middleware add on
app.use(express.json())

// also adding a file uploader middleware
const fileUpload = require("express-fileupload")
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))

// DB Connection
const db = require("./config/database")
db.connect()

// api route mounting
const Upload = require("./routes/FileUpload")
app.use('/api/v1/upload', Upload)

// activating the server
app.listen(PORT, () => {
  console.log(`App is Running at PORT ${PORT}`)
})