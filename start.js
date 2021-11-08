const ejs = require('ejs');;
const express = require('express')

//Init the app (create the express app);
const app = express();

//Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//Public folder setup
app.use(express.static(__dirname + '/public'));

//index route
app.get('/', (req, res) => {
    res.render('index');
});

//to keep nodejs app running indefinitely on heroku
var http = require("http");
// setInterval(function () {
//     http.get("http://matt-miller-personal-website.herokuapp.com");
// }, 600000); // runs every 10 minutes

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});


