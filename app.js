const express = require('express'),
      app = express(),
      events = require('events'),
      eventEmitter = new events.EventEmitter(),
      bodyParser = require('body-parser'),
      validator = require('validator');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static(__dirname + '/public'));

//app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', urlEncodedParser, (req, res) => {
  res.render('index');
  console.log(req.body);

/*
    client.sendMessage({

      body: 'Phone: ' + req.body.phone + 'Message: ' + req.body.message
    }, (err, data) => {

      if (err) {
        eventEmitter.emit('twilioError');
        console.log('twilioerror');
        return console.error(err.message);
      }
      //console.log(data);

    });
*/

});

app.listen(3000);
