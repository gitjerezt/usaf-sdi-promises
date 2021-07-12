/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

 var fs = require('fs');
 var request = require('request');
 var Promise = require('bluebird');

 // This function should retrieve the first line of the file at `filePath`
 var pluckFirstLineFromFileAsync = function(filePath) {
   // TODO
   // content = content.split('\r\n');
   // content = content[0];
   // console.log('fs.readFile successfully completed :', content);
   return new Promise(function (resolve, reject){
     try{
       fs.readFile(filePath, 'utf8', function (err, content) {
         //console.log('Example from callbackReview.js')
         if (err) {
           //console.log('fs.readFile failed :(\n', err)
           reject(err);
         } else {
           content = content.split('\r\n');
           content = content[0];
           //console.log('fs.readFile successfully completed :', content);
           resolve(content);
         }
       });
     }
     catch(err){
       reject(err)
     }
   });
 };

 // This function should retrieve the status code of a GET request to `url`
 var getStatusCodeAsync = function(url) {
   // TODO
   return new Promise(function (resolve, reject){
     try{
       request(url, function (err, response) {
         if (err) {
           reject(err);
         } else {
           resolve(response.statusCode)
         }
       });
     }
     catch(err){
       reject(err)
     }
   });
 };

 // Export these functions so we can test them and reuse them in later exercises
 module.exports = {
   getStatusCodeAsync: getStatusCodeAsync,
   pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
 };
