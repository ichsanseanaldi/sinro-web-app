const model = require('../models/guruModel');
const infokelas = require('../models/namaKelasModel');

exports.setDataGuru = (req,res)=>{

    const data = new model(req.body);
    const id = req.body.id_akun;

    model.setData(data,(err)=>{

        err? 

        res.render('guruMainNew',{id,msg:'NIP telah dipakai',stats:false}) : req.session.logged ?
            
           res.redirect('/guru/home') : res.redirect('/mainLogin');

    })

}

exports.getDataGuru = (req,res)=>{

    const id = req.session.id_akun;

    model.getDataById(id,(err,result)=>{

        err?

            console.log(err) : req.session.logged ?
     
            infokelas.getAll((err,listKelas)=>{

                if (err) console.log(err);

                res.render('guruMain', {result,listKelas,title:'Home'})
            })

            : res.redirect('/mainLogin')
    })

}


