// 네이버 기계번역 API 예제
const express = require('express');
const app = express();
const { OpenAIApi, Configuration } = require('openai');

let config = new Configuration({
  apiKey: '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',
});
let openai = new OpenAIApi(config);

const client_id = 'jTY09BfHE8xRZMUP8DS3';
const client_secret = 'JGFOpJbJ2W';

app.get('/translate', function (req, res) {
  const query = req.query.q;
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const request = require('request');
  const options = {
    url: api_url,
    form: {
      'source': 'ko',
      'target': 'en',
      'text': query
    },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let EN_TEXT = JSON.parse(body).message?.result.translatedText;
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: EN_TEXT,
        temperature: 0.7,
        max_tokens: 128,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }).then((result) => {
        console.log('ai 응답', result.data.choices[0].text);

        const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
        const query = result.data.choices[0].text;
        const options = {
          url: api_url,
          form: {
            'source': 'en',
            'target': 'ko',
            'text': query
          },
          headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret
          }
        };
        request.post(options, function (error, response, body) {
          console.log(body);
          // res.writeHead(200, {
          //   'Content-Type': 'text/json;charset=utf-8'
          // });
          res.status(200).json(body);
          // res.end();
        });
      }).catch((error) => {
        console.log('openai error', error)
      })
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})