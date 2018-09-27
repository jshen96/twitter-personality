var express = require('express');
var router = express.Router();

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'Yv9etbNlCMjwJbq7fgjzhHnuk',
  consumer_secret:      'SmZ4oI4fzXKmPkv2vXm1LgMME8iSleBDiUn9FNY2TogK2l3b7z',
  access_token:         '365829978-dcDEh3P6ocqg50ximdv1VRhOUy81eUKiFXItAw3g',
  access_token_secret:  'G4vwbuhJjBU18PqtnostBV3qVB6tejpbPM4JbXLHqLWGV',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personalityInsights = new PersonalityInsightsV3({
  username: 'f605aea6-eccd-4457-bc24-13dceee7fe59',
  password: 'tR8gAiHNnJ8b',
  version: '2016-10-19',
  url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});


var getUserPersonality = function(nama,res){
  var tweetstext = "";
  var promise1 = new Promise(function(resolve, reject) {
    T.get('statuses/user_timeline', { screen_name: "jshen96", count: 1000 },
    function(err, data, response) {
      var arr = data;
      for(var i = 0; i<arr.length;i++){
        if(!arr[i].retweeted){
          tweetstext += arr[i].text;
        }
      }
      resolve(tweetstext);
    })
  });

  var responseFromIBM;
  promise1.then(function(value) {
    personalityInsights.profile(
      {
        content: tweetstext,
        content_type: 'text/plain',
        consumption_preferences: true
      },
      function(err, response) {
        if (err) {
          console.log('error:', err);
        } else {
          ibmJSON = response;
          res.send(response);
          return response;
        }
      }
    );
  });
}

router.get('/', function(req, res, next) {
  let s_name = req.query.screen_name;
  getUserPersonality(s_name,res);
});

module.exports = router;
