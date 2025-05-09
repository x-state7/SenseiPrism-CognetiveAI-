// getting the model
const File = require("../models/File")

// local file uplaod handler function
exports.localFileUpload = async (req, res) => {
  try {
    var uploadedFiles = []
    const uploadedData = req.files.file
    if (uploadedData.length > 1) {
      for (let i = 0; i < uploadedData.length; i++) {

        // printing the content of the file
        console.log("File Content-->", uploadedData[i])
        // path to which i want to store the file let path
        let uploadPath = __dirname + "/files/" + Date.now() + `.${uploadedData.name.split('.')[1]}`
        uploadedFiles.push(uploadPath)
        res.filePath = uploadedFiles

        // move function is very important for file upload(add path to the function)
        uploadedData[i].mv(uploadPath, (err) => {
          console.log(err)
        })
      }
    }

    // else if file has one type
    else {
      // for single image
      let uploadPath = __dirname + "/files/" + Date.now() + `.${uploadedData.name.split('.')[1]}`
      uploadedFiles.push(uploadPath)
      res.filePath = uploadedFiles
      uploadedData.mv(uploadPath, (err) => {
        console.log(err)
      })
    }

    // send response
    return res.status(200).json({
      success: true,
      message: "Local file uploaded successfully"
    })
  }
  catch (error) {
    console.log(error)
    return res.status(400).json({
      success: true,
      message: "Failed to upload file locally"
    })
  }
}