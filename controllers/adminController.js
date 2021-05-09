const model = require('../models/model');


exports.getAkunAll = (req, res)=>{
    
    model.getAll((err,result)=>{

        err ? 
            console.log(err) : req.session.logged ?  
                res.render('adminHome',{result,msg:'',status:'-',title:'Home'}) : res.redirect('/mainLogin');
    })

}

exports.getAkunByID = (req,res)=>{
    
    const id = req.query.id;

     model.getByID(id,(err,result)=>{

        err ? 
            console.log(err) : req.session.logged ?  
                res.render('adminCari',{result,msg:'No Result!'}) : res.redirect('/mainLogin');
        
    })
 
}

exports.setAkun = (req,res)=>{

    const dataUser = req.body

    model.setUser(dataUser , (err,result)=>{

        err ? 
            res.render('adminForm',{result, msg : "Username telah dipakai!" , stats : false, title:'Form'}) : req.session.logged ?  
                res.render('adminForm',{result, msg : "Entry Success!", stats : true, title:'Form'}) : res.redirect('/mainLogin');

    })
}


exports.deleteAkun = (req,res)=>{

    const id = req.params.id;

    model.deleteUser(id,(err,result)=>{

        err ? 
            res.render('adminHome',{result, msg : "Failed to Delete!",status:false,title:'Home'}): req.session.logged ?  
                res.render('adminHome',{result, msg : "Delete Success!",status:true,title:'Home'}) : res.redirect('/mainLogin');

    })

 }

 exports.getAkunUpdateByID = (req,res)=>{
    
    const id = req.params.id;

     model.getByID(id,(err,result)=>{

        err ? 
            console.log(err) : req.session.logged ? 
                res.render('adminUpdate',{result,title:'-'}) : res.redirect('/mainLogin');
    
    })
 
}

exports.updateAkun = (req,res)=>{

    const data = req.body;
    const id = req.body.id_akun;

    model.updateUser([data,id],(err,result)=>{
    
        err ? 
            res.render('adminHome',{result, msg:'Failed to Update!',status:false,title:'Home'}) : req.session.logged ? 
                res.render('adminHome',{result, msg:'Update Success!',status:true,title:'Home'}) : res.redirect('/mainLogin');
           
    })
    
}
