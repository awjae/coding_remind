// const sdk = require('api')('@notionapi/v1#4rkc1lkz7dw9us');

// sdk.retrieveADatabase({database_id: 'c2cda986ca17411f8f8d6f6360a104a3', 'notion-version': '2022-06-28'})
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

const sdk = require('api')('@notionapi/v1#4rkc1lkz7dw9us');

sdk.createADatabase({parent: '6c986c66edc74730897b4216043f3581', properties: 'string'}, {'notion-version': '2022-06-28'})
  .then(res => console.log(res))
  .catch(err => console.error(err));