const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/cloudb-back', {useNewUrlParser: true});

const db = mongoose.connection;
db.once('open',function () {
    console.log('数据库连接成功');
})

module.exports = db