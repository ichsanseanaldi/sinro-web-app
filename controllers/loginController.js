const model = require('../models/model');
const guru = require('../models/guruModel');

exports.checkLogin = (req,res)=>{

    const {username , password} = req.body;

    if(username && password){

        model.getUsername([username,password],(err,result)=>{
        
            if(result.length>0){

                if(!req.session.logged){

                    req.session.logged = true;
                    req.session.username = username;
                    req.session.id_akun = result[0].id_akun;
                    req.session.isAdmin = result[0].isAdmin;

                    result[0].isAdmin === 1 ?  
                
                        res.redirect('/admin/home')  : 
                        
                        guru.getDataById(result[0].id_akun,(err,results)=>{

                            if(results.length>0){
                               res.redirect('/guru/home');
                            }
                            else{
                               res.redirect('/guru/newcomers');
                            }

                        });

                }
                else{
                    res.redirect('/mainLogin');
                }

                
            }
            else{
                res.render('login',{msg:'Wrong Username or Password! ',title:'',stats:false})
            }
            
        })
    }
    else{
        res.render('login',{msg:'Please Fill Available Fields!',stats:true})
     }


}