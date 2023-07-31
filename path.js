const path = require('path');

//Getting the name of a file in a directory
const dirname = path.basename('./Files/file.txt');
console.log(dirname);

//Getting the name of a file in a directory
const dirname2 = path.dirname('./Files/file.txt');
console.log(dirname2);