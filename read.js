let fs = require('fs');

let data = fs.readFileSync('data.txt');
console.log(JSON.parse(data));