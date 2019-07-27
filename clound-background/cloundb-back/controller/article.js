const mongoose = require('mongoose')
const articleModel = require('../model/article')

//      驼峰啊 粗心
// async function getarticleById(req, res, next) {
async function getArticleById(req, res, next) {
    try {
        const{id} = req.params;

        const data = await articleModel.find({
            titleId:mongoose.Types.ObjectId(id)
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
    getArticleById
}