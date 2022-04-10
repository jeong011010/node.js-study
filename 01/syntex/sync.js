var fs = require('fs');

/*
console.log('A');
var result = fs.readFileSync('syntex/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/
// 동기 ABC

console.log('A');
fs.readFile('syntex/sample.txt', 'utf8', function(err, result){

    console.log(result);
});
console.log('C');
// 비동기 ACB