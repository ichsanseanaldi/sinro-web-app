const model = require ('../models/siswaModel');
const rapor = require ('../models/raporModel');

exports.setSiswa = (req,res)=>{

    rapor.setDataPlaceholder((err,resultrapor)=>{

        const data = req.body;

        data.id_rapor = resultrapor.insertId;

        err ? console.log(err): 

        model.setData(data,(err)=>{
    
            err ? res.render('guruAddSiswa',{req,title:'Kelola',msg:'NIS telah dipakai!',stats:false}): res.redirect('/kelas/kelola');
    
        })
    })

}


exports.setNilaiSiswa = (req,res)=>{

    const data = req.body;
    const id = req.body.id_rapor;


    rapor.updateData([data,id],(err)=>{

        err? console.log(err) : 

        model.updateHasNilai([1,id], (err)=>{

            err ? console.log(err) : res.redirect('/kelas/kelola')

        })

    })

}

exports.getSiswaNis = (req,res)=>{

    const nis = req.query.nis;

    model.getDataByNis(nis,(err,result)=>{

            err? console.log(err) : res.render('mainSearch', {result,title:'Search'});
    })

}

exports.getSiswaById = (req,res)=>{


    const id =req.params.id;


    model.getDataById(id,(err,result)=>{


        err? console.log(err) : res.render('guruAddNilai', {result,title:'Kelola'});

    })

    


}