const db = require ('../db/db.config');

const rapor = function (){
    this.nilai_mtk = data.nilai_mtk;
    this.nilai_olahraga = data.nilai_olahraga;
}


rapor.setDataPlaceholder = (callback)=>{

    const query = 'INSERT INTO rapor (nilai_mtk,nilai_olahraga) VALUES ("-","-")'

    db.query(query,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })

}

rapor.setData = (callback)=>{

    const query = 'INSERT INTO rapor SET ?'

    db.query(query,data,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })

}



rapor.updateData = (data,callback)=>{

    const query = 'UPDATE rapor SET ? WHERE id_rapor = ?'

    db.query(query,data,(err,rows)=>{
        err ? console.log(err) : callback(null,rows);
    })


}

module.exports = rapor;