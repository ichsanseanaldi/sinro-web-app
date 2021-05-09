const db = require('../db/db.config')


const guru = function(data){

    this.nip = data.nip;
    this.nama = data.nama;
    this.hasClass = 0;
    this.id_akun = data.id_akun;

}

guru.getDataById = (id,callback)=>{

    const query = 'SELECT * FROM data_guru \
                    JOIN akun_guru \
                    ON data_guru.id_akun = akun_guru.id_akun \
                    WHERE data_guru.id_akun =?';

    db.query(query,id,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })

}

guru.setData = (data, callback)=>{

    const query = 'INSERT INTO data_guru SET ?'

    db.query(query, data, (err,rows)=>{
        err ? callback(err,null): callback(null,rows);
    })

}


guru.updateDataHasClass = (data,callback)=>{

    const query = 'UPDATE data_guru SET hasClass = ? WHERE id_guru = ?'

    db.query(query, data,(err,rows)=>{

        err? console.log(err) : callback(null,rows);

    })


}


module.exports = guru;