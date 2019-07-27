const catagoryModel = require('../model/catagory');
const bookModel = require('../model/book')
// const mongoose = require('mongose')单词错误;
const mongoose = require('mongoose');


//添加目录
async function addCatagory(req,res,next) {
    try {
        const {title, icon} = req.body;
        await catagoryModel.create({
            title,
            icon,
        })
        res.json({
            code:200,
            msg:'添加分类成功'
        })
    }catch (err) {
        next(err)
    }
}

//获取目录
async function getCatagory(req,res,next){
    try {
        const data = await catagoryModel.find()
            .sort({_id: -1})  //倒序
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}


async function addBookToCatagory(req, res, next){
    try {
        const {catagoryId, bookId} = req.body;
        const catagory = await catagoryModel.findOne({
            _id:mongoose.Types.ObjectId(catagoryId)
        });
        const book = await bookModel.findOne({
            _id:mongoose.Types.ObjectId(bookId)
        })
        if (book){
            await  catagory.books.push(book._id);
            await  catagory.save();
            res.json({
                code:200,
                msg:'分类添加书籍成功'
            })
        } else{
            res.json({
                code:400,
                msg:'添加书籍无效，该书籍不存在'
            })
        }
    }catch(err){
        next(err)
    }
}




async function getBookByCatagory(req, res, next){
    try {
         const data = await catagoryModel
             .find()
             .sort({_id: -1})
             // .populate('book'); 注意同model 中的字段名一致
             .populate('books');

        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}






module.exports = {
    addCatagory,
    getCatagory,
    addBookToCatagory,
    getBookByCatagory
}

