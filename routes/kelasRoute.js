const express = require('express');
const router = express.Router();
const controller = require('../controllers/kelasController');


router.post('/pilih', controller.setDataKelas);

router.get('/kelola', controller.getDataKelas);

router.get('/addsiswa', (req,res)=>{

    res.render('guruAddSiswa',{req,title:'Kelola',msg:'',stats:true});
    
});

module.exports = router;