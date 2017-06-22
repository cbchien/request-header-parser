//basic imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors =require('cors');
var useragent = require('express-useragent');
var url = require('url-parse');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
 
//api url

var api = '/whoami' ; 

app.get('/', function(req, res, next){
 // console.log('working');
  var language = req.acceptsLanguages();
  var os = req.useragent['os'];
  var browser = req.useragent['browser']
  var ip = req.ip
  var test = req.useragent
  
  res.json({'ipaddress': ip,
           'language': language[0],
           'os': os,
           'browser': browser,
           // 'test': test
           });
});

app.get(api, function(req, res, next){
 // console.log('working');
  var language = req.acceptsLanguages();
  var os = req.useragent['os'];
  var browser = req.useragent['browser']
  var ip = req.ip
  var test = req.useragent
  
  res.json({'ipaddress': ip,
           'language': language[0],
           'os': os,
           'browser': browser,
           // 'test': test
           });
  
});