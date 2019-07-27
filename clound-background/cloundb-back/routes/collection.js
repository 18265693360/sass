const {Router} = require('express');
const router = Router();

const {
    addCollection,
    getCollection,
    removeCollection,
                 } = require('../controller/collection')
const auth = require('../controller/auth');

router.post('/',auth,addCollection);
router.post('/',auth,getCollection);
     //动态路由
router.post('/:id',auth,removeCollection);


module.exports = router;





