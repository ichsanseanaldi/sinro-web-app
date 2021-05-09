const express = require('express');
const router = express.Router();
const controller = require('../controllers/siswaController');


router.post('/', controller.setSiswa);

router.get('/search',controller.getSiswaNis);

router.get('/addNilai/:id', controller.getSiswaById);

router.post('/insertNilai', controller.setNilaiSiswa);

module.exports = router;
