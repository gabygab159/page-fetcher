const arg = process.argv.slice(2)
const fs = require('fs');
const { stdout } = require('process');
const request = require('request');


const urlString = String(arg)

// console.log(typeof urlString)

request(urlString, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body.length); 
  console.log("TYPE OF BODY--->" ,typeof body)
  fs.writeFile(arg[1], body, 'utf8', () => {
    stdout.write(`Downloaded and saved ${body.length} bytes to ${arg[1]} \n`)
  })

});

///////////
// use fs.writeFile() to write file
// return "Downloaded and saved x bytes to ./index.html" on the command line.