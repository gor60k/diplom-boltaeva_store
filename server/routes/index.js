const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const productRouter = require('./productRouter');
const filterRouter = require('./filterRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/filter', filterRouter);

module.exports = router