const request = require('request');
 
request('http://127.0.0.1:8080', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
  console.log(body.explanation);
});