import app from "./app";
 
const PORT = 4000;
const handleListening = () =>
  console.log(`🎧 Listening on port ${PORT}!`);
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlawjdgns10!'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

app.listen(PORT, handleListening);