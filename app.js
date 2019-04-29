const express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    static = require('serve-static'),
    expressErrorHandler = require('express-error-handler'),
    expressSession = require('express-session');
var app = express();
var router = express.Router();
const port = 10101;
app.set('port', process.env.PORT || port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/', router);
app.all('/',function(req,res){
    res.redirect('index');
});
router.route('/index').all(function (req, res) {
    res.render('index', {});
});
http.createServer(app).listen(app.get('port'),function(){
    console.log('server start : '+app.get('port'));
});