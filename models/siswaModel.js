const db = require ('../db/db.config');

const siswa = function(data){

    this.nis = data.nis;
    this.nama_siswa = data.nama_siswa;
    this.hasNilai = 0;
    this.id_kelas = data.id_kelas;

}


siswa.getAllbyClass = (id,callback)=>{

    const query = 'SELECT * FROM siswa JOIN kelas ON siswa.id_kelas = kelas.id_kelas WHERE siswa.id_kelas = ?'

    db.query(query,id, (err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })


}


siswa.setData = (data,callback)=>{

    const query = 'INSERT INTO siswa SET ?'


    db.query(query,data,(err,rows)=>{

        err ? callback(err,null) : callback(null,rows);

    })


}

siswa.getDataByNis = (nis,callback)=>{

    const query = `SELECT * FROM siswa 
                    JOIN kelas ON siswa.id_kelas = kelas.id_kelas
                    JOIN rapor ON siswa.id_rapor = rapor.id_rapor
                    WHERE siswa.nis = ?`

    db.query(query,nis,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })

}


siswa.getDataById = (id,callback)=>{

    const query = `SELECT * FROM siswa 
                    JOIN kelas ON siswa.id_kelas = kelas.id_kelas
                    JOIN rapor ON siswa.id_rapor = rapor.id_rapor
                    WHERE siswa.id_siswa = ?`

    db.query(query,id,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })

}


siswa.updateHasNilai = (data,callback)=>{

    const query = 'UPDATE siswa SET hasNilai = ? WHERE id_rapor = ?'

    db.query(query,data,(err,rows)=>{

        err? console.log(err) : callback(null,rows);

    })


}


module.exports = siswa;