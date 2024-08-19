 // GLOBALS - NO WINDOW!!!!

 //__dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJs)
// module - info about current module (file)
// process - info about env where the program is being executed

//Common JS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

// const names = require('./2-name');
// const sayHi = require('./3-utils');
// const data = require('./4-alternative-favour');
// require('./5-mind-grenade');


// console.log(names);
// console.log(data);


// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

// npm - global command, comes with node
// npm --version

// local dependency - use it in only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// pakage.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);