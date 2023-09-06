const db = require('../db/db.config');

const kelas = function (data) {

    this.nama_kelas = data.nama_kelas;
    this.nama_guru = data.nama_guru;
    this.id_guru = data.id_guru;
    this.id_namakelas = data.id_namakelas;

}

kelas.setData = (data, callback) => {

    const query = 'INSERT INTO kelas SET ?'

    db.query(query, data, (err, rows) => {

        err ? console.log(err) : callback(null, rows);

    })

}


kelas.getData = (callback) => {

    const query = 'SELECT * FROM kelas'

    db.query(query, (err, rows) => {

        err ? console.log(err) : callback(null, rows);

    })

}


kelas.getDataById = (id, callback) => {

    const query = `SELECT * FROM kelas 
                    JOIN data_guru ON kelas.id_guru = data_guru.id_guru 
                    JOIN infokelas ON kelas.id_namakelas = infokelas.id_namakelas
                    WHERE kelas.id_guru = ?`

    db.query(query, id, (err, rows) => {
        err ? console.log(err) : callback(null, rows);
    })


}



module.exports = kelas;