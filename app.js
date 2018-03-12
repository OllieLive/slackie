var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('HI OLLIE!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
    var userName = req.body.user_name;
    var botPayload = {
      text : 'hello ' + userName + ', welcome to Ollie Bot! I\'ll be your dickhead.'
    };
    // Loop otherwise..
    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  });