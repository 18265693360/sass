// 重点掌握
// （1）针对应用级别的路由
var express = require('express');
var router = express.Router();
const app = express()


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get("/",function (req,res) {
    res.send("<h1>我是首页</h1>")
})
app.get("/login",function (req,res) {
  res.send("<h1>我是登录页面</h1>>")
})


module.exports = router;
