const express = require("express")
const mysql = require("mysql")
const cookieParser = require("cookie-parser")

const app = express()
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'campusride'
  });
  
  // Connect to the database
  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database');
  });

  app.use(express.json());
  app.use(cookieParser());
  

  

app.listen(8000, () => {
    console.log('Server started on port 8000');
});