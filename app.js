const express = require("express");
var app = express();
var upload = require("express-fileupload");

app.use(upload()); // configure middleware

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", function (req, res) {
  console.log(req.files);
  if (req.files.upfile) {
    var file = req.files.upfile,
      name = "image.jpg";
    var uploadpath = __dirname + "/uploads/" + name;
    file.mv(uploadpath, function (err) {
      console.log("File Uploaded", name);
      res.sendFile(__dirname+"/mobilenet.html")
    });
  }
});

app.get("/uploads/image.jpg",(req,res)=>{
  res.sendFile(__dirname+"/uploads/image.jpg")
});

app.listen(3000 , (req,res)=>{
  console.log("server started on port : 3000");
});
