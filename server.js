const express = require('express');
const app = express();

const pug = require('pug');

const workhours = require("./middleware/Workhours");


app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', workhours,function(req,res){
    res.render('index', {title:'home page'},);

})
app.get('/contactUs',  workhours,function(req,res){
    res.render('contactUs', {title:'contact Us page'},);

})
app.get('/error' , function(req,res){
    res.render('error', {title:'error page'},);

})
app.get('/ourservices', workhours,function(req,res){
    res.render('ourservices', {title:'our services page'},);

})



const Port=6200 ;
app.listen(Port,error => {
    if (error){
        console.log(error);
    }
    else{
        console.log(`server listening on ${Port}`);
    }
})
