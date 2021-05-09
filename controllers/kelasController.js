const model = require('../models/kelasModel')
const guru = require('../models/guruModel')
const namaKelas = require('../models/namaKelasModel');
const kelas = require('../models/kelasModel');
const siswa = require('../models/siswaModel');

exports.setDataKelas = (req,res)=>{

    const data = req.body;
    const id = req.body.id_namakelas;

    namaKelas.getDataById(id,(err,hasil)=>{

        if (err) console.log(err);

        if(hasil.length > 0 ){

            const nama_kelas = hasil[0].nama_kelas;
            data.nama_kelas = nama_kelas;

            model.setData(data,err=>{

                err? 

                console.log(err) :  

                guru.updateDataHasClass([1,data.id_guru],err=>{

                    const infokelas = {
                        nama_kelas,
                        status : 1
                    }

                    err? console.log(err) : 

                    namaKelas.updateNamaKelas([infokelas,id], err=>{

                        err? console.log(err) : res.redirect('/guru/home');
                    })
                });
            })
        }
    })  
}


exports.getDataKelas = (req,res)=>{

    const id = req.session.id_akun;

    guru.getDataById(id,(err,result)=>{

        const idGuru = result[0].id_guru;

        err ? console.log(err) : 

        kelas.getDataById(idGuru, (err, hasil)=>{

            const idKelas = hasil[0].id_kelas;

            err ? console.log(err) : 
            
            siswa.getAllbyClass(idKelas,(err, hasilSiswa)=>{

                req.session.idKelas = idKelas;

                err ? console.log(err) : res.render('guruKelolaKelas', {hasil,hasilSiswa,title:'Kelola'});

            })
            

        })
    

    })


}