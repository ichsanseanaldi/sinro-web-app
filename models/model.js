const db = require ('../db/db.config');

const Akun = function(data){
    this.username = data.username;
    this.password = data.password;
    this.isAdmin = 0;
}

Akun.getAll = (callback)=>{

    const query = 'SELECT * FROM akun_guru'

    db.query(query, (err, rows)=>{
        if(err) throw err;
        callback(null,rows);
    })

}

Akun.getByID = (id,callback)=>{

    const query = ` SELECT * FROM akun_guru WHERE id_akun = ? `

    db.query(query,id, (err, rows)=>{
        if(err) throw err;
        callback(null,rows);
    })

}


Akun.setUser = (data, callback)=>{

    const query = 'INSERT INTO akun_guru SET ?'
    
    db.query(query, data, (err, rows)=>{
        if(err){
            callback(err,null);
        }
        else{
            callback(null,rows);
        }
    })
}


Akun.deleteUser = (id,callback)=>{
    const query = 'DELETE FROM akun_guru WHERE id_akun = ?'


    db.query(query, id, (err,rows)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,rows);
        }
    })

}

Akun.updateUser = (data, callback)=>{
  
    const query = 'UPDATE akun_guru SET ? WHERE id_akun = ?'

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


Akun.getUsername = (data, callback)=>{

    const query = 'SELECT * FROM akun_guru WHERE username = ? AND password = ?';

    db.query(query,data,(err,rows)=>{
        if(err){
            callback(err,null);
        }
        else{
            callback(null,rows);
        }
    })


}

module.exports = Akun;