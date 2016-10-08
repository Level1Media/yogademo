var express = require('express');
var app = express();
var bodyParser = require('body-parser');


   // parse application/json
    app.use(bodyParser.json());                        

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.home);

app.get('/faq', routes.faq);

app.get('/contact', routes.contact);

app.get('/about', routes.contact);





// for heroku deployment
var port=Number(process.env.PORT || 3000);


app.listen(port, function (){
		console.log('Express listening on port ' + port);
});