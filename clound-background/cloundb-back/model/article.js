const mongooes = require('mongoose')

const article = new mongooes.Schema({
    bookId:{
        type:mongooes.SchemaTypes.ObjectId,
        ref:'book'
    },
    content:String,
    index:{
        type:Number,
        default:1
    },
    titleId:{
        type:mongooes.SchemaTypes.ObjectId,
        ref:'title'
    },
// },{versionKey: falsem错了, timestamp:{createdAt:'createTime',
},{versionKey: false, timestamp:{createdAt:'createTime',
    updatedAt:'updatetime'}})

module.exports = mongooes.model('article',article)