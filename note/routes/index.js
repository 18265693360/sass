var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */

router.get("/",(req,res)=>{
  console.log(o);
  res.sendFile(path.join(__dirname,"../public/page/index.html"))
});

router.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/page/write.html"))
});

router.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/page/content.html"))
});




module.exports = router;
