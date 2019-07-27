const http = require("http")
const fs = require("fs")
const path = require("path")

var resultPath = path.resolve(__dirname,"./01test.html")

http.createServer(function(req,res){
    fs.readFile(resultPath ,function(err,data){
        if (err){
            console.log(err)
        } else{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write(data)
            res.end()
        }
    })
}).listen(3010)