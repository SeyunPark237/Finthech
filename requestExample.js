const request = require('request');
request('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-15&sortBy=publishedAt&apiKey=f1e3d507664640b7a5b7c05259461004', function (error, response, body) {
  
  console.log('body:', body); // Print the HTML for the Google homepage.
});
