const Router = require('express');
const filterController = require('../controllers/filterController');
const router = new Router();

router.get('/', filterController.getAll);

module.exports = router