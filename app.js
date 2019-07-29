const express = require("express");
const sequelize = require('sequelize');
const bodyParser = require("body-parser");

const routes = require(__dirname + '/api/routes/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


routes(app);

// user.findByPk(1).then(user => console.log(user.user_name))
// user.findOne({ where: { user_name: 'thnam' } }).then(user => console.log(user.user_name))

app.listen(3000, function () {
    console.log('Node server running @ http://localhost:3000')
});