//loading external applications to run the server
const express = require('express');
const app = express();

//server side stuff
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.listen(8080)

//Default page
app.get('/', function(req,res){
    res.render('views/Pages/Login');
    console.log('---- Displaying Login page ----')
});

//Register page
app.get('/Register', function(req, res){
    res.render('Pages/Register')
    console.log('---- Displaying Register page ----')
});

//Attendane Page
app.get('/Attendance', function(req, res){
    res.render('Pages/Mark-Attendance')
    console.log('---- Displaying Attendance page ----')
});

//Profile Page
app.get('/Profile', function(req, res){
    res.render('Pages/Profile')
    console.log('---- Displaying Profile page ----')
});
