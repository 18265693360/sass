const {Router} = require('express');

// const router = Routre() 错了;   没高亮就是错了
const router = Router();

const {getBook,
       getBookById,
       getAllBook,
       } = require('../controller/book')

router.post('/',getBook);
router.get('/allBook',getAllBook);
//顺序就是要这样先爬取书  再搞动态路由
router.get('/:id',getBookById);


module.exports = router;
