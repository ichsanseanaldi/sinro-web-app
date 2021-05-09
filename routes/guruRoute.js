const express = require('express');
const router = express.Router();
const controller = require('../controllers/guruController');

router.post('/', controller.setDataGuru);

router.get('/home' , controller.getDataGuru);

router.get('/newcomers' , (req,res)=>{

    const id = req.session.id_akun;

    res.render('guruMainNew', {id,stats:true,msg:''})

});

module.exports = router;