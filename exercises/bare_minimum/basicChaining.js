/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

//npm install --save request-promise
//var fs = require('fs');
var Promise = require('bluebird');
//var db = Promise.promisifyAll(require('../lib/db'));
var fs = Promise.promisifyAll(require('fs'));
var rp = require('request-promise');
//var request = Promise.promisify(require(request));


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
var userName;
// var body;
  return fs.readFileAsync(readFilePath, 'utf8')
  .then(function(content){
    //console.log("username : " + content + " : here");
    content = content.split('\r\n');
    content = content[0];
    console.log('fs.readFile successfully completed :', content);
      return userName = content;
    }).then(function(userName){
    var options = {
      url: 'https://api.github.com/users/' + userName,
      headers: { 'User-Agent': 'request' },
      json: true  // will JSON.parse(body) for us
    };
    //console.log(body);
    //console.log("Username++--: \n" + userName + " here");
      return rp(options);
      //
    }).then(function(body){
      console.log(body);
      return body;
    }).then(function(body) {
      console.log(JSON.stringify(body));
      return fs.writeFileAsync(writeFilePath, JSON.stringify(body), 'utf8');
  });
}

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};


