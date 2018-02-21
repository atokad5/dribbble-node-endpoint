const express = require('express'),
      app = express(),
      request = require('request')

require('dotenv').config()

let jData = '';


request('https://api.dribbble.com/v2/user/shots/?access_token='+ process.env.ACCESS_TOKEN, function (error, res, body) {
  if(res.statusCode === 200 ) {
    jData = body
    console.log(body)
  } else {
    jData = 'No data available'
  }
});

app.get('/', (req, res) => {
  res.send(JSON.parse(jData));
  res.end()
})

app.listen('8000', () => {
  console.log('logging...')
})