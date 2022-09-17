const sdk = require('api')('@notionapi/v1#4rkc1lkz7dw9us');

sdk.retrieveADatabase({database_id: 'c2cda986ca17411f8f8d6f6360a104a3', 'notion-version': '2022-06-28'})
  .then(res => console.log(res))
  .catch(err => console.error(err));