const express = require("express");
var app = express();
const fs = require("fs");
var upload = require("express-fileupload");

app.use(upload()); // configure middleware

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/routes/index.html");
});
function clean_up(){
  const path = '/images/image.jpg';
  fs.unlink(path , ()=>{});
}
app.post("/upload", function (req, res) {
  console.log(req.files);
  if (req.files.upfile) {
    var file = req.files.upfile,
      name = "image.jpg";
    var uploadpath = __dirname + "/images/" + name;
    file.mv(uploadpath, function (err) {
      console.log("File Uploaded", name);
      res.sendFile(__dirname+"/routes/mobilenet.html");
      clean_up();
    });
  }
});

app.get("/images/image.jpg",(req,res)=>{
  res.sendFile(__dirname+"/images/image.jpg")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT , (req,res)=>{
  console.log("server started on port : 3000");
});
