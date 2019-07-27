// var http = require("http")
// var fs = require("fs")
// var path = require("fs")
// var ejs = require("ejs")
// var querystring = require("querystring")
//
//
// var server = http.createServer(function(req,res){
//     var realUrl = "http://" + req.headers.host + req.url//获取完整路由
//     var urlObj = url.parse(realUrl)//将路由转化为对象，对路由中的pathname元素进行操作
//     switch(url.pathname){
//         case "/":
//             var arr = []
//             if(fs.existsSync(filename)){
//          arr = require("./data.json")
//         }
//             ejs.renderFile("index.html",{msg:arr},function(err,html){//读取表单中数据
//                 if (err) throw err
//                 res.end(html)
//             })
//             break
//         case"/publish":
//             var str = "" +
//                 req.on("data",function(chunk){
//                     str += chunk
//                 })
//             req.on("end",function(){
//                 var msg = querystring.parse(str)//将获取的全部字符串转化为对象
//                 msg.time = new Data().toLocaleString()
//                 var arr = []
//                 if(fs.existsSync("data.json")){//判断是否存在data.json对象
//                     arr = require("./data.json")
//                 }
//                 arr.unshift(msg)//对数组中心的对象进行操作
//
//                 fs.writeFile("data.json",JSON.string(arr),"utf8",function(err){
//                     if(err) throw err
//                     res.end("<a href='/'>点击进入首页面<a>")
//                 })
//             })
//             break
//         default:
//                 var filename = path.join(__dirname,urlObj.pathname)
//             if(fs.existsSync(filename)){
//                 fs.readFile(filename,function(err,data){
//                     if(err)throw err
//                     res.end(data)
//                 })
//             }else{
//                 res.end()
//             }
//             break
//     }
// }).listen(3011)
