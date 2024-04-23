const express = require("express")
const mysql = require("mysql")

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
  
  // Example route to test the connection
  app.get('/test-connection', (req, res) => {
    connection.query('SELECT 1 + 1 AS result', function (error, results, fields) {
      if (error) {
        throw error;
      }
      res.json({ message: 'Connection successful', result: results[0].result });
    });
  });
  

app.listen(8000, () => {
    console.log('Server started on port 8000');
  });