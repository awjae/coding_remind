const express = require('express');
const app = express();
const request = require('request');
const { OpenAIApi, Configuration } = require('openai');

let config = new Configuration({
  apiKey: process.env.OEPNAP_KEY,
});
let openai = new OpenAIApi(config);



app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

const client_id = process.env.PAPAGO_ID;
const client_secret = process.env.PAPAGO_PW;

app.get('/translate', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const query = req.query.q;
   
  const options = {
       url: api_url,
       form: {'source':'ko', 'target':'en', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.post(options, function (error, response, body) {
       var 영어 = JSON.parse(body).message?.result.translatedText;

       openai.createCompletion({
          model: "text-davinci-002",
          prompt: 영어,
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
              form: {'source':'en', 'target':'ko', 'text':query},
              headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
          };
          request.post(options, function (error, response, body) {
            console.log(body);
            res.status(200).json(body);
              
          });


        }).catch((error)=>{
          console.log('openai error', error)
        })

   });
 });


 app.listen(3000, function () {
   console.log('http://localhost:3000/ app listening on port 3000!');
 });
