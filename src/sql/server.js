var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 var mysql = require('mysql');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 // route mặc định
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });

 
 var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dobeemovies'
});
// kết nối vào cơ sở dữ liệu
dbConn.connect();


// Truy xuất tất cả dữ liệu user
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM user_data', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

// Truy xuất user với email
// Gọi API bằng URL  http://127.0.0.1/user/1
/*
*  app.post('/user/email', function (req, res) {
*      let user_email = req.body.email;
*      if (!user_email) {
*       return res.status(400).send({ error: true, message: 'Please provide user_email' });
*      }
*      dbConn.query('SELECT * FROM user_data WHERE Email = ?', user_email, function (error, results, fields) {
*       if (error) throw error;
*
*       if (user_email === results[0].Email) {
*           return res.send({ error: false, data: results[0], message: 'users list.' });
*       } else {
*           return res.send({ error: true, message: 'Email Not Found'})
*       }
*
*      });
*  });
*/

// Thêm user mới
// Gọi API bằng URL :  http://127.0.0.1:3000/add
app.post('/user', function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    if (!name && !email && !password) {
      return res.status(400).send({ error:true, message: 'Please provide user' });
    }
   dbConn.query("INSERT INTO user_data SET ? ", { Name: name, Email: email, Password: password }, function (error, results, fields) {
  if (error) throw error;
    return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});

//  Cập nhật user với id
// Gọi vào API với URL : http://127.0.0.1/user/{id}
app.put('/user', function (req, res) {
    let user_id = req.body.user_id;
    let user = req.body.user;
    if (!user_id || !user) {
      return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }
    dbConn.query("UPDATE user_data SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
     });
});

//  Xóa user
app.delete('/user', function (req, res) {
    let user_id = req.body.user_id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM user_data WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
});

// chỉnh port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;