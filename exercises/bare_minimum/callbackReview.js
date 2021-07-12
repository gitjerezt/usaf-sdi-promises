// /**
//  * Implement these functions following the node style callback pattern
//  */

// var fs = require('fs');
// var request = require('request');

// // This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFile = function (filePath) {
//   // TODO
// };

// // This function should retrieve the status code of a GET request to `url`
// var getStatusCode = function (url) {
//   // TODO
// };

// // Export these functions so we can test them and reuse them in later exercises
// module.exports = {
//   getStatusCode: getStatusCode,
//   pluckFirstLineFromFile: pluckFirstLineFromFile
// };
/**
 * Implement these functions following the node style callback pattern
 */
 var fs = require('fs');
 var request = require('request');
 //npm install xmlhttprequest


 // This function should retrieve the first line of the file at `filePath`
 var pluckFirstLineFromFile = function (filePath, callback) {
   // TODO
   fs.readFile(filePath, 'utf8', function (err, content) {
     console.log('Example from callbackReview.js')
     if (err) {
       console.log('fs.readFile failed :(\n', err)
       callback(err);
     } else {
       content = content.split('\r\n');
       content = content[0];
       console.log('fs.readFile successfully completed :', content);
       callback(null, content);
     }
   });

 };

 // This function should retrieve the status code of a GET request to `url`
 var getStatusCode = function (url, callback) {
   // TODO
   request(url, function (err, response) {
     if (err) {
       callback(err);
     } else {
       callback(null, response.statusCode)
     }
   });
 };

 // Export these functions so we can test them and reuse them in later exercises
 module.exports = {
   getStatusCode: getStatusCode,
   pluckFirstLineFromFile: pluckFirstLineFromFile
 };

