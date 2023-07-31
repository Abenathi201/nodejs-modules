const os = require('os');

//Check Operating System
console.log(os.platform());

//Check OS architecture e.g(x64, x32,)
console.log(os.arch());

//Check the CPU
// console.log(os.cpus());

//Check the memory
console.log(os.totalmem());

//Check free memory
console.log(os.freemem());

//Getting the home directory
console.log(os.homedir());