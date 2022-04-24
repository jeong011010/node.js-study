import app from "./app";
 
const PORT = 4000;
const handleListening = () =>
  console.log(`🎧 Listening on port ${PORT}!`);

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

app.listen(PORT, handleListening);