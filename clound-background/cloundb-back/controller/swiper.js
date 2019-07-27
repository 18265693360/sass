const mongoose = require('mongoose');
const swiperModel = require('../model/swiper');


async function addSwiper(req, res, next) {
    try {
       const {title, img, bookId, index = 1} = req.body;
       const swiper = await swiperModel.create({
           title,
           img,
           book: mongoose.Types.ObjectId(bookId),
           index
       });
       res.json({
           code:200,
           msg:'添加轮播图成功'
       })
    }catch (err) {
        next(err)
    }
}


async function getSwiper(req, res, next){
    try {
        let {pn = 1, size = 4} =req.query;
        pn = Number(pn);
        size = Number(size);

        //用let 因为前端传进来的是数字 要把字符串转化为数字   const {pn = 1, size = 1} = req.query;

        const data = await  swiperModel
            //是否显示 1显示 0不给
            .find({status: 1})
            .populate({
                path:'book'
            })
            // .sort({_id: -1, index: 1}) 有先后顺序之分
            // 更新有先后顺序 .sort({index: 1, _id: -1})
            .sort({index: -1, _id: -1})
            .skip((pn - 1)*size)
            .limit(size)
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}


async function updateSwiper(req, res, next){
    try {
        const id = req.params.id;//取得轮播图id
        const{
            bookId,
            status,
            // titles,
            title,
            index
        } = req.body;
        const updateData = await swiperModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        },{
            // book: mongoose.Type.ObjectId(bookId),
            book: mongoose.Types.ObjectId(bookId),
            status,
            title,
            index
        })
        res.json({
            code: 200,
            msg:'更新轮播图成功',
            data:updateData
        })
    }catch (err) {
        next(err)
    }
}


module.exports = {
    addSwiper,
    getSwiper,
    updateSwiper
};

