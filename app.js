const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = 5120;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'posqr-code'
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
});

app.listen(port, () => {
    console.log(`=======  Server is running on port ${port} ======= `);
});

require('./routes')(app)