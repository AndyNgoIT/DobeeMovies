
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'dobeemovies'
});

const server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('start');
});

connection.connect( (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('connected');
    }
});

app.get('/users', (req, res) => {
    connection.query('select * from user_data', (error, results) => {
        if (error) throw error;

        res.send(results);
    });
});


app.get('/comments', (req, res) => {
    connection.query('select * from comments', (error, results) => {
        if (error) throw error;

        res.send(results);
    });
});

app.post('/comments', (req, res) => {
    var data = {
        Name: req.body.Name,
        comment: req.body.comment
    }
    connection.query('INSERT INTO `comments`(`ID`, `Name`, `Email`, `comment`) VALUES ?', data, (err, results) => {
        if (err) throw err;

        res.send({
            id: 3,
            Name: req.body.Name,
            comment: req.body.comment
        });
    });
});

