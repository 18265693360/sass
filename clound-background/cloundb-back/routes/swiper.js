const {Router} = require('express');
const router = Router();
const {addSwiper, getSwiper, updateSwiper} = require('../controller/swiper');


//往数据库中添加东西 就用post
router.post('/', addSwiper);
// router.post('/', getSwiper);
router.get('/', getSwiper);

         //动态路由ID
// router.post('/id:', updateSwiper);
router.patch('/:id', updateSwiper);

module.exports = router;



