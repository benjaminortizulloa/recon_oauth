var axios = require('axios');
var express = require('express');
var app = express();

app.get('/my-oauth', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CLIENT_ID = "d7b7ae0e1e00bb84d819"
  const CLIENT_SECRET = "198abc9afc220abd2c48ee00696a0f38b32b84e0"
  const CODE = req.query.code

  axios({
      method: 'post',
      url: GITHUB_AUTH_ACCESSTOKEN_URL,
      data: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: CODE
      }
    })
    .then(function (response) {
      console.log(response.data)
      res.redirect('http://localhost:8080/login?' + response.data)
    })
    .catch(function (error) {
      console.error('Error ' + error.message)
    })
});

app.listen(3000, function () {
  console.log('my-oauth listening on port 3000!');
});