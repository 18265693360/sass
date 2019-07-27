//request-promise 是根据promise 封装的 和 request 功能差别不大
const rq = require('request-promise');
const cheerio = require('cheerio');
const bookModel = require('../model/book')
const titleModel = require('../model/title')
const articleModel = require('../model/article')


async  function getBook(req,res,next) {
    try {  //try catch 错误处理
        const {url,img,author,title} =req.body;
        const data = await rq.get(url);
        const $ = cheerio.load(data);
        let desc;
        let baseUrl;
        desc = $('meta[name = "description"]').attr('content')
        const book = await  bookModel.create({
            title,
            img,
            author,
            desc
        })
        let titleArrUrl = [];
        let titleText = [];
        const titleEle = $('.catalog a');
        let titleArr = url.split('/'); //字符串转数组
        titleArr.pop (); //去除最后一项
        baseUrl = titleArr.join('/') + '/' //数组转字符串

        titleEle.each((index,item) =>{ //得到所有目录网址
            titleArrUrl.push(
                baseUrl + $(item).attr('href')
            )
            titleText.push($(item).text())
        })

        //开始请求
        for (let i = 0; i< titleArrUrl.length; i++){
            const item = titleArrUrl[i];
            const index = i;
            // console.log((item));
            const articleData = await rq.get(item);
            const $ = cheerio.load(articleData);
            const content = $('.content').text();

            const title = await titleModel.create({
                bookId:book._id,
                title:titleText[index],
                index,
                total:titleArrUrl.length
            })

            // const article = await articleModel.created({
            const article = await articleModel.create({
                bookId: book._id,
                content,
                index,
                titleId:title._id
            })
        }
        //for 循环结束 才可以执行
        res.json({
            code:200,
            msg:'爬取成功'
        })
    }catch (err) {
        next(err)
    }

    /*
    * 第一步：请求书籍的网址
    * 第二步： 拿到书的描述 书的标题 在book集合中创建一条书籍记录
    *
    * 第三步： 拿到目录，根据目录链接，去请求每一篇文章的内容 存储到目录和文章中
    *
    * 第四部： 爬取完成
    * */
}


async function getAllBook (req, res, next){
    try {
        const data = await  bookModel
            .find()
        console.log(1);
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}

async function getBookById (req, res, next){
    try {
        const{id} = req.params;
        const data = await bookModel.findById(id);
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}




module.exports = {
    getBook,
    getAllBook,
    getBookById,
};

