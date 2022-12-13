var fs = require('fs');
var rs = fs.createReadStream('./shyam.txt');
var data = fs.readFileSync('./shyam.txt')
rs.on('open', function () {
  console.log('The file is open');
  console.log(data.toString());
});