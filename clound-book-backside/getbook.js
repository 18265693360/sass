const request = require('request')
const fs = require('fs')   //爬取文件
const cheerio = require ('cheerio') //node中的爬虫工具 获取html 中的内容


request.get('https://www.kancloud.cn/tass/es6/458816',(err,data)=>{
    if (err){
        console.log(err);
        return
    }

    //这里使用jQuery语法 类似操作dom元素 node中是不能有dom 但cheerio可以让后端直接获取contnet 就像操作dom
    const $ = cheerio.load(data.body);
    const content = $('.content').text();

    //终端 node getbook.js
    // fs.writeFile('index.html',data.body,(err) =>{
    fs.writeFile('index.html',content,(err) =>{
        if (err){
            console.log(err);
        }
     })
    console.log(data.body);
})