

module.exports = function (app, handlebars, nodemailer) {

    // set up the routes themselves
       app.get('/', function (req, res) {
	    res.render('home', {
	        title: 'Home'
	    });
	});

	app.get('/index.html', function (req, res) {
	    res.render('home', {
	        title: 'Home'
	    });
	});

	app.get('/mission', function (req, res) {
	    res.render('mission', {
	        title: 'Mission'
	    });
	});

	app.get('/about', function (req, res) {
	    res.render('about', {
	        title: 'About'
	    });
	});

	app.get('/classes', function (req, res) {
	    res.render('classes', {
	        title: 'Classes'
	    });
	});

	app.get('/teachers', function (req, res) {
	    res.render('teachers', {
	        title: 'Teachers'
	    });
	});

	app.get('/contact', function (req, res) {
	    res.render('contact', {
	        title: 'Contact'
	    });
	});

	app.get('/success', function (req, res) {
	    res.render('success', {
	        title: 'success',
	        msg: 'Email sent successfully.'

	    });
	});

	app.post('/sendmail', function (req, res) {
		if(req.body.Submit === 'Submit'){
			// SEND EMAIL FROM FORM

	    	var mailOpts, smtpTrans;

			//Setup nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
			smtpTrans = nodemailer.createTransport('SMTP', {
				service: 'Gmail',
				auth: {
					user: "jemiloii@visualnovelx.com",
					pass: "5601043A" 
				}
	  		});

			//Mail options
			mailOpts = {
				from: req.body.email, //grab form data from the request body object
				to: 'Susan<susanvoss@mac.com>,Lisa<lisa.scurlock@gmail.com>',
				subject: 'Byoga Client Contact Form',
				html: 'From: ' + req.body.name + ' &lt;' + req.body.email + '&gt; <br>Phone: ' + req.body.phone + '<br>Message:<br>' + req.body.message + '<br><br><p>Email form provided by <a href="http://www.wavamedia.com/">WavaMedia</a>.',
				replyTo: req.body.email,
			};

			console.log('smtpTrans: '+smtpTrans+' mailOpts: '+ mailOpts+ 'nodemailer: ' + nodemailer);
			smtpTrans.sendMail(mailOpts, function (error, response) {
				//Email not sent
				if (error) {
					console.log('failure::fatality');
					res.redirect('/contact');
				}
				//Yay!! Email sent
				else {
					console.log('sent::victory');
					res.redirect('/success');
				}
			});

		}
	});
}