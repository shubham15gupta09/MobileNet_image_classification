const express = require("express");
const multer = require('multer');
const app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/routes/upload.html');
});
app.post('/upload',function(req,res){  
        res.sendFile(__dirname + '/routes/mobilenet.html');
});  
app.get('/images/truck.jpg',function(req,res) {
    res.sendFile(__dirname + '/images/truck.jpg');   
})

app.listen(process.env.PORT || 4000; , "localhost" , (req , res)=>{
    console.log("server started on port 3000");
});
