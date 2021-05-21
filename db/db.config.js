const mysql = require ('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbsinro'
})

db.connect();

module.exports=db;