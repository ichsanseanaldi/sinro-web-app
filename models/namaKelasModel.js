const db = require('../db/db.config');


const namaKelas = function(data){

    this.nama_kelas = data.nama_kelas
    this.status = data.status
    
}


namaKelas.getDataById = (id,callback)=>{

    const query = ` SELECT * FROM infokelas WHERE id_namakelas = ? `

    db.query(query,id, (err, rows)=>{
        if(err) throw err;
        callback(null,rows);
    })

}

namaKelas.getAll = (callback)=>{

    const query = 'SELECT * FROM infokelas'

    db.query(query, (err, rows)=>{
        if(err) throw err;
        callback(null,rows);
    })

}


namaKelas.updateNamaKelas = (data, callback)=>{
  
    const query = 'UPDATE infokelas SET ? WHERE id_namakelas = ?'

    db.query(query,data,(err,rows)=>{
        if(err){
            console.log(err,rows);
            callback(err,null);
        }
        else{
            callback(null,rows);
        } 
    })

}

module.exports = namaKelas;