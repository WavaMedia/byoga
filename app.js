var express  = require('express'),
    exphbr   = require('express3-handlebars'), // "express3-handlebars"
    helpers  = require('./lib/helpers'),
 bodyParser  = require('body-parser'),
 nodemailer  = require('nodemailer'),

    app = express(), handlebars;

// Create `ExpressHandlebars` instance with a default layout.
handlebars = exphbr.create({
    defaultLayout: 'default',
    helpers      : helpers,
    extname: '.html',

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: ['views/partials/']
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('html', handlebars.engine);
app.set('view engine', 'html');

app.use(function(req, res, next) {
    if (req.path.substr(-1) == '/' && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded());

require("./routes")(app, handlebars, nodemailer);

app.use(express.static('assets/'));
app.listen(3025);

console.log('Byoga website is running and listening on Port: 3025 :: Provided by WavaMedia');