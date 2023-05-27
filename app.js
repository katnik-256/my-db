//console.log("hello world");
const express = require('express');
const path =require('path');
const mysql = require('mysql');
const { connect } = require('http2');
const { create } = require('domain');

//initiating app
const app = express();
const port = 5000
//load engine
//app.use('/static', express.static(path.join(__dirname, 'public')));
//home route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.css'));
});
//start server
app.listen(port, () => {
    console.log(`server is running on port ${5000}`)
  });

//creating a database
// app.get('/Create db', (req,res)=>{
//   let sql= 'CREATE DATABASE Shool'
//   db.query(sql,(err, result)=>{
//     if (err) throw err
//     console.log('result');
//     res.send ('Data Base is Created');

//   });

// });

  //connecting database
  const school = mysql.createConnection({
    host: "localhost",
    user: "katnik256",
    database: "School",
    //database:"school",
  });
  
  school.connect(function(err) {
    if (err) throw err;
    console.log("data base is Connected!");

    
    
  });
  
  //inserting a record
  //  const sql = "INSERT INTO student (idNumber, firstName,lastName,Religion,class,sportsHouse,sex) VALUES ('23', 'paul','wasswa','catholic','s5','Rwenzori','male')";
  //  school.query(sql, function (err, result) {
  //    if (err) throw err;
  //    console.log("1 record inserted");
  //  });
  