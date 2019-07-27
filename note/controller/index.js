// 主要路由文件

const Router = require("express");
const router = Router();

const userRoutes = require("./user");
const articleRoutes = require("./article");
const categoryRoutes = require("./category");


router.use('/user', userRoutes);
router.use('/article', articleRoutes);
router.use('/category', categoryRoutes);
module.exports = router;