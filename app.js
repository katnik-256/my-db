//console.log("hello world");
const express = require('express');
const path =require('path');
const mysql = require('mysql');
const { connect } = require('http2');

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




  //connecting database
  const school = mysql.createConnection({
    host: "localhost",
    user: "katnik",
    password: "quadratic965",
    database:"school",
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
  