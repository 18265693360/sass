//必备引入
const {Router} = require('express');
const router = Router();

//引入要引入的新的controller 文件
const {sendMsg} = require('../controller/msg')

router.post('/',sendMsg)

module.exports = router;


