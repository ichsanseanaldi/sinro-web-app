const mysql = require ('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbsinro'
})

db.connect(function(err){
    if (err) throw err;
    console.log('connected');
})

module.exports=db;