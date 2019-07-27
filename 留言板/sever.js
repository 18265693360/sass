// //载入静态页面
// // 一、什么是EJS EJS是一个JavaScript模板库，用来从JSON数据中生成HTML字符串。
// // PATH环境变量。作用是指定命令搜索路径
// // fs文件夹
// const http = require("http")
// const fs = require("fs")
// const ejs = require("ejs")
// const path = require("path")
// const querystring = require("querystring")//第一次留言
// var port = 3001
//
// //为确保静态页面加载 必须 index.html base.css global.css sever.js在同一个子文件下保存
// var resultPath = path.resolve(__dirname,"index.html")
//
// http.createServer((req,res)=>{
//     switch (req.url){
//         case "/":
//         case "/index":
//             // file就是index.html的绝对路径
//             var datas = fs.readFile(resultPath, "utf8");
//             var blogData = fs.readFile(path.resolve(__dirname,"blog.txt","utf-8"))
//             var posts = JSON.parse(blogData)
//             var
//             res.write(datas);
//             res.end()
//             //显示留言完成
//
//             break;
//
//         //第一次留言
//         case"/save":
//             var str = "" ;
//             req.on("data",function(chunk){
//                 str += chunk;
//             })
//             req.on("end",function(){
//                 var obj = querystring.parse(str)
//                 //post就是一条留言了
//                 var post = {
//                     title:obj.title,
//                     author:obj.author,
//                     content:obj.content,
//                     time:new Date().toLocaleDateString()
//
//                 }
//                 if(fs.existsSync("blog.txt")){
//                     //发表留言完成
//                     var str1 = fs.resdFileSync("blog.txt","utf-8")
//                     var arr = JSON.parse(str1)
//                     //发表留言完成
//                 }else{
//                     var arr = []
//                 }
//                 arr.push(post)
//                 fs.writeFile("blog.txt",JSON.stringify(arr),(err)=>{
//                     if(err) return;
//                     res.writeHead(200,{"content-type":"text/html;chartset=utf-8"})
//                     res.end("<h1>发表成功<a href='/'>返回首页</a> </h1>")
//                 })
//             })
//             break;
//             //第一次留言
//
//         default:
//             //读取图片，css,js
//             var file = path.join(__dirname,req.url);
//             if (fs.existsSync(file) && fs.statSync(file).isFile()){
//                 res.end(fs.readFileSync(file));
//             }
//             break;
//     }
// }).listen(port,()=>{
//     // console.log("服务器已经在"+port+"端口已经运行起来了...");//+拼接
//     console.log(`服务器已经在${port}端口运行起来了...`)
// })