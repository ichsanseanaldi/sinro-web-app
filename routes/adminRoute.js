const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/home', controller.getAkunAll );

router.get('/search', controller.getAkunByID );

router.post('/', controller.setAkun);

router.get('/delete/:id',controller.deleteAkun);

router.get('/update/:id',controller.getAkunUpdateByID);

router.post('/u',controller.updateAkun)

module.exports = router;