//路由文件
const express = require('express');

//路由的实例
const router = express.Router();
const { index, update, create, remove } = require('../controllers/postControllers');


router.get('/', index);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;