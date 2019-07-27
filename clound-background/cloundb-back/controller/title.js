// 引入模型  去router/title  再去主路由引入
const title = require('../model/title');
const mongoose = require('mongoose');

async function getTitle(req, res, next) {
    try {
        const {bookId} = req.query; //prams req 两个get请求
        const data = await title.find({
            bookId: mongoose.Types.ObjectId(bookId)
        })
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }

}

module.exports = {
    getTitle
};

