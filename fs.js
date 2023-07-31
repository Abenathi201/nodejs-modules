const fs = require('fs');

//Reading a file
fs.readFile('./Files/file.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

//Writing into a file
const content = 'I am writing into file.txt file from hya';
fs.writeFile('file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File has written');
  }
}); 

//Checking if a file exists
fs.access('./Files/file.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File is Non-Existent');
    } else {
        console.log('It exist!!!');
    }
})