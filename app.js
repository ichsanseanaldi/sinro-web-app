const { static } = require('express');
const express = require('express');
const app = express();
const akun = require('./routes/adminRoute');
const login = require('./routes/loginRoute');
const guru = require ('./routes/guruRoute');
const kelas = require ('./routes/kelasRoute');
const siswa = require ('./routes/siswaRoute');
const session = require('express-session');


app.use(session({
    secret : '1805420',
    resave: 'true',
    saveUninitialized: true
}))

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use((req, res, next)=> {
//     if (!req.)
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     next();
// });

app.get('/',(req,res)=>{
    res.render('mainLanding',{title:'Home'});
})

app.get('/search',(req,res)=>{
    res.render('mainSearch',{result:'',title:'Search'})
})

app.get('/mainLogin',(req,res)=>{
    res.render('login' , {msg:'',title:'login',stats:'-'});
})

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/mainLogin');
    })
})

app.get('/adminform',(req,res)=>{
    req.session.logged ?  res.render('adminForm',{result:'',msg:'',stats:'',title:'Form'}) : res.redirect('/mainLogin');
})

app.use('/kelas',kelas);

app.use('/guru', guru)

app.use('/admin',akun);

app.use('/login',login);

app.use('/siswa', siswa);

app.use((req,res)=>{

    req.session.logged ?  res.render('404') : res.redirect('/mainLogin');
    
})

app.listen(5000, ()=>{
    console.log('listening..')
})
